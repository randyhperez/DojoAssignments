# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Courses, Description

# Create your views here.
def index(request):
    context = {
        'courses': Courses.objects.all()
    }
    return render(request, 'coursesApp/index.html', context)

def insert(request):
    if request.method == 'POST':
        desc = Description(desc=request.POST['desc'])
        desc.save()
        Courses.objects.create(name=request.POST['name'], desc=desc)
    return redirect('/')

def verify(request, id):
    context = {
    'course': Courses.objects.get(id=id)
    }
    if request.method == 'POST':
        print 'hi'
    return render(request, 'coursesApp/delete.html', context)



def delete(request, id):
    if request.POST.get('yes'):
        Courses.objects.filter(id=id).delete()
    return redirect('/')
