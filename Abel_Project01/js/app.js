$(".start-trigger").click(function(){
  $("#start").hide();
  $("#photo1").show();
  //this method runs my function at 1 second intervals
  setInterval(decreaseTimeBy1Second, 1000);
});

// Storing the starting time in seconds into startTime variable.
var startTime = 40;
$("#game-timer").text(startTime);

// Function that decreases the timer by 1 second.
function decreaseTimeBy1Second(){
  if (startTime === 0) {
    $("#gameover").show();
  } else {
    startTime = startTime - 1;
    $("#game-timer").text(startTime);
  }
}



  //if start time reaches 0 seconds. stop timer and announce "game over"

    // var carrousel = function(){

    //   var carrousel = this;
    //   var wrapper = carrousel.children[0];
    //   var slides = wrapper.children;
    //   var position = 0;

    //   var startButton
    //   var answerA
    //   var answerB


    //   var count = 0;
    //   console.log(wrapper);
      // setInterval(function (){

      //   // if(count === slides.lengh){

      //   // }
      // };



