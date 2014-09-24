var mode;
var mone;
var mtwo;
var mthree;
var mfour;
var mfive;
var msix;
var mseven;
var meight;
var mnine;

function initialize(){
mode = true;
mone = 0;
mtwo = 0;
mthree = 0;
mfour = 0;
mfive = 0;
msix = 0;
mseven = 0;
meight = 0;
mnine = 0;

document.getElementById("area1").addEventListener("click",draw1);
document.getElementById("area2").addEventListener("click",draw2);
document.getElementById("area3").addEventListener("click",draw3);
document.getElementById("area4").addEventListener("click",draw4);
document.getElementById("area5").addEventListener("click",draw5);
document.getElementById("area6").addEventListener("click",draw6);
document.getElementById("area7").addEventListener("click",draw7);
document.getElementById("area8").addEventListener("click",draw8);
document.getElementById("area9").addEventListener("click",draw9);
}

function getXO(){
    if(mode == false){
        mode = true;
    }else{
        mode = false;   
    }
}
function draw1(){
    getXO();
    if(mode == true){
        document.getElementById("one").src = "VisualResources/O.png";
        mone = 2;
    }else if(mode == false){
        document.getElementById("one").src = "VisualResources/X.png";
        mone = 1;
    }
    checkThree();
}
function draw2(){
    getXO();
    if(mode == true){
        document.getElementById("two").src = "VisualResources/O.png";
        mtwo = 2;
    }else if(mode == false){
        document.getElementById("two").src = "VisualResources/X.png";
        mtwo = 1;
    }
    checkThree();
}
function draw3(){
    getXO();
    if(mode == true){
        document.getElementById("three").src = "VisualResources/O.png";
        mthree = 2;
    }else if(mode == false){
        document.getElementById("three").src = "VisualResources/X.png";
        mthree = 1;
    }
    checkThree();
}
function draw4(){
    getXO();
    if(mode == true){
        document.getElementById("four").src = "VisualResources/O.png";
        mfour = 2;
    }else if(mode == false){
        document.getElementById("four").src = "VisualResources/X.png";
        mfour = 1;
    }
    checkThree();
}
function draw5(){
    getXO();
    if(mode == true){
        document.getElementById("five").src = "VisualResources/O.png";
        mfive = 2;
    }else if(mode == false){
        document.getElementById("five").src = "VisualResources/X.png";
        mfive = 1;
    }
    checkThree();
}
function draw6(){
    getXO();
    if(mode == true){
        document.getElementById("six").src = "VisualResources/O.png";
        msix = 2;
    }else if(mode == false){
        document.getElementById("six").src = "VisualResources/X.png";
        msix = 1;
    }
    checkThree();
}
function draw7(){
    getXO();
    if(mode == true){
        document.getElementById("seven").src = "VisualResources/O.png";
        mseven = 2;
    }else if(mode == false){
        document.getElementById("seven").src = "VisualResources/X.png";
        mseven = 1;
    }
    checkThree();
}
function draw8(){
    getXO();
    if(mode == true){
        document.getElementById("eight").src = "VisualResources/O.png";
        meight = 2;
    }else if(mode == false){
        document.getElementById("eight").src = "VisualResources/X.png";
        meight = 1;
    }
    checkThree();
}
function draw9(){
    getXO();
    if(mode == true){
        document.getElementById("nine").src = "VisualResources/O.png";
        mnine = 2;
    }else if(mode == false){
        document.getElementById("nine").src = "VisualResources/X.png";
        mnine = 1;
    }
    checkThree();
}
function checkThree(){
    if (mone == mtwo && mtwo == mthree) {
        if (mone != 0) {
            if (mode == true) {
            document.getElementById("winner").innerHTML = "O WINS!";
            document.getElementById("winner").style.color = "red";
            }else if (mode == false) {
            document.getElementById("winner").innerHTML = "X WINS!";
            document.getElementById("winner").style.color = "green";
            }
            document.getElementById("winsong").src = "AudioResources/victory.mp3";
        }
    }else if (mone == mfour && mfour == mseven) {
        if (mone != 0) {
            if (mode == true) {
            document.getElementById("winner").innerHTML = "O WINS!";
            document.getElementById("winner").style.color = "red";
            }else if (mode == false) {
            document.getElementById("winner").innerHTML = "X WINS!";
            document.getElementById("winner").style.color = "green";
            }
            document.getElementById("winsong").src = "AudioResources/victory.mp3";
        }
    }else if (mone == mfive && mfive == mnine) {
        if (mone != 0) {
            if (mode == true) {
            document.getElementById("winner").innerHTML = "O WINS!";
            document.getElementById("winner").style.color = "red";
            }else if (mode == false) {
            document.getElementById("winner").innerHTML = "X WINS!";
            document.getElementById("winner").style.color = "green";
            }
            document.getElementById("winsong").src = "AudioResources/victory.mp3";
        }
    }else if (mtwo == mfive && mfive == meight) {
        if (mtwo != 0) {
            if (mode == true) {
            document.getElementById("winner").innerHTML = "O WINS!";
            document.getElementById("winner").style.color = "red";
            }else if (mode == false) {
            document.getElementById("winner").innerHTML = "X WINS!";
            document.getElementById("winner").style.color = "green";
            }
            document.getElementById("winsong").src = "AudioResources/victory.mp3";
        }
    }else if (mthree == msix && msix == mnine) {
        if (mthree != 0) {
            if (mode == true) {
            document.getElementById("winner").innerHTML = "O WINS!";
            document.getElementById("winner").style.color = "red";
            }else if (mode == false) {
            document.getElementById("winner").innerHTML = "X WINS!";
            document.getElementById("winner").style.color = "green";
            }
            document.getElementById("winsong").src = "AudioResources/victory.mp3";
        }
    }else if (mthree == mfive && mfive == mseven) {
        if (mseven != 0) {
            if (mode == true) {
            document.getElementById("winner").innerHTML = "O WINS!";
            document.getElementById("winner").style.color = "red";
            }else if (mode == false) {
            document.getElementById("winner").innerHTML = "X WINS!";
            document.getElementById("winner").style.color = "green";
            }
            document.getElementById("winsong").src = "AudioResources/victory.mp3";
        }
    }else if (mfour == mfive && mfive == msix) {
        if (mfour != 0) {
            if (mode == true) {
            document.getElementById("winner").innerHTML = "O WINS!";
            document.getElementById("winner").style.color = "red";
            }else if (mode == false) {
            document.getElementById("winner").innerHTML = "X WINS!";
            document.getElementById("winner").style.color = "green";
            }
            document.getElementById("winsong").src = "AudioResources/victory.mp3";
        }
    }else if (mseven == meight && meight == mnine) {
        if (mseven != 0) {
            if (mode == true) {
            document.getElementById("winner").innerHTML = "O WINS!";
            document.getElementById("winner").style.color = "red";
            }else if (mode == false) {
            document.getElementById("winner").innerHTML = "X WINS!";
            document.getElementById("winner").style.color = "green";
            }
            document.getElementById("winsong").src = "AudioResources/victory.mp3";
        }
    }
}