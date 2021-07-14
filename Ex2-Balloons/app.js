var speed = 10;
var audio = new Audio('sound/pop.wav');
var elScoreNum = document.querySelector('h1 span');
var elScore = document.querySelector('h1');
var gScore = 0;
var screenRoof = document.documentElement.clientHeight;

var gBaloons = baloonAmount(6);

function init() {
  generateBaloons();

  var elBaloons = document.querySelectorAll('.baloon');

  setInterval(function () {
    for (var i = 0; i < gBaloons.length; i++) {
      gBaloons[i].bottom = speed;
      speed += 20;

      //update dom
      elBaloons[i].style.bottom = gBaloons[i].bottom + 'px';

      if (gBaloons[i].bottom > screenRoof - 5 && gScore < gBaloons.length) {
        elScore.innerText = 'You Lost!!!!!!!!!';
        gBaloons[i].speed = 0;
        lScore.style.color = 'red';
      }
      if (gScore === gBaloons.length) {
        elScore.innerText = 'You Win Score: ' + gScore;
        elScore.style.color = 'green';
      }
    }
  }, 1000);
}

function baloonClick(baloon) {
  baloon.style.opacity = '0';
  // baloon.style.display = 'none';
  elScoreNum.innerHTML = ++gScore;

  audio.play();
}

function generateBaloons() {
  var strHTML = '';
  for (var i = 0; i < gBaloons.length; i++) {
    strHTML +=
      '<div style="left:' +
      Math.floor(Math.random() * 90) +
      '%; background-color:' +
      getRandomColor() +
      ';"' +
      '' +
      ' class="baloon baloon' +
      (i + 1) +
      '" onClick ="baloonClick(this)"></div>';
  }
  //   console.log(strHTML);
  document.querySelector('.container').innerHTML = strHTML;
}

function baloonAmount(num) {
  var baloons = [];
  var obj = { bottom: 0, speed: 10 };
  for (var i = 0; i < num; i++) {
    baloons[i] = obj;
  }
  return baloons;
}
// function createBallon

// function createBaloons

//when balon pop new baloon renders

//cooler background
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
