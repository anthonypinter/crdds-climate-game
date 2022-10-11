

//req is request
//res is response
const express = require('express');
var request = require('request');
const fs = require('fs').promises; //interacting with JSON file
const path = require('path'); //handling path creation for said JSON
const app = express();

const dataFile = '/data.json'

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

app.get('/', async (req, res) => {
  let data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));
  res.json(data);
});

app.post('/', async (req, res) => {
  const data = JSON.parse(await fs.readFile(dataFile, 'utf-8'));
  
  console.log('receiving data ...');
  console.log('body is ',req.body);
  if (req.body.add === "Yes") {
    data[req.body.question][0]["Yes"]++;
  }

  else if (req.body.add === "No") {
    data[req.body.question][0]["No"]++;
  }
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));

  res.end();
})

/* 



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

*/
