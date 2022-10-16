const mysql = require('mysql');

const con = mysql.createConnection({
    host: "crdds-data-instance-1.ca01ucxlqya6.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "nx4JPFSGD2hL3d2"
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

    con.query('INSERT INTO questions (qyes, qno) VALUES (1, 1)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (1, 1)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (1, 1)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (1, 1)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (1, 1)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (1, 1)', function(error, result, fields) {
        console.log(result);
    });
    con.query('INSERT INTO questions (qyes, qno) VALUES (1, 1)', function(error, result, fields) {
        console.log(result);
    });
    con.end();
});