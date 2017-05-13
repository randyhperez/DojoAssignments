from flask import Flask, render_template, request, redirect, session, flash
import re
import time

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

app = Flask(__name__)
app.secret_key = "R3615r@710nF0rm"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate_submit', methods=['POST'])
def vSubmit():
    # validate first name
    if len(request.form['first_name']) > 0:
        if not request.form['first_name'].isalpha():
            flash(u"Your name can't contain special characters", 'first_name')
    else:
        flash(u'Enter a first name','first_name')
    # validate last name
    if len(request.form['last_name']) > 0:
        if not request.form['last_name'].isalpha() and request.form['first_name'].isalpha():
            flash(u"Your name can't contain special characters", 'last_name')
    else:
        flash(u'Enter a last name', 'last_name')
    # validate email
    if len(request.form['email']) < 1 or not EMAIL_REGEX.match(request.form['email']):
        flash(u'Enter a valid email address', 'email')
    else:
        pass
    # validate password
    if len(request.form['password']) > 1:
        if len(request.form['password']) < 9:
            flash(u'Password must be more than 8 characters', 'password')
        elif request.form['password'] != request.form['confirm_password']:
            flash(u'Passwords do not match', 'password')
        elif pValidate(request.form['password']):
            flash(u'Password must contain at least 1 lowercase, uppercase and number','password')
    else:
        flash(u'Enter a password', 'password')
    # validate date
    if len(request.form['date']) > 1:
        if not bdayValidate(request.form['date']):
            flash(u'Please verify the date is mm/dd/yyyy and is no in the future', 'date')
    else:
        flash(u'Please enter a Birthdate', 'date')
    # If all pass great succss msg
    if "_flashes" not in session:
        flash(u'Thanks for registering', 'success')
    return redirect('/')

# verifies password contains upper, lower and digit
def pValidate(str):
    upper = 0
    lower = 0
    dig = 0
    for idx in str:
        if idx.isupper():
            upper += 1
        elif idx.isdigit():
            dig += 1
        elif idx.islower():
            lower += 1
    if lower == 0 or upper == 0 or dig == 0:
        return True
    else:
        return False

# validate Birthdate entry
def bdayValidate(bday):
    # capture current day / month /time
    day = time.strftime("%d")
    month = time.strftime("%m")
    year = time.strftime("%Y")
    # split bday to validate verse captured date and length
    bday = bday.split('-')
    if len(bday[0]) != 4 or len(bday[1]) > 2 or len(bday[2]) > 2:
        return False
    elif int(bday[0]) > int(year):
        return False
    elif int(bday[1]) > int(month):
        return False
    elif int(bday[2]) > int(day):
        return False
    else:
        return True

app.run(debug=True)
