# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Users

# Create your views here.
def log_reg(request):
    print 'Hello'
    if request.method == 'POST':
        print 'HELLO'
        if request.POST['action'] == 'register':
            response = Users.objects.validate(request.POST)
        elif request.POST['action'] == 'login':
            response = Users.objects.login(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error)
        else:
            request.session['id'] = response[1].id
            request.session['fName'] = response[1].fName
            return redirect('booksApp:books')
    return redirect('booksApp:index')

def logout(request):
    request.session.clear()
    return redirect('booksApp:index')
