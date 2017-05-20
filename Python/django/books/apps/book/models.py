# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Books(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=50)
    published_date = models.CharField(max_length=10)
    category = models.CharField(max_length=50)
    in_print = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
