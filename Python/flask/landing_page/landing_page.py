from flask import Flask, render_template, request


app = Flask(__name__)


@app.route('/')
def landing_page():

    return render_template("index.html", userIp = request.remote_addr)

@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')

@app.route('/dojos/new')
def dojos():
    return render_template("dojo.html")

app.run(debug=True)
