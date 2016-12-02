
var coin = document.getElementById('coin');
var button = document.getElementById('button');
var result = document.getElementById('result');
var headsCounter = document.getElementById('headsCounter');
var TailsCounter = document.getElementById('TailsCounter');
var heads = 0;
var tails = 0;

function coinToss() {

  var x = Math.floor(Math.random() * 2);

  if (x === 0) {
    coin.innerHTML = '<img class="heads animate-coin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2014_ATB_Quarter_Obv.png/145px-2014_ATB_Quarter_Obv.png"/>';

    heads += 1;
    result.innerHTML = 'You got heads';
    headsCounter.innerHTML = '<h1> Number of heads: ' + heads + '</h1>';

  } else {
    coin.innerHTML = '<img class="tails animate-coin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/US_50_Cent_Rev.png/128px-US_50_Cent_Rev.png"/>';
     tails += 1;
    result.innerHTML = 'You got tails';
     tailsCounter.innerHTML = '<h1> Number of tails: ' + tails + '</h1>';

  }

}
button.onclick = function() {
  coinToss();
}
