var clicked = false;
var open_url =
  "/img/open.png";
var close_url =
  "/img/close.png";

function changeImage1() {
  var img_obj = document.getElementById("img-1");
if(!clicked){
  console.log((img_obj.src).includes('close'));
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
}

function changeImage2() {
  var img_obj = document.getElementById("img-2");

  if (!clicked && (img_obj.src).includes('close')) {
    img_obj.src = open_url;
    clicked = true;
    document.getElementById("img-1").src = close_url;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").style.textAlign='center'
  }
}
