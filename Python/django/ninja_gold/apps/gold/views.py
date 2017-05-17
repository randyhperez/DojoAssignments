# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
import random
from time import strftime

# Create your views here.
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'msg' not in request.session:
        request.session['msg'] = []
    return render(request, 'gold/index.html')

def processMoney(request):
    prevAmt = request.session['gold']
    request.session['tDate'] = strftime("%Y/%d/%m %I:%M %p")
    if 'farm' in request.POST:
        request.session['gold'] += random.randrange(10,21)
        building = 'Farm'
    elif 'cave' in request.POST:
        request.session['gold'] += random.randrange(5,11)
        building = 'Cave'
    elif 'house' in request.POST:
        request.session['gold'] += random.randrange(2,6)
        building = 'House'
    elif 'casino' in  request.POST and request.session['gold'] < 1:
        messages.add_message(request, messages.INFO, 'You need at least 1 gold to play at the casino. Go get gold!')
        return redirect('/')
    elif 'casino' in request.POST:
        building = 'Casino'
        winLoss = random.randrange(1,101)
        if winLoss <= 25:
            request.session['gold'] += random.randrange(1,50)
        else:
            request.session['gold'] -= random.randrange(1,50)
    earnedAmt = request.session['gold'] - prevAmt
    print 'earned', earnedAmt
    if building == 'Casino':
        print 'hello', earnedAmt
        if earnedAmt == 0:
            pass
        elif earnedAmt < 0:
            request.session['msg'].append('<p class="red">' + 'Entered a ' + building + ' and lost ' + str(earnedAmt) + " golds... Ouch.. " + request.session['tDate'] + '</p>')
            earnedAmt = 0
        else:
            request.session['msg'].append('<p class="green">' + 'Entered a ' + building + ' and won ' + str(earnedAmt) + " golds! Great success!!  " + request.session['tDate'] + '</p>')
    else:
        request.session['msg'].append('<p class="green">' +'Earned ' + str(earnedAmt) + " golds from the " + building + " " + request.session['tDate'] + '</p>')
    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')
