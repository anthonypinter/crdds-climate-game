const mysql = require('mysql');

const con = mysql.createConnection({
    host: "open-climate-game-data.ca01ucxlqya6.us-west-2.rds.amazonaws.com",
    user: "",
    //password: "",
    timeout: 60000
});

con.connect(function(err) {
    if (err) throw err;

    con.query('CREATE DATABASE IF NOT EXISTS main;');
    con.query('USE main;');
    con.query('DROP TABLE IF EXISTS questions');
    //con.query('CREATE TABLE IF NOT EXISTS questions(id int NOT NULL AUTO_INCREMENT, q1yes int, q1no int, q2yes int, q2no int, q3yes int, q3no int, q4yes int, q4no int, q5yes int, q5no int, q6yes int, q6no int, q7yes int, q7no int, PRIMARY KEY(id));', function(error, result, fields) {
    con.query('CREATE TABLE IF NOT EXISTS questions(id int NOT NULL AUTO_INCREMENT, qyes int, qno int, PRIMARY KEY(id));', function(error, result, fields) {
        console.log(result);
    });

    con.query('INSERT INTO questions (qyes, qno) VALUES (32, 57)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (32, 56)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (33, 57)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (32, 52)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (11, 68)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (22, 53)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (28, 42)', function(error, result, fields) {
       
       
        console.log(result);
    });
    con.end();
});