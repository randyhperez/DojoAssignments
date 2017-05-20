# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import product

# Create your views here.
def index(request):
    product.objects.create(name='Xbox', description='Gaming Console', weight=20, price=299.99, cost=250.00, category='Video Games')
    test = product.objects.all()
    for item in test:
        print item.name, item.description, item.weight, item.price, item.cost, item.category
    return render(request, 'product/index.html')
