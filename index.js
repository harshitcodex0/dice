function randomNum() {
  return Math.floor(Math.random() * 6 + 1);
}
let num = randomNum();
let imageChange = "./images/dice" + num + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageChange);

let num2 = randomNum();
let imageChange2 = "./images/dice" + num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageChange2);

var chan = document.querySelector("h1");
if (num > num2) {
  chan.innerHTML = "🚩 Player 1 Wins!";
} else if (num < num2) {
  chan.innerHTML = "Player  2 Wins! 🚩";
} else {
  chan.innerHTML = "It's a Draw!";
}

/*
MY CODE

function randomNumber(min, max){
    var random = Math.random( ) * (max - min) + min;
    return Math.round(random);
}

var num = randomNumber(1, 6)
var num2 = randomNumber(1, 6)
console.log(num2)
console.log(num)
var image = document.getElementsByClassName("img1")[0]
var image2 = document.getElementsByClassName('img2')[0]

//Default image
// image.src = "images/dice1.png"

switch (num) {
  case 1:
    image.src = "images/dice1.png";
    break;
  case 2:
    image.src = "images/dice2.png";
    break;
  case 3:
    image.src = "images/dice3.png";
    break;
  case 4:
    image.src = "images/dice4.png";
    break;
  case 5:
    image.src = "images/dice5.png";
    break;
  case 6:
    image.src = "images/dice6.png";
    break;

  default:
    image.src = "images/dice1.png"
    break;
}

switch (num2) {
  case 1:
    image2.src = "images/dice1.png";
    break;
  case 2:
    image2.src = "images/dice2.png";
    break;
  case 3:
    image2.src = "images/dice3.png";
    break;
  case 4:
    image2.src = "images/dice4.png";
    break;
  case 5:
    image2.src = "images/dice5.png";
    break;
  case 6:
    image2.src = "images/dice6.png";
    break;

  default:
    image2.src = "images/dice1.png";
    break;
}

var chan = document.getElementById("ref")
if(num > num2){
    chan.innerHTML = "Player 1 Wins!"
}else if(num < num2){
    chan.innerHTML = "Player  2 Wins!"
} else{
    chan.innerHTML = "It's a Draw!";
}

*/
