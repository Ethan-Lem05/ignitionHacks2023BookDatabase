
from flask import Flask
from flask import render_template;
from flask import request;

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html");

@app.route("/survey", methods = ['GET', 'POST'])
def questions():
    if request.method == 'GET': #handles GET requests for the survey
        return render_template("questions.html");
    elif request.method == 'POST': #handles POST requests from the survey 
        #takes information about the users name 
        name = request.form["name"];
        #gathers information about race 
        race = request.form.getlist("race");
        gender = request.form.getlist("gender");
        sexuality = request.form.getlist("sexuality");
        religion = request.form.getlist("religion");
        print(race + gender + sexuality + religion);
        return "hello";

        

@app.route("/trending")
def trending():
    return render_template("trending.html");

if __name__ == "__main__":
    app.run(debug = True);

#returns the adequete response page with the included books 
def parse_questions_to_query(request):
    #process race 
    race = request.form
