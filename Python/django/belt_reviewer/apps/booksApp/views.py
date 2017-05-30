# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from ..logRegApp.models import Users
from .models import AuthorsDB, BooksDB, ReviewsDB

# Create your views here.
def index(request):
    print 'Books APP index'
    return render(request, 'booksApp/index.html')

def books(request):
    print 'Books APP Books'
    if 'id' not in request.session:
        return redirect('booksApp:index')
    return render(request, 'booksApp/books.html')

def add(request):
    if 'id' not in request.session:
        return redirect('booksApp:index')
    return render(request, 'booksApp/addBook.html')

def addBook(request):
    if request.method == 'POST':
        if request.POST['add_author'] != '':
            print 'Add Author'
            response = AuthorsDB.objects.create_author(request.POST, request.session['id'])
            if not response[0]:
                messages.error(request, response[1])
                return redirect('booksApp:add')
        elif request.POST['existing_author'] == 'choose':
            print 'Existing Author'
        newBook = BooksDB.objects.create_book(request.POST, response[0].id, request.session['id'])
        if not newBook[0]:
            messages.error(request, response[1])
            return redirect('booksApp:add')
        ReviewsDB.objects.create_review(request.POST, newBook[0].id, request.session['id'])
    return render(request, 'booksApp/books.html')


def addReview(request):
    pass

def user(request):
    pass
