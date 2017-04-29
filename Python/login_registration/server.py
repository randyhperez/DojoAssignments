from flask import Flask, render_template, redirect, request, flash, session
from mysqlconnection import MySQLConnector
import re
from flask_bcrypt import Bcrypt

#email, name and password validations
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-z]*$')
NAME_REGEX = re.compile(r'^[a-zA-Z-]{2,}$')
PASSWORD_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$')

app = Flask(__name__)
app.secret_key = 'L061n&R3615tr@t!0n'
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'login_registration')

@app.route('/', methods=['GET'])
def login():
    return render_template('index.html')

@app.route('/validation', methods=['POST'])
def validation():
    #if user submit was register send to register route
    if request.form['submit'] == 'Register':
        return render_template('register.html')
    #if user submit was Login
    elif request.form['submit'] == 'Login':
        email = request.form['email']
        password = request.form['password']
        #Query DB for user login verification
        check_query = ("SELECT id, email, pw_hash FROM users WHERE email = :email")
        check_data = {'email': email}
        checker = mysql.query_db(check_query, check_data)
        #verify email and password match DB data/user input.
        #if they don't match
        if email != checker[0]['email'] or not bcrypt.check_password_hash(checker[0]['pw_hash'], password):
            flash("Incorrect Email or password")
            return redirect ('/')
        #if they match
        else:
            #store ID in session to allow login
            session['id'] = str(checker[0]['id'])
            return redirect('/success/' + str(session['id']))

@app.route('/register', methods=['POST'])
def register():
    fName = request.form['first_name']
    lName = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    #validate First and Last name
    if not NAME_REGEX.match(fName) or not NAME_REGEX.match(lName):
        flash("Please enter a valid name")
    #validate email
    elif not EMAIL_REGEX.match(email):
        flash("Please enter a valid email address")
    #validate password length
    elif len(password) <= 8 or not PASSWORD_REGEX.match(password):
        flash("Password must be at least 8 characters and must contain an uppercase, lowercase, number and symbol.")
    #validate password contains upper, lower, digit, special char
    elif password != request.form['conf_password']:
        flash("Passwords do not match")
    #if user input passes validation execute
    else:
        #Query DB to verify user is unique by checking if email exists
        unique_query = ("SELECT email FROM users WHERE email = :email")
        unique_data = {'email' :email}
        unique = mysql.query_db(unique_query, unique_data)
        #if user doesn't exist create user
        if not unique:
            #pw encryption
            pw_hash = bcrypt.generate_password_hash(password)
            #create user in DB
            new_query = ("INSERT INTO users(first_name, last_name, email, pw_hash, created_at, updated_at) VALUES(:fName, :lName, :email, :pw_hash, NOW(), NOW())")
            new_data = {
                        'fName': fName,
                        'lName': lName,
                        'email': email,
                        'pw_hash': pw_hash,
                       }
            mysql.query_db(new_query, new_data)
            #store ID in session to login
            success_query= ("SELECT id FROM users WHERE email = :email")
            success = mysql.query_db(success_query, new_data)
            session['id'] = str(success[0]['id'])
            return redirect('/success/' + str(success[0]['id']))
        #if user exists already
        else:
            flash("Error with email please select another email")
    return render_template('register.html')

@app.route('/success/<id>')
def success(id):
    #prevent direct access to login page URL if correct user isn't logged in.
    if 'id' not in session or id != session['id']:
        return redirect('/')
    #if correct user logged in
    else:
        #Query DB to display welcome msg
        user_query = ("SELECT first_name FROM users WHERE id = :id")
        user_data = {'id': id}
        user = mysql.query_db(user_query, user_data)
        session['id'] = id
        return render_template('success.html', user=user[0])

#log user out with sesh clear
@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    flash("You have been logged out")
    return redirect('/')

app.run(debug=True)
