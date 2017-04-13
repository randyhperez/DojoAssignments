from flask import Flask, render_template, request, redirect, session, flash
import random

app = Flask(__name__)
app.secret_key = 'D@7Numb@6@m37h0'

@app.route('/')
def index():
    print session
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guess():
    session['guess'] = int(request.form['guess'])
    if session['guess'] == '' or session['guess'] < 1 or session['guess'] > 100:
        flash('You need to enter a number between 1 and 100!')
    else:
        if 'counter' not in session:
            session['counter'] = 1
        else:
            session['counter'] += 1
        print "type sesh guess", type(session['guess'])
        def randomNumber():
            session['random'] = random.randrange(1, 101)
        if 'random' not in session:
            randomNumber()
        print type(request.form['guess'])
        if session['random'] == session['guess']:
            resultPrint = "correct"
        elif session['guess'] > session['random']:
            resultPrint = "Too High"
        elif session['guess'] < session['random']:
            resultPrint = "Too Low"
        session['result'] = resultPrint
        print session['result']
        print "guess", session['guess']
        print "random", session['random']
    return redirect('/')

@app.route('/playagain', methods=['POST'])
def playagain():
    session.clear()
    return redirect('/')

app.run(debug=True)
