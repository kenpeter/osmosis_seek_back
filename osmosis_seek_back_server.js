const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const db = require('./config/db');

// port
const port = 8007;

// cannot handle submited form with encoded
app.use(bodyParser.urlencoded({ extended: true }));

//
app.use(cors());

// mongo connect
// with db url
// callback with err, and actual db
MongoClient.connect(db.url, (err, database) => {
  // err
  if (err) return console.log(err);

  // require app routes
  require('./app/routes')(app, database);

  // listent to port
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
