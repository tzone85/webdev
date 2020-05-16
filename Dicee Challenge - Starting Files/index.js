var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice"+randomNum1+".png";

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNum2 + ".png";

var randomImageSource2 = "images/"+randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player One Wins";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "🚩 Player Two Wins"
} else {
    document.querySelector("h1").innerHTML = "DRAW!";
}

