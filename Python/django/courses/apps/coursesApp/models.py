# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Description(models.Model):
    desc = models.TextField()
    
class Courses(models.Model):
    name = models.CharField(max_length=255)
    desc = models.OneToOneField(Description)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
