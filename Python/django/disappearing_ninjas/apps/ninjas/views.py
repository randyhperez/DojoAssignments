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

# HTTP Error 404
def my_custom_page_not_found_view(request):
    print "&"*20
    print "Inside of the my_custom_page_not_found_view"
    response = render_to_response('404.html', context=RequestContext(request))
    response.status_code = 404
    print response
    return response
