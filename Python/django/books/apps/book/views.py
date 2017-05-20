# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Books

# Create your views here.
def index(request):
    # Books.objects.create(title='No Country for Old Men', author='Cormac McCarthy', published_date='07/19/2005', category='Fiction')
    # Books.objects.create(title='Jurassic Park', author='Michael Chrichton', published_date='11/20/1990', category='Fiction')
    # Books.objects.create(title='The Amazing Adventures of Kavalier & Clay', author='Michael Chabon', published_date='09/19/2000', category='Fiction')
    # Books.objects.create(title='The Fellowship of The Ring', author='J.R.R Tolkien', published_date='07/19/1954', category='Fiction')
    books = Books.objects.all()
    print books
    context = {
        'books': Books.objects.all()
    }
    return render(request, 'book/index.html', context)
