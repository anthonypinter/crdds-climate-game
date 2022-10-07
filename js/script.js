var clicked = false;
const open_url = "/img/open.png";
const close_url = "/img/close.png";

let agreeCalculation = 0.00;
let disagreeCalculation = 0.00;

let page = "";


if (document.URL.includes("q1.html") ) {
  page = "q1"
}
else if (document.URL.includes("q2.html") ) {
  page = "q2"
}
else if (document.URL.includes("q3.html") ) {
  page = "q3"
}
else if (document.URL.includes("q4.html") ) {
  page = "q4"
}
else if (document.URL.includes("q5.html") ) {
  page = "q5"
}
else if (document.URL.includes("q6.html") ) {
  page = "q6"
}
else if (document.URL.includes("q7.html") ) {
  page = "q7"
}

// here some logic to handle seven pages.

async function changeImage1() {
  var img_obj = document.getElementById("img-1");

  if(img_obj.src == close_url){
  }
    if (!clicked && (img_obj.src).includes('close')) {
      img_obj.src = open_url;
      clicked = true;
      document.getElementById("img-2").src = close_url;
      document.getElementById("result").style.display = 'block';
      document.getElementById("result").style.textAlign='center';
      //document.getElementById("result").style.justifyContent = 'center';
    }
  
  const response = await fetch("js/server/data.json");
  const data = await response.json();

  //console.log(data[page][0]["Yes"]);

  agreeCalculation = 100 * ( (data[page][0]["Yes"])/(data[page][0]["Yes"] + data[page][0]["No"]));
  disagreeCalculation = (100 - agreeCalculation);
  
  document.getElementById("agree").innerText = `${ agreeCalculation.toFixed(1) }`;
  document.getElementById("disagree").innerText = `${ disagreeCalculation.toFixed(1) }`;

  let yesValue = data.q1.Yes + 1;
}

async function changeImage2() {
  var img_obj = document.getElementById("img-2");
  choice2 = true;
  
  if (!clicked && (img_obj.src).includes('close')) {
    img_obj.src = open_url;
    clicked = true;
    document.getElementById("img-1").src = close_url;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").style.textAlign='center'
  }

  const response = await fetch("js/server/data.json");
  const data = await response.json();

  agreeCalculation = (100 * (data[page][0]["No"])/(data[page][0]["Yes"] + data[page][0]["No"]));
  disagreeCalculation = (100 - agreeCalculation);
  
  document.getElementById("agree").innerText = `${ agreeCalculation.toFixed(1) }`;
  document.getElementById("disagree").innerText = `${ disagreeCalculation.toFixed(1) }`;

  let noValue = data.q1.No + 1;
}