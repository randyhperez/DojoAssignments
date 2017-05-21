# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-z]*$')
NAME_REGEX = re.compile(r'^[a-zA-Z]{2,}$')
PASSWORD_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$')

# Create your models here.
class UsersManager(models.Manager):
    def validation(self, data):
        errors = []
        unique = Users.objects.filter(email=data['email'])
        if len(data['fName']) < 2:
            errors.append('First name must be at least 2 characters')
        if not re.match(NAME_REGEX, data['fName']):
            errors.append('First name can only contain letters')
        if len(data['lName']) < 2:
            errors.append('Last name must be at least 2 characters')
        if not re.match(NAME_REGEX, data['lName']):
            errors.append('Last name can only contain letters')
        if unique:
            errors.append('Error with email please select another email')
        if not re.match(EMAIL_REGEX, data['email']):
            errors.append('Please enter a valid email address')
        if not re.match(PASSWORD_REGEX, data['password']) or data['password'] < 8:
            errors.append('Password must be greater than 8 characters and contain a lowercase, uppercase, number and symbol')
        if data['password'] != data['confpass']:
            errors.append('Passwords do not match')
        if errors:
            return [False, errors]
        else:
            Users.objects.create(fName=data['fName'], lName=data['lName'], email=data['email'], password=data['password'])
            return [True]
    def login(request, data):
        errors = []
        verify = Users.objects.filter(email=data['email'])
        if verify:
            user = Users.objects.get(email=data['email'])
            if data['password'] != user.password:
                errors.append('Invalid username or password')
        elif not verify or data['password'] != verify.get(password):
            errors.append('Invalid username or password')
        if errors:
            return [False, errors]
        else:
            return [True, user]



class Users(models.Model):
    fName = models.CharField(max_length=50)
    lName = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UsersManager()
