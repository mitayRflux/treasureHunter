//alert('Hello Users!');
const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const list = document.querySelector('#list');
const val = document.querySelector('#val');
const map = document.querySelector('#map');
let width = 600;
let height = 500;
let distance;
let distanceHint;
let timeId;
let clicks=0;
let value;
let time=0;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
 };

start.addEventListener('click',(event)=>{
 screens[0].classList.add('up');
});

list.addEventListener('click',(event)=>{
  if(event.target.classList.contains('val-btn')){
 time = parseInt(event.target.getAttribute('data-value'));
 screens[1].classList.add('up');
  startGame();
  }
});

map.addEventListener('click',(event)=>{
  clicks++;
   distance = getDistance(event, target);
   distanceHint = getDistanceHint(distance);
   if (distance < 8) {
  result.innerHTML = `<h2>Клад найден за:${clicks} попыток!</h2>`;
  clearInterval(timeId);
  setTimeout(()=>{location.reload();},10000);
    }
  }
  );


function startGame(){
  timeId=setInterval(decrTime,1000);
  setTime(time);
}

 function decrTime(){
  if(time===0){
  finishGame();
  }else{
    let current=--time;
    if(current<10){
    current=`0${current}`;
    }
   setTime(current);  
  }
}

function setTime(value){
  val.innerHTML = `Осталось:00:${value}сек.`;
}

function finishGame(){
if(time===0 && distance>8){
  result.innerHTML=`<h2>Неудачная попытка!</h2>`;
  setTimeout(()=>{location.reload();},10000);
}
}

function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
 }
 function  getDistance (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
 }

function getDistanceHint (distance) {
  if (distance < 10) {
   result.innerHTML = '<h2>Жара!</h2>';
  } else if (distance < 20) {
    result.innerHTML = '<h2>Очень горячо!</h2>';
  } else if (distance < 40) {
    result.innerHTML = '<h2>Горячо!</h2>';
  } else if (distance < 80) {
    result.innerHTML = '<h2>Прохладно!</h2>';
  } else if (distance < 160) {
    result.innerHTML = '<h2>Холодно!</h2>';
  } else if (distance < 320) {
    result.innerHTML = '<h2>Очень холодно!</h2>';
  } else {
    result.innerHTML = '<h2>Мороз!</h2>';
  }
 }


