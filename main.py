from flask import Flask
from flask import render_template;
from flask import request;
import db;


app = Flask(__name__);


@app.route("/")
def index():
    return render_template("index.html");

#returns the adequete response page with the included books 
def query_db_for_survey(race, gender, sexuality, religion):
    booklist = [];
    for book in db.data:
        for r in race:
            print(book["race"] + " " + r)
            if(contains(book["race"],r)):
                booklist.add(book)
        if contains(booklist,book):
            continue;
        for g in gender:
            if(contains(book["gender"],g)):
                booklist.add(book)
        if contains(booklist,book):
            continue;
        for s in sexuality:
            if(contains(book["sexuality"],s)):
                booklist.add(book)
        if contains(booklist,book):
            continue;
        for r in religion:
            if(contains(book["religion"],r)):
                booklist.add(book);
    print(booklist);

def contains(arr,a):
    for x in arr:
        if a == x:
            return True;
    return False;

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
        query_db_for_survey(race,gender,sexuality,religion);
        return render_template("response.html");

        

@app.route("/trending")
def trending():
    return render_template("trending.html");

if __name__ == "__main__":
    app.run(debug = True);


        