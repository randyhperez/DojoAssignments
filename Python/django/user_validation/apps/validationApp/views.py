# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User

# Create your views here.
def index(request):
    return render(request, 'validationApp/index.html')

def validate(request):
    if request.method == 'POST':
        submit = User.objects.validation(request.POST['username'])
        if not submit[0]:
            for error in submit[1]:
                messages.error(request, error)
        else:
            request.session['username'] = request.POST['username']
            context = {
                'users': User.objects.all()
            }
            return render(request, 'validationApp/success.html', context)
    return redirect('/')

def verify(request, id):
    context = {
        'user': User.objects.get(id=id)
    }
    return render(request, 'validationApp/verify.html', context)

def delete(request, id):
    if request.POST.get('yes'):
        User.objects.filter(id=id).delete()
    return redirect ('/success')
