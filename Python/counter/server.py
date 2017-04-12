from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "supersecretkeyyo"

@app.route('/')
def index():
    session['pageCount'] += 1
    # try:
    #     session['pageCount'] += 1
    # except:
    #     session['pageCount'] = 1
    return render_template('index.html', counter=session['pageCount'])

@app.route('/counter', methods=['POST'])
def counter():
    if request.form['points'] == 'Reset':
        session['pageCount'] = 0
    elif request.form['points'] == 'Get +2':
        session['pageCount'] += 1
    return redirect('/')

app.run(debug=True)
