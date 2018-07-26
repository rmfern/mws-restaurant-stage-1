#Restaurant Reviews App as part of Front-End Web Developer Nanodegree
The overview below describes the goals of this stage of the Restaurant Reviews app. The nanodegree required only working with Stage 1 of the app (there are 3 stages total). As far as the overall UI, there are still things I want to change visually and will likely revisit this project to do so.

### How to run and view the Restaurant Reviews App
To run this app, you will need to have Python installed on your system. In Terminal or Command Prompt run `python -v`. It will tell you which version of Python you have installed. If you do not have Python installed, visit Python's [website](https://www.python.org/) to download and install.

Once you have python installed use Command Prompt or Terminal and cd into this app's folder, then run `python -m http.server 8001`.* (Note: I have also seen `python3 -m http.server 8001` as the line to use for Python 3, but at the time of writing this only the former worked for me while I had Python 3). Once the local server is running, open a browser and navigate to `http://localhost:8001` and the app should launch allowing you to view and use.

#### Project Overview: Stage 1
For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

##### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

##### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).
