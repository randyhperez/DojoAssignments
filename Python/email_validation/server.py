from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

app = Flask(__name__)
app.secret_key = '3m@i1V@1d@7i0n'
mysql = MySQLConnector(app, 'emailvalid')

@app.route('/')
def index():
    return render_template('index.html')

#Validate email
@app.route('/validate', methods=['POST'])
def emailvalid():
    #if email not valid redirect to index.html and flash message
    if not EMAIL_REGEX.match(request.form['email']):
        flash('Email is not valid!')
        return redirect('/')
    #if email valid insert data into DB redirect to success.html
    else:
        session['email'] = request.form['email']
        flash(u"The email address you entered " + session['email'] + " is a VALID email address! Thank you!", "success")
        #Insert info into DB
        email_query = "INSERT INTO email(email, created_at, updated_at) VALUES(:email, NOW(), NOW())"
        email_data = {'email': request.form['email']}
        new_email = mysql.query_db(email_query, email_data)
        return redirect('/success')

#success page displays success, emails in DB and option to Delete email
@app.route('/success')
def succes():
    #Selects info from DB and passes to success.html to display
    select_query = "SELECT id, email, created_at FROM email"
    select_info = mysql.query_db(select_query)
    return render_template('success.html', select_info=select_info)

#verify delete email address from DB
@app.route('/deletecheck', methods=['POST'])
def deletechecker():
    #pulls id from hidden input
    checker_query = "SELECT email FROM email WHERE id = :id"
    checker_data = {'id': request.form['id']}
    delete_id = checker_data['id']
    email_checker = mysql.query_db(checker_query, checker_data)
    #passes just email and id back to html for dispaly and possible deletion post
    return render_template('rusure.html', email_checker=email_checker[0]['email'], delete_id=delete_id)

#if answer no to deletchecker redirects to /success
@app.route('/no', methods=['POST'])
def no():
    return redirect('/success')

#delete email
@app.route('/delete', methods=['POST'])
def delete():
    flash(u"The email address was deleted", 'deleted')
    #Delete info from DB based on id from success.html Delete button
    delete_query = "DELETE FROM email WHERE id = :id"
    delete_data = {'id': request.form['delete']}
    mysql.query_db(delete_query, delete_data)
    return redirect('/success')

app.run(debug=True)
