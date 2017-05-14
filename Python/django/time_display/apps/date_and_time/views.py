# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
from django.utils import timezone
from time import strftime

# Create your views here.
def index(request):
    print strftime("%b %d, %Y %I:%M %p")
    context = {
        'date_time': strftime("%b %d, %Y %I:%M %p")
    }
    return render(request, 'date_and_time/index.html', context)
