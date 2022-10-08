let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImg1 = "dice" + randomNum1 + ".png";
let randomImgSource1 = "images/" + randomDiceImg1;

let randomDiceImg2 = "dice" + randomNum2 + ".png";
let randomImgSource2 = "images/" + randomDiceImg2;

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.setAttribute("src", randomImgSource1);
img2.setAttribute("src", randomImgSource2);


function showWinner() {
    if (randomNum1 > randomNum2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}
   

showWinner()

