# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, render_to_response
from django.template import RequestContext

# Create your views here.
def index(request):
    return render(request, 'ninjas/index.html')

def ninjas(request):
    return render(request, 'ninjas/ninja.html')

def ninjaColor(request, color):
    if color == 'blue':
        context = {
            'img': 'ninjas/img/leonardo.jpg',
            'turtle': 'Leonardo'
        }
    elif color == 'orange':
        context = {
            'img': 'ninjas/img/michelangelo.jpg',
            'turtle': 'Michelangelo'
        }
    elif color == 'red':
        context = {
            'img': 'ninjas/img/raphael.jpg',
            'turtle': 'Raphael'
        }
    elif color == 'purple':
        context = {
            'img': 'ninjas/img/donatello.jpg',
            'turtle': 'Donatello'
        }
    else:
        context = {
            'img': 'ninjas/img/notapril.jpg',
            'turtle': 'April'
        }
    return render(request, 'ninjas/ninjacolor.html', context)
