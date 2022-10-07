//req is request
//res is response
const express = require('express');
const fs = require('fs').promises; //interacting with JSON file
const path = require('path'); //handling path creation for said JSON
const app = express();
const dataFile = path.join(__dirname, 'data.json');

//support posting form data with url encoded
//app.use(express.urlencoded({ extended: true })); 

//  Enable CORS

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    next();
});


app.get('/poll', async (req, res) => {
    let data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));

    const question1Votes = Object.values(data.q1);
    const question2Votes = Object.values(data.q2);
    const question3Votes = Object.values(data.q3);
    const question4Votes = Object.values(data.q4);
    const question5Votes = Object.values(data.q5);
    const question6Votes = Object.values(data.q6);
    const question7Votes = Object.values(data.q7);

    const sum1 = question1Votes.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    const sum2 = question2Votes.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    const sum3 = question3Votes.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    const sum4 = question4Votes.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    const sum5 = question5Votes.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    const sum6 = question6Votes.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    const sum7 = question7Votes.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
   
    res.json(data);
});

app.post('/poll', async (req, res) => {
    const data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));

    console.log(req.body);
    if(req.body.add === "Yes") {
      data.q1.Yes++;
    } else if(req.body.add === "No"){
      data.q1.No++;
    }
    await fs.writeFile(dataFile, JSON.stringify(data, null, 2));

    res.end();
});

app.listen(3001, () => console.log("Server is running..."));