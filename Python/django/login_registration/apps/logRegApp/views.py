# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Users

# Create your views here.
def index(request):
    return render(request, 'logRegApp/index.html')

def validate(request):
    if request.POST.get('register'):
        submit = Users.objects.validation(request.POST)
        if not submit[0]:
            for error in submit[1]:
                messages.error(request, error)
        else:
            request.session['name'] = request.POST['fName'] + ' ' + request.POST['lName']
            return render(request, 'logRegApp/success.html')
    elif request.POST.get('login'):
        submit = Users.objects.login(request.POST)
        if not submit[0]:
            for error in submit[1]:
                messages.error(request, error)
        else:
            request.session['name'] = submit[1].fName + ' ' +  submit[1].lName
            return render(request, 'logRegApp/success.html')
    return redirect('/')
