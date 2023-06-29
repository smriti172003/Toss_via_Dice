var num1=Math.random()*6;
num1=Math.ceil(num1);

if(num1===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}else if(num1===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}else if(num1===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}else if(num1===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}else if(num1===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}else{    
    document.querySelector(".img1").setAttribute("src","images/dice6.png"); 
}

var num2=Math.random()*6;
num2=Math.ceil(num2);

if(num2===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}else if(num2===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}else if(num2===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}else if(num2===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}else if(num2===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}else{    
    document.querySelector(".img2").setAttribute("src","images/dice6.png"); 
}

if(num1<num2){
    document.querySelector("h1").textContent="Player 2 Wins";
}else if(num2<num1){
    document.querySelector("h1").textContent="Player 1 Wins";
}else{
    document.querySelector("h1").textContent="It's A Tie";
}