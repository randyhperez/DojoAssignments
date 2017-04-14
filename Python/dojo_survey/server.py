from flask import Flask, render_template, request, redirect, flash, session

app = Flask(__name__)
app.secret_key = "D0j05urv3y"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def survResult():
    print "results"
    if len(request.form['name']) < 1:
        flash("Please enter your name!")
        return redirect('/')
    if len(request.form['comment']) > 120:
        flash('Comments have to be under 120 characters')
        return redirect('/')
    else:
        name = request.form['name']
        location = request.form['location']
        favLang = request.form['language']
        comment = request.form['comment']
        print name, location, favLang, comment
        return render_template("result.html", name=name, location=location, favLang=favLang, comment=comment)

app.run(debug=True)
