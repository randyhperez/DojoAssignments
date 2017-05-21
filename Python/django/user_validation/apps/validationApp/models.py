# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re

NAME_REGEX = re.compile(r'^[a-zA-Z]{1,}$')

# Create your models here.
class UsersManager(models.Manager):
    def validation(self, username):
        errors = []
        unique = User.objects.filter(name=username)
        if len(username) < 9:
            errors.append('Username must be greater than 8 characters')
        if len(username) > 16:
            errors.append("Username must be less than 16 characters")
        if not re.match(NAME_REGEX, username):
            errors.append("Username can't contain numbers or special characters")
        if unique:
            errors.append("Username already exists")
        if errors:
            return [False, errors]
        else:
            newUser = User(name=username)
            newUser.save()
            return [True]

class User(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UsersManager()
