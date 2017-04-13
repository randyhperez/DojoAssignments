from flask import Flask, render_template, request, redirect, session, flash
import random
import time

app = Flask(__name__)
app.secret_key = 'D@7N1nj@601d'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def process_money():
    # Create keys in session if non existent
    if 'gold' not in session:
        print "no gold"
        session['gold'] = 0
        print session['gold']
    if 'earnedAmt' not in session:
        session['earnedAmt'] = 0
    if 'msg' not in session:
        session['msg'] = []
    # set previous amount and capture date of action
    prevAmt = session['gold']
    session['tDate'] = time.strftime("%Y/%d/%m %I:%M %p")
    # logic for action
    if request.form['building'] == 'farm':
        session['gold'] += random.randrange(10,21)
        session['earnedAmt'] = session['gold'] - prevAmt
    elif request.form['building'] == 'cave':
        session['gold'] += random.randrange(5,11)
        session['earnedAmt'] = session['gold'] - prevAmt
    elif request.form['building'] == 'house':
        session['gold'] += random.randrange(1,6)
        session['earnedAmt'] = session['gold'] - prevAmt
    # validate casino/gold amt
    elif request.form['building'] == 'casino' and session['gold'] < 1:
        flash('You need at least 1 gold to play at the casino. Go get gold!')
    # logic for casino win/loss ratio and win amt
    elif request.form['building'] == 'casino' and session['gold'] > 0:
        prevAmt = session['gold']
        winLoss = random.randrange(1,101)
        if winLoss <= 25:
            session['gold'] += random.randrange(1,50)
            session['earnedAmt'] = session['gold'] - prevAmt
        elif winLoss > 25 and session['gold'] < 50:
            session['gold'] -= random.randrange(1, session['gold'] + 1)
            session['earnedAmt'] = session['gold'] - prevAmt
        else:
            session['gold'] -= random.randrange(1,50)
            session['earnedAmt'] = session['gold'] - prevAmt
    # store button value and append msg based on results of button action
    session['building'] = request.form['building']
    if session['building'] == 'casino':
        print 'hello', session['earnedAmt']
        if session['earnedAmt'] == 0:
            pass
        elif session['earnedAmt'] < 0:
            print "earned if"
            session['msg'].append(str('Entered a ' + session['building'] + ' and lost ' + str(session['earnedAmt']) + " golds... Ouch.. " + session['tDate']))
            session['earnedAmt'] = 0
        else:
            session['msg'].append(str('Entered a ' + session['building'] + ' and won ' + str(session['earnedAmt']) + " golds! Great success!!  " + session['tDate']))
    else:
        session['msg'].append(str('Earned ' + str(session['earnedAmt']) + " golds from the " + session['building'] + " " + session['tDate']))
    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)
