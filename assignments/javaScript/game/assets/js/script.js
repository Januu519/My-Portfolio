var girl = document.getElementById("girl"), idleImageNumber, idleAnimationNumber, runImageNumber, runAnimationNumber;
idleImageNumber=1;
idleAnimationNumber=0;

function idleAnimation() {
    idleImageNumber=idleImageNumber+1;

    if (idleImageNumber==11){
        idleImageNumber=1;
    }

    girl.src = "assets/image/Idle ("+idleImageNumber+").png";
}

function idleAnimationStart() {
    idleAnimationNumber=setInterval(idleAnimation,180);
}



runImageNumber=1;
runAnimationNumber=0;
function runAnimation() {

    if (runImageNumber==9){
        runImageNumber=1;
    }

    girl.src = "assets/image/Run ("+runImageNumber+").png";
}


function runAnimationStart() {
    runAnimationNumber=setInterval(runAnimation,120);
    clearInterval(idleAnimationNumber);
}



jumpAnimationNumber=0;
jumpImageNumber=1;
girlMarginTop=307;
function jumpAnimation() {

    jumpImageNumber=jumpImageNumber+1;

    if (jumpImageNumber<=6){
        girlMarginTop=girlMarginTop-45;
        girl.style.marginTop=girlMarginTop+"px";
    }

    if (jumpImageNumber>=7){
        girlMarginTop=girlMarginTop+45;
        girl.style.marginTop=girlMarginTop+"px";
    }


    if (jumpImageNumber==11){
        jumpImageNumber=1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber=0;
        runImageNumber=0;
        runAnimationStart();
    }
    girl.src="assets/image/Jump ("+jumpImageNumber+").png"
}
function jumpAnimationStart() {
    clearInterval(idleAnimationNumber);
    runImageNumber=0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber=setInterval(jumpAnimation,200);

}

boxMarginLeft=1040;
function createBoxes() {

    for (var i=0; i<=10; i++) {

        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";
        box.id="box"+i;

        // boxLeft=boxLeft+500;
        if (i<5){
            boxMarginLeft=boxMarginLeft+2000;
        }
        if (i>=5){
            boxMarginLeft=boxMarginLeft+1000;
        }
    }
}


var boxAnimationID=0;
function boxAnimation() {

    for (var i=0; i<10; i++){
        var box=document.getElementById("box"+i);
        var currentMarginLeft=getComputedStyle(box).marginLeft;
        var newMarginLeft=parseInt(currentMarginLeft)-35;
        box.style.marginLeft=newMarginLeft+"px";

        if (newLeft>= -110 && newLeft<=100){
            if (girlTop>300){
                clearInterval(boxAnimationID);

                clearInterval(runAnimationNumber);
                runAnimationNumber=-1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber=-1;

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId=-1;

                deadAnimationNumber=setInterval(girlDeadAnimation,150);
            }
        }

    }
}

deadImageNumber=1;
deadAnimationNumber=0;
function girlDeadAnimation() {

    deadImageNumber=deadImageNumber+1;

    if (deadImageNumber==11){
        deadImageNumber=10;


        document.getElementById("end").style.visibility="visible";
        document.getElementById("endscore").innerHTML=score;
    }


    girl.src="assets/image/Dead("+deadImageNumber+").png";

}

function keyCheck(event) {
    /*alert(event.which);
    enter=13
    space=32*/

    var keyCode=event.which;

    if (keyCode==13){
        if (runAnimationNumber==0){
            runAnimationStart();
        }


        if (moveBackgroundAnimationId==0){
            moveBackgroundAnimationId=setInterval(moveBackground,180)
        }
        if (boxAnimationID==0){
            boxAnimationID=setInterval(boxAnimation,180);
        }
    }
    if (keyCode==32){
        if (jumpAnimationNumber==0)
        {
            jumpAnimationStart();
        }
        if (moveBackgroundAnimationId==0){
            moveBackgroundAnimationId=setInterval(moveBackground,180);
        }
        if (boxAnimationID==0){
            boxAnimationID=setInterval(boxAnimation,180);
        }
    }
}

var backgroundImagePositionX=0;
var moveBackgroundAnimationId=0;

var score=0;

var level=1;

function moveBackground() {

    backgroundImagePositionX=backgroundImagePositionX-20;

    document.getElementById("backgroundID").style.backgroundPositionX=backgroundImagePositionX+"px";

    score=score+1;
    document.getElementById("score").innerHTML=score;



    if (score === 50){


        level = level + 1 ;


        if (level === 2){
            document.getElementById('level').innerHTML = level;
            document.getElementById('win').style.visibility = 'visible';

            clearInterval(boxAnimationID);
            clearInterval(runAnimationNumber);
            clearInterval(moveBackgroundAnimationId);

        }
    }
    if (score === 100){
        level = level + 1 ;
        document.getElementById('level').innerHTML = level;
        if (level === 3){
            document.getElementById('win').style.visibility = 'visible';
            clearInterval(boxAnimationID);
            clearInterval(runAnimationNumber);
            clearInterval(moveBackgroundAnimationId);

        }
    }

    if (score === 150){
        level = level + 1 ;
        document.getElementById('level').innerHTML = level;
        if (level === 4){
            document.getElementById('win').style.visibility = 'visible';
            clearInterval(boxAnimationID);
            clearInterval(runAnimationNumber);
            clearInterval(moveBackgroundAnimationId);

        }
    }
}



function reload() {
    location.reload();

}
function reload1() {

    document.getElementById('win').style.visibility = 'hidden';
    boxAnimationID = setInterval(boxAnimation,100);
    moveBackgroundAnimationId = setInterval(moveBackground,100);
}
