from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/payment')
def payment():
    return render_template('index.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route("/map")
def map():
    return render_template('map.html')

@app.route("/army")
def army():
    return render_template('generic.html')

@app.route("/kitchen")
def kitchen():
    return render_template('elements.html')

@app.route("/bot")
def bot():
    return render_template('chatbot.html')