

//DICE 1-------------------------------------------------------------------------------------
var randomNumber1 = Math.floor((Math.random() * 6)+1);//to generate randon number between 1-6

//To change the dice images randomly
var randomDiceImage = "images/dice" + randomNumber1 + ".png";//images/dice1.png to images/dice6.png
//To link the random image var selected to the img1 and img2
// To select the 1st dice image:
// document.querySelectorAll("img")[0];
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);//("inputs name u have to change",what to change with)



//DICE 2-------------------------------------------------------------------------------------
var randomNumber2 = Math.floor((Math.random() * 6)+1);//to generate randon number between 1-6

//To change the dice images randomly
var randomDiceImage = "images/dice" + randomNumber2 + ".png";//images/dice1.png to images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage);



//Change heading according to the value on both dice------------------------------------------
if(randomNumber1===randomNumber2){
document.querySelector("h1").innerHTML = "Its a DRAW🎉!!!";//<h1>Refresh Me</h1>
}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML = "Player 2🚩 WINS!";//<h1>Refresh Me</h1>
}
else if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "Player 1🚩 WINS!";//<h1>Refresh Me</h1>
}
