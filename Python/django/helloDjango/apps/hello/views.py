# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def index(request):
    print "&" * 50
    return render(request, "Hello/index.html")
# Create your views here.
