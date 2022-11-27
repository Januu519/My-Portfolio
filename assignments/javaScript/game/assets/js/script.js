var girl = document.getElementById("girl"), idleImageNumber, idleAnimationNumber;
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
