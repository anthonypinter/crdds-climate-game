var clicked = false;
const open_url = "/img/open.png";
const close_url = "/img/close.png";

let agreeCalculation = 0.00;
let disagreeCalculation = 0.00;

async function changeImage1() {
  var img_obj = document.getElementById("img-1");
  if(!clicked){
    //console.log((img_obj.src).includes('close'));
  }
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

  agreeCalculation = 100 * ( (data.q1.Yes)/(data.q1.Yes + data.q1.No));
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

  agreeCalculation = (100 * (data.q1.No)/(data.q1.Yes + data.q1.No));
  disagreeCalculation = (100 - agreeCalculation);
  
  document.getElementById("agree").innerText = `${ agreeCalculation.toFixed(1) }`;
  document.getElementById("disagree").innerText = `${ disagreeCalculation.toFixed(1) }`;

  let noValue = data.q1.No + 1;

}