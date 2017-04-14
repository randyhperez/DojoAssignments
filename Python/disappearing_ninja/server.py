from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

#route for ninja sends img/peep to render ninja.html
@app.route('/ninja')
def ninja():
    img = 'img/tmnt.png'
    peep = 'the teenage mutant ninja turtles'
    return render_template('ninja.html', img=img, peep=peep)

# depending on ninjacolor sets img/peep to render correct ninja.html else it redirects to 404
@app.route('/ninja/<ninjacolor>')
def tmnt(ninjacolor):
    if ninjacolor == 'blue':
        img = 'img/leonardo.jpg'
        peep = 'Leonardo'
    elif ninjacolor == 'orange':
        img = 'img/michelangelo.jpg'
        peep = 'Michelangelo'
    elif ninjacolor == 'red':
        img = 'img/raphael.jpg'
        peep = 'Raphael'
    elif ninjacolor == 'purple':
        img = 'img/donatello.jpg'
        peep = 'Donatello'
    else:
        return redirect(404)
    return render_template('ninja.html', peep=peep, img=img)

# modified 404 route to display april
@app.errorhandler(404)
def page_not_found(e):
    img = 'img/notapril.jpg'
    peep = 'April'
    return render_template('ninja.html', img=img, peep=peep), 404

app.run(debug=True)
