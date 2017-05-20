# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Books

# Create your views here.
def index(request):
    context = {
        'books': Books.objects.all()
    }
    return render(request, 'booksApp/index.html', context)

def insert(request):
    if request.method == "POST":
        Books.objects.create(title=request.POST['title'], category=request.POST['category'], author=request.POST['author'])
    return redirect('/')
