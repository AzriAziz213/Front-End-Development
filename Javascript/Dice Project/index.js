var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    message = "Player 1 Wins!"
}

else if ( randomNumber2 > randomNumber1) {
    message = "Player 2 Wins!"
}

else {
    message = "Draw"
}

document.querySelector("h1").innerHTML = message;