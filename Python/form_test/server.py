from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    try:
        print name
    except:
        name = "default"
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print "for Post Info"
    name = request.form['name']
    email = request.form['email']
    return redirect('/', name=name)
app.run(debug=True)
