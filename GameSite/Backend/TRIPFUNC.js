function trip(){
document.getElementById("audio").currentTime = "55";
setInterval(function(){black();},50);
setInterval(function(){blue();},51);
setInterval(function(){purple();},52);
setInterval(function(){yellow();},53);
setInterval(function(){green();},54);
setInterval(function(){red();},55);
}
function black(){
document.getElementById("whoop").style.color = "black";
document.getElementById("boday").style.backgroundColor = "white";
}
function blue(){
document.getElementById("whoop").style.color = "blue";
document.getElementById("boday").style.backgroundColor = "red";
}
function purple(){
document.getElementById("whoop").style.color = "purple";
document.getElementById("boday").style.backgroundColor = "yellow";
}
function yellow(){
document.getElementById("whoop").style.color = "yellow";
document.getElementById("boday").style.backgroundColor = "purple";
}
function green(){
document.getElementById("whoop").style.color = "green";
document.getElementById("boday").style.backgroundColor = "orange";
}
function red(){
document.getElementById("whoop").style.color = "red";
document.getElementById("boday").style.backgroundColor = "blue";
}
function orange(){
document.getElementById("whoop").style.color = "orange";
document.getElementById("boday").style.backgroundColor = "green";
}