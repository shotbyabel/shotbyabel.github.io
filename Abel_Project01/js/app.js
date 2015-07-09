$(".start-trigger").click(function() {
  $("#start").hide();
  $("#photo1").show();
  $("#photo-timer").text(photoStartTime);


  //this method runs my function at 1 second intervals
  setInterval(decreaseTimeBy1Second, 1000);
  setInterval(decreasePhotoTimer, 1000);
});

// Storing the starting time in seconds into startTime variable.
var startTime = 60;
$("#game-timer").text(startTime);

// Function that decreases the timer by 1 second.
function decreaseTimeBy1Second() {
  if (startTime === 0) {
    $("#gameover").show();
  } else {
    startTime = startTime - 1;
    $("#game-timer").text(startTime);
  }
}

//i want the PhotoStartTime to "start" as soon as Photo 01
//shows on the sreen and when it reaches 0 for photo 01 to hide and results 1 to show
function decreasePhotoTimer() {
  if (photoStartTime === 0) {
    $("#photo1").hide();
    $("#results1").show();
    // $("#results1").append("What Color Was The Bottle?");
  } else {
    photoStartTime = photoStartTime - 1;
    $("#photo-timer").text(photoStartTime);
  }
}

var photoStartTime = 4;
//Jquery is accessing the document's ID and with the 'text' tag it
// inserts the variable we created.
//creating photos & results arrays
// var photos = ["#photo1","#photo2","#photo3","#photo4","#photo5"];
// var results = ["#results1","#results2","#results3","#results4","#results5"];
// quizPhotos.forEach(function(element, index){  
// console.log(element);
// function photoQuizGame(){
//   var quizPhotos[]    
// }
// }
// }
// })
//object array//

score = 0;

var titlePhoto = "../img/PhotoTitle.jpg";
// var qAphoto = "../img/Results.jpg";
var scorePhoto = "../img/FinalScore.jpg";

var quizPhotos = [

  {
    questionPhoto: "../img/Photo01.jpg",
    answerPhoto: "../img/Results.jpg",
    question: "What color was the bottle?",
    a: "White",
    b: "Dark",
    answer: "Dark"
  },

  {
    questionPhoto: "../img/Photo02.jpg",
    answerPhoto: "../img/Results.jpg",
    question: "what was hanging from the window?",
    a: "a flag",
    b: "laundry",
    answer: "laundry"

  },

  {
    questionPhoto: "../img/Photo03.jpg",
    answerPhoto: "../img/Results.jpg",
    question: "What color were the boom-boxes?",
    a: "black and white",
    b: "grey and black",
    answer: "laundry"

  },


  {
    questionPhoto: "../img/Photo04.jpg",
    answerPhoto: "../img/Results.jpg",
    question: "What color were the boom-boxes?",
    a: "black and white",
    b: "grey and black",
    answer: "laundry"

  },

  {
    questionPhoto: "../img/Photo05.jpg",
    answerPhoto: "../img/Results.jpg",
    question: "what did the street sign read?",
    a: "a speed limit",
    b: "there was no street sign",
    answer: "a speed limit"
  }
];

//MADE QUESTION APPEARS WITH PHIL
var count = 0;
var quizInfo = function() {

  // //when i call this function I want to change the image 
  // console.log(quizPhotos);
  var question = quizPhotos[count].question;
  // grab the question and need to put it in my html
  $("#question").text(question);
}

$("#next-question").on("click", quizInfo);


//    $(text).append(question,function(index,html))



// }



//   // console.log(quizPhotos[0].question);
// }




//write functions that adds a photo on page.. and click events
