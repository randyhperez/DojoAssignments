# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Users, Secrets, Likes

# Create your views here.
def index(request):
    return render(request, 'secrets/index.html')

def log_reg(request):
    if request.method == 'POST':
        if request.POST['action'] == 'register':
            print 'register'
            register = Users.objects.validate(request.POST)
            if not register[0]:
                for error in register[1]:
                    messages.error(request, error)
            else:
                request.session['id'] = register[1].id
                request.session['fName'] = register[1].fName
                return redirect('secrets')
        elif request.POST['action'] == 'login':
            print 'login'
            login = Users.objects.login(request.POST)
            if not login[0]:
                for error in login[1]:
                    messages.error(request, error)
                print 'if'
            else:
                request.session['id'] = login[1].id
                request.session['fName'] = login[1].fName
                return redirect('secrets')
    return redirect('/')


def secrets(request):
    if 'id' not in request.session:
        return redirect('/')
    context = {
        'secrets': Secrets.objects.get_secrets(),
        'likes': Likes.objects.get_likes(),
    }
    likes = Likes.objects.get_likes()
    for like in likes:
        print 'like ID:', like.id, 'User ID:', like.users.id, 'Secret ID:', like.secrets.id
    return render(request, 'secrets/secrets.html', context)

def post(request):
    if request.method == 'POST':
        Secrets.objects.post_secret(request.POST['secret'], request.session['id'])
        return redirect('secrets')

def likes(request, secret_id):
    Likes.objects.like_secret(request.session['id'], secret_id)
    return redirect('secrets')

def delete(request, secret_id):
    if request.method == 'POST':
        Secrets.objects.filter(id=secret_id).delete()
    return redirect('secrets')

def popular(request):
    pass


def logout(request):
    request.session.clear()
    return redirect('/')
