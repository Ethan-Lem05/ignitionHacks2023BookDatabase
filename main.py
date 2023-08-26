from flask import Flask
from flask import render_template;

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html");

@app.route("/survey")
def questions():
    return render_template("questions.html");

@app.route("/trending")
def trending():
    return render_template("trending.html");

if __name__ == "__main__":
    app.run(debug = True);
