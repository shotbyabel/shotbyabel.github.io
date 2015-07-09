//this function starts the 60 sec timer for game when user clicks
//on "START GAME NOW" on "#title" page anchor tag has class of "start trigger"
//the click fucntion hides the title photo and shows the 1st quiz photo (ID of "photo1")
//after 1st quiz photo shows the 4 second individual timer starts.
$(".start-trigger").click(function() {
  $("#title").hide();
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
//shows on the screen and when it reaches 0 for photo 01 to hide and results 1 to show
function decreasePhotoTimer() {
  if (photoStartTime === 0) {
    $("#photo1").hide();
    $("#qNa-results1").show();
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
//object array//

score = 0;

var titlePhoto = "../img/PhotoTitle.jpg";
// var qAphoto = "../img/Results.jpg";
//needs Final Score Tally and Play Again//
var scorePhoto = "../img/FinalScore.jpg";

var quizPhotos = [

  {
    memoPhoto: "../img/Photo01.jpg",
    qNaResults: "../img/Results.jpg",
    question: "What color was the bottle?",
    a: "White",
    b: "Dark",
    answer: "Dark"
  },

  {
    memoPhoto: "../img/Photo02.jpg",
    qNaResults: "../img/Results.jpg",
    question: "what was hanging from the window?",
    a: "a flag",
    b: "laundry",
    answer: "laundry"

  },

  {
    memoPhoto: "../img/Photo03.jpg",
    qNaResults: "../img/Results.jpg",
    question: "What color were the old man's pants?",
    a: "black",
    b: "green",
    answer: "black"

  },


  {
    memoPhoto: "../img/Photo04.jpg",
    qNaResults: "../img/Results.jpg",
    question: "What color were the boom-boxes?",
    a: "black and white",
    b: "grey and black",
    answer: "grey and black"

  },

  {
    memoPhoto: "../img/Photo05.jpg",
    qNaResults: "../img/Results.jpg",
    question: "what did the street sign read?",
    a: "a speed limit",
    b: "there was no street sign",
    answer: "a speed limit"

    //Final Results Photo with 
    //Score tally and Play Again?
    //goes in here? 
  }
];

//MADE QUESTION APPEARS WITH PHIL
var count = 0;
var quizQnAresults = function() {
  // //when i call this function I want to change the image 
  // console.log(quizPhotos);
  var question = quizPhotos[count].question;
  // grab the question and need to put it in my html
  $("#question").text(question);
}
$("#next-photo").on("click", quizQnAresults);


//write functions that adds a photo on page.. and click events
