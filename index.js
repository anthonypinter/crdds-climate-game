const express = require('express');
const app = express();
const http = require('http').Server(app);
const mysql = require('mysql');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mysql_pool = mysql.createPool({
    connectionLimit: 100,
    host: "open-climate-game-data.ca01ucxlqya6.us-west-2.rds.amazonaws.com",
    user: "",
    password: "",
});

//support posting form data with url encoded
app.use(express.urlencoded({ extended: true })); 

//  Enable CORS

 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});


app.get('/', function (req, res) {
    res.send('Hello World!'); // This will serve your request to '/'.
  });
  
  http.listen(443, function () {
    console.log('App listening on port 3000!');
   });

   //q1yes, q1no, q2yes, q2no, q3yes, q3no, q4yes, q4no, q5yes, q5no, q6yes, q6no, q7yes, q7no

app.post('/questions', (req, res) => {
    mysql_pool.getConnection(function(err, connection) {
		if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        console.log('Request received');
        console.log(req.body);
        if (req.body.answer == 'yes') {
            //con.query(`INSERT INTO main.questions (q1yes, q1no) VALUES ('${req.query.q1yes}', '${req.query.q1no}')`, function(err, result, fields) 
            connection.query(`UPDATE main.questions SET qyes = (qyes + 1) WHERE id = '${ req.body.question }'`, function(err, results, fields) {
                if (err) res.send(err);
                if (results) res.send({question: req.query.question, answer: req.query.answer});
                if (fields) console.log(fields);
            });
      } else {
            //con.query(`INSERT INTO main.questions (q1yes, q1no) VALUES ('${req.query.q1yes}', '${req.query.q1no}')`, function(err, result, fields) 
            connection.query(`UPDATE main.questions SET qno = (qno + 1) WHERE id = '${ req.body.question }'`, function(err, results, fields) {
                if (err) res.send(err);
                if (results) res.send({question: req.body.question, answer: req.body.answer});
                if (fields) console.log(fields);
            });
            connection.release();
        }
        
});});

app.get('/questions', (req, res) => {
    mysql_pool.getConnection(function(err, connection) {
		if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
	    
        connection.query(`SELECT * FROM main.questions`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result);
        });
    });
});