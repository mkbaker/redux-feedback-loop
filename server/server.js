const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require("./modules/pool.js");


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
//post route to submit reduxState to database
app.post('/submit', (req, res) => {
    console.log(req.body);
    pool.query(
        `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
            VALUES ($1, $2, $3, $4);`, req.body
      )
      .then(() => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('Error with INSERT INTO "feedback" query', error);
        res.sendStatus(500);
      });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});