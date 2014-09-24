function test(){
    alert("WORKS");
    var info = {info1:4,info2:3,info3:7}
    alert(info.info1);
    alert(typeof info)
    var yourname = "ula";
    var ula = (yourname.length == 3) ? "YOUR NAME IS ULA" : "EWWWWW";
    alert(ula);
    var yea = 5;
    var yeah = 6;
    doSomeMath(yea,yeah);
}
function doSomeMath(yea,yeah){
    var swagon = "Whoop";
    var mj = "Boyungsta";
    yea+=2;
    yeah+=1;
    yea = yea + yeah;
    alert(yea);
}
function hypermode(){
    document.getElementById("pong1").style.WebkitAnimationDuration = "500ms";
    document.getElementById("audiosystem").src = "AudioResources/dubstep.mp3";
    document.getElementById("audiosystem").loop = true;
    document.getElementById("ball").style.background = "black";
    document.getElementById("pong1").style.background = "white";
    document.getElementById("pong2").style.background = "black";
    setInterval(function(){execute();},200);
}
var getName = 0;
function execute(){
    getName++;
    var string = changeColor(getName);
    document.getElementById("main2").style.backgroundColor = string;
    if (getName >= 4) {
        getName = 0;
    }
}
function changeColor(getName){
    var colors = new Array("red","blue","green","yellow","purple");
    return colors[getName];
}
var count = 0;
var timeoutAI;
var timeout;
var shouldBounce = true;
function animateBall() {
    var ball = document.getElementById("ball");
    var paddleAI = document.getElementById("pong1");
    var paddlePlayer = document.getElementById("pong2");
    var ballx = parseInt(window.getComputedStyle(ball,null).getPropertyValue("left"));
    var bally = parseInt(window.getComputedStyle(ball,null).getPropertyValue("top"));
    var ballw = parseInt(window.getComputedStyle(ball,null).getPropertyValue("width"));
    var ballh = parseInt(window.getComputedStyle(ball,null).getPropertyValue("height"));
    var paddleAIx = parseInt(window.getComputedStyle(paddleAI,null).getPropertyValue("left"));
    var paddleAIy = parseInt(window.getComputedStyle(paddleAI,null).getPropertyValue("top"));
    var paddleAIw = parseInt(window.getComputedStyle(paddleAI,null).getPropertyValue("width"));
    var paddleAIh = parseInt(window.getComputedStyle(paddleAI,null).getPropertyValue("height"));
    var paddlex = parseInt(window.getComputedStyle(paddlePlayer,null).getPropertyValue("left"));
    var paddley = parseInt(window.getComputedStyle(paddlePlayer,null).getPropertyValue("top"));
    var paddlew = parseInt(window.getComputedStyle(paddlePlayer,null).getPropertyValue("width"));
    var paddleh = parseInt(window.getComputedStyle(paddlePlayer,null).getPropertyValue("height"));
    if (ballx <= paddleAIx + paddleAIw && paddleAIx <= ballx + ballw && bally <= paddleAIy + paddleAIh && paddleAIy <= bally + ballh) {
        timeoutAI = setInterval(function(){ballMove(ball)},50);
        window.clearInterval(timeout);
    }
    if (ballx <= paddlex + paddlew && paddlex <= ballx + ballw && bally <= paddley + paddleh && paddley <= bally + ballh) {
        timeout = setInterval(function(){ballMove2(ball)},50);
        window.clearInterval(timeoutAI); 
    }
}
var ballx = 0;
var bally = 0;
function ballMove(ball){
        ballx++;
        bally++;
        ball.style.left = ballx +"px";
        ball.style.top = bally +"px";
        count++;
}
function ballMove2(ball){
		ballx--;
        bally--;
        ball.style.left = ballx +"px";
        ball.style.top = bally +"px";
        count--;
}