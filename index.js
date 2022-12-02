
var randomNumber1 =  Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);



// var randomNumber2 =  Math.random();
// randomNumber2 = randomNumber2*6;
// randomNumber2=Math.floor(randomNumber2)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2= "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);;


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = " Play 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = " Play 2  Wins!";
}else{
    document.querySelector("h1").innerHTML = " Draw!";
}



// const pics = -[ document.querySelector(".img1").setAttribute("src","images/dice1.png"),
// document.querySelector(".img1").setAttribute("src","images/dice2.png"),
// document.querySelector(".img1").setAttribute("src","images/dice3.png"),
// document.querySelector(".img1").setAttribute("src","images/dice4.png"),
// document.querySelector(".img1").setAttribute("src","images/dice5.png"),];


// function showImage(){
//     var a = Math.floor(Math.random() * pics.length);
//     var img = pics[a];
//     pic.style.backgroundImage = img;
// }
// setInterval(showImage);