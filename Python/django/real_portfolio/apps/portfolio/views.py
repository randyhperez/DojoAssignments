# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    print "index"
    return render(request, 'portfolio/index.html')
def projects(request):
    return render(request, 'portfolio/projects.html')
def about(request):
    print "about"
    return render(request, 'portfolio/about.html')
def testimonials(request):
    return render(request, 'portfolio/testimonials.html')
