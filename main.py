from flask import Flask, render_template

app = Flask(__name__)


@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/questions")
def questions():
    return render_template("questions.html")


@app.route("/response")
def response():
    return render_template("response.html")


@app.route("/trending")
def trending():
    return render_template("trending.html")


if __name__ == "__main__":
    app.run(debug=True)  # Activate debug mode