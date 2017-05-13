from flask import Flask, render_template, redirect, request, flash, session
from mysqlconnection import MySQLConnector
import re

#name and email validation variables
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
NAME_REGEX = re.compile(r'^[a-zA-Z-]{2,}$')

app = Flask(__name__)
app.secret_key = 'Fu11Fr!3nd5'
#connect app and SQL DB
mysql = MySQLConnector(app, 'full_friends')

@app.route('/', methods=['GET'])
def index():
    #create query for display of all friends on index.html
    friends_query = ("SELECT id, first_name, last_name, email FROM friends")
    all_friends = mysql.query_db(friends_query)
    return render_template('index.html', all_friends=all_friends)

@app.route('/friends', methods=['POST'])
def create_friend():
    #store fist name, last name and email form form submit in variables
    fName = request.form['first_name']
    lName = request.form['last_name']
    email = request.form['email']
    #validate Name, if doesn't pass executes bottom return
    if not NAME_REGEX.match(fName) or not NAME_REGEX.match(lName):
        flash('Please enter a valid name')
    #validate Email, if doesn't pass executes bottom return
    elif not EMAIL_REGEX.match(email):
        flash('Please enter a valid email address')
    #if Name and Email are correct creates query/data and sends it over
    else:
        create_query = ("INSERT INTO friends(first_name, last_name, email, created_at, updated_at)  VALUES(:fName, :lName, :email, NOW(), NOW())")
        friend_data = {
                        'fName': fName,
                        'lName': lName,
                        'email': email
                      }
        new_friend = mysql.query_db(create_query, friend_data)
    return redirect('/')

@app.route('/friends/<id>/edit', methods=['GET'])
def edit_friend(id):
    #create SELECT query based off ID
    verify_query = ("SELECT id, first_name, last_name, email FROM friends WHERE id = :id")
    verify_data = {'id': id}
    verify = mysql.query_db(verify_query, verify_data)
    return render_template('edit.html', verify=verify[0])

@app.route('/friends/<id>', methods=['POST'])
def update_friend(id):
    #store fist name, last name and email form form submit in variables
    fName = request.form['first_name']
    lName = request.form['last_name']
    email = request.form['email']
    #validate Name, if doesn't pass executes bottom return
    if not NAME_REGEX.match(fName) or not NAME_REGEX.match(lName):
        flash('Please enter a valid name')
    #validate Email, if doesn't pass executes bottom return
    elif not EMAIL_REGEX.match(email):
        flash('Please enter a valid email address')
    #if Name and Email are correct creates query/data and sends it over
    else:
        update_query = ("UPDATE friends SET first_name = :fName, last_name = :lName, email = :email, updated_at = NOW() WHERE id = :id")
        updated_data = {
                        'fName': fName,
                        'lName': lName,
                        'email': email,
                        'id': id
                       }
        update = mysql.query_db(update_query, updated_data)
        return redirect('/')
    return redirect('/friends/' + str(id) + '/edit')

@app.route('/friends/<id>/delete', methods=['POST'])
def deleted_friend(id):
    #create DELETE  query based off ID
    delete_query = ("DELETE FROM friends WHERE id = :id")
    delete_data = {'id': id}
    delete = mysql.query_db(delete_query, delete_data)
    return redirect('/')

app.run(debug=True)
