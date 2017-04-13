from flask import Flask, render_template, request, redirect, session, flash
import random

app = Flask(__name__)
app.secret_key = 'D@7Numb@6@m37h0'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guess():
    # store user input in sesh
    session['guess'] = int(request.form['guess'])
    # validate user input and that input is correct
    if session['guess'] == '' or session['guess'] < 1 or session['guess'] > 100:
        flash('You need to enter a number between 1 and 100!')
    # logic: tracks tries
    if 'counter' not in session:
        session['counter'] = 1
    else:
        session['counter'] += 1
    # create random number if non existent
    if 'random' not in session:
        session['random'] = random.randrange(1, 101)
    print type(request.form['guess'])
    # logic for high/low/correct
    if session['random'] == session['guess']:
        resultPrint = "correct"
    elif session['guess'] > session['random']:
        resultPrint = "Too High"
    elif session['guess'] < session['random']:
        resultPrint = "Too Low"
    # store result in sesh
    session['result'] = resultPrint
    return redirect('/')

@app.route('/playagain', methods=['POST'])
def playagain():
    # reset sesh
    session.clear()
    return redirect('/')

app.run(debug=True)
