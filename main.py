from distutils.log import debug
from flask import Flask, request, render_template

app = Flask(__name__)

## Frontend Routes

@app.route("/")
def home():
    return render_template("frontend/index.html")

@app.route("/about-us")
def about():
    return render_template("frontend/about.html")

@app.route("/projects")
def projects():
    return render_template("frontend/projects.html")

@app.route("/tenders")
def tenders():
    return render_template("frontend/tenders.html")

@app.route("/media")
def media():
    return render_template("frontend/media.html")

@app.route("/careers")
def careers():
    return render_template("frontend/careers.html")

@app.route("/publications")
def publications():
    return render_template("frontend/publications.html")

@app.route("/whatwedo")
def whatwedo():
    return render_template("frontend/whatwedo.html")

@app.route("/boardmembers")
def boardmembers():
    return render_template("frontend/boardmember.html")

@app.route("/topmanagement")
def topmanagement():
    return render_template("frontend/topmanagement.html")

@app.route("/regionaloffices")
def regionaloffices():
    return render_template("frontend/regionaloffices.html")

@app.route("/serviceCharter")
def serviceCharter():
    return render_template("frontend/serviceCharter.html")
    
@app.route("/feedback")
def feedback():
    return render_template("frontend/feedback.html")

@app.route("/videos")
def videos():
    return render_template("frontend/videos.html")


@app.route("/contact-us")
def contact():
    return render_template("frontend/contact.html")

@app.route("/laboratoryServices")
def laboratoryServices():
    return render_template("frontend/laboratoryServices.html")

@app.route("/surfacewater")
def surfacewater():
    return render_template("frontend/surfacewater.html")

@app.route("/groundwater")
def groundwater():
    return render_template("frontend/groundwater.html")

@app.route("/waterquality")
def waterquality():
    return render_template("frontend/waterquality.html")



## End Frontend Routes

## Backend Routes

## Backend Roues


if __name__ == '__main__':
    app.run(debug=True)