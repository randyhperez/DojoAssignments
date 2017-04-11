from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def survResult():
    print "results"
    name = request.form['name']
    location = request.form['location']
    favLang = request.form['language']
    comment = request.form['comment']
    print name, location, favLang, comment
    return render_template("result.html", name=name, location=location, favLang=favLang, comment=comment)

app.run(debug=True)
