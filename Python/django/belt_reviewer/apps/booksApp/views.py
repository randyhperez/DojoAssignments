# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import messages
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
    context = {
        'reviews': ReviewsDB.objects.all()
    }
    return render(request, 'booksApp/books.html', context)

def add(request):
    if 'id' not in request.session:
        return redirect('booksApp:index')
    context = {
        'authors': AuthorsDB.objects.all()
    }
    return render(request, 'booksApp/addBook.html', context)

def addBook(request):
    if request.method == 'POST':
        if request.POST['add_author'] != '':
            print 'Add Author'
            response = AuthorsDB.objects.create_author(request.POST, request.session['id'])
            if not response[0]:
                messages.error(request, response[1])
                return redirect('booksApp:add')
        elif request.POST['existing_author'] != 'choose':
            print 'Existing Author'
            response = AuthorsDB.objects.get_author(request.POST)
        newBook = BooksDB.objects.create_book(request.POST, response[0].id, request.session['id'])
        if not newBook[0]:
            messages.error(request, newBook[1])
            return redirect('booksApp:add')
        ReviewsDB.objects.create_review(request.POST, newBook[0].id, request.session['id'])
    return redirect('booksApp:books')

def bookReview(request, id):
    context = {
        'book': BooksDB.objects.get(id=id),
        'reviews': ReviewsDB.objects.filter(book__id=id)
    }
    return render(request, 'booksApp/bookspage.html', context)


def addReview(request, id):
    ReviewsDB.objects.create_review(request.POST, id, request.session['id'])
    return redirect('booksApp:bookReview', id)

def user(request, id):
    context = {
        'user': Users.objects.get(id=id),
        'books': BooksDB.objects.filter(user__id=id),
    }
    return render(request, 'booksApp/userpage.html', context)

def delete(request, id):
    ReviewsDB.objects.get(id=id).delete()
    return redirect('booksApp:books')
