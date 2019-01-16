# Fantasy-Stats

This is a Node.js app that details team statistics from the 2018 Fantasy Baseball Season for the League of Ordinary Gentlemen (Yahoo Fantasy). 

In order to contribute to discussions, a user must create a login ID and password and then sign in. 

The main purpose of this app was to get more practice using Node.js to build server side applications using Express and MongoDB. 

It uses the Express framework on the backend, along with MongoDB to store the data. Other packages/libraries include Body-Parser, Connect-Flash, EJS (Embedded JavaScript), Express-Session, Method-Override, Mongoose, Passport, Passport-Local, and Passport-Local-Mongoose.

The data used was taken from the team pages in the Yahoo Fantasy League, put into CSV format, and then converted to JSON where it was imported into MongoDB. The app accesses MongoDB using Mongoose and displays the stats on the appropriate pages.

It is not currently hosted as a live website.