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


function keyCheck(event) {
    //alert(event.which);
    // enter=13

  var keyCode = event.which;

  if (keyCode==13){
      if (runAnimationNumber==0){
          runAnimationStart();
      }
  }
}