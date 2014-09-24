function initialize(){
    alert("This Game is Under Development Parts of this Game maybe unfinished.");
    document.getElementById("main2").addEventListener("mousemove",getCoordinates);
    setInterval(function(){animateBall()},1);
}
function getCoordinates(e){
var a = e.pageY;
var y = a - 280;
if (y > 400) {
    y = 400;
}
if (y < 0) {
    y = 0;
}
document.getElementById("pong2").style.top = y +"px";
}