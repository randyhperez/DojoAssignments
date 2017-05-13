from flask import Flask, render_template, request, redirect, session, flash
import random
import time

app = Flask(__name__)
app.secret_key = 'D@7N1nj@601d'

@app.route('/')
def index():
    # Create keys/value in session if non existent
    if 'gold' not in session:
        session['gold'] = 0
    if 'earnedAmt' not in session:
        earnedAmt = 0
    if 'msg' not in session:
        session['msg'] = []
    print session
    return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def process_money():
    #store previous amt and date of action
    prevAmt = session['gold']
    session['tDate'] = time.strftime("%Y/%d/%m %I:%M %p")
    # logic for action
    if request.form['building'] == 'farm':
        session['gold'] += random.randrange(10,21)
    elif request.form['building'] == 'cave':
        session['gold'] += random.randrange(5,11)
    elif request.form['building'] == 'house':
        session['gold'] += random.randrange(1,6)
    # validate casino/gold amt
    elif request.form['building'] == 'casino' and session['gold'] < 1:
        flash('You need at least 1 gold to play at the casino. Go get gold!')
    # logic for casino win/loss ratio and win amt
    elif request.form['building'] == 'casino' and session['gold'] > 0:
        prevAmt = session['gold']
        winLoss = random.randrange(1,101)
        if winLoss <= 25:
            session['gold'] += random.randrange(1,50)
        elif winLoss > 25 and session['gold'] < 50:
            session['gold'] -= random.randrange(1, session['gold'] + 1)
        else:
            session['gold'] -= random.randrange(1,50)
    # store building/earnedAmt value and append msg based on results of button action
    earnedAmt = session['gold'] - prevAmt
    session['building'] = request.form['building']
    if session['building'] == 'casino':
        print 'hello', earnedAmt
        if earnedAmt == 0:
            pass
        elif earnedAmt < 0:
            session['msg'].append('<p class="red">' + 'Entered a ' + session['building'] + ' and lost ' + str(earnedAmt) + " golds... Ouch.. " + session['tDate'] + '</p>')
            earnedAmt = 0
        else:
            session['msg'].append('<p class="green">' + 'Entered a ' + session['building'] + ' and won ' + str(earnedAmt) + " golds! Great success!!  " + session['tDate'] + '</p>')
    else:
        session['msg'].append('<p class="green">' +'Earned ' + str(earnedAmt) + " golds from the " + session['building'] + " " + session['tDate'] + '</p>')
    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    # reset sesh
    session.clear()
    return redirect('/')

app.run(debug=True)
