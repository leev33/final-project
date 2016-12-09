var coin = document.getElementById('coin');
var button = document.getElementById('button');
var result = document.getElementById('result');
var headsCounter = document.getElementById('headsCounter');
var TailsCounter = document.getElementById('TailsCounter');
var heads = 0;
var tails = 0;
var gameWelcome = alert("Welcome to the Coin Toss Game!");
var userChoice = prompt("Do you choose heads or tails?").toUpperCase();



function coinToss() {

  var x = Math.floor(Math.random() * 2);

  if (x === 0) {
    coin.innerHTML = '<img class="heads animate-coin" src="photos/heads.png"/>';

    heads += 1;
    result.innerHTML = 'You got heads! You win!';
    headsCounter.innerHTML = '<h1> Number of heads: ' + heads + '</h1>';

  } else {
    coin.innerHTML = '<img class="tails animate-coin" src="photos/tails.png"/>';
     tails += 1;
    result.innerHTML = 'You got tails! You win!';
     tailsCounter.innerHTML = '<h1> Number of tails: ' + tails + '</h1>';

  }

}
button.onclick = function() {
  coinToss();
}
