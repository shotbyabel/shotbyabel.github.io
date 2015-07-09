console.log("app loaded.");

var score = 0;
var titlePhoto = "../img/PhotoTitle.jpg";
var scorePhoto = "../img/FinalScore.jpg";

// TODO: Final Results Photo with add core tally 
//       and Play Again to this array?
var quizPhotos = [
  {
    memoPhoto:  "../img/Photo01.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "What color was the bottle?",
    a: "white",
    b: "dark",
    answer: "a"
  },
  {
    memoPhoto:  "../img/Photo02.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "What was hanging from the window?",
    a: "a flag",
    b: "laundry",
    answer: "b"
  },
  {
    memoPhoto:  "../img/Photo03.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "What color were the old man's pants?",
    a: "black",
    b: "green",
    answer: "a"
  },
  {
    memoPhoto:  "../img/Photo04.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "What color were the boom-boxes?",
    a: "black and white",
    b: "grey and black",
    answer: "b"
  },
  {
    memoPhoto:  "../img/Photo05.jpg",
    qNaResults: "../img/Results.jpg",
    question:   "what did the street sign read?",
    a: "a speed limit",
    b: "there was no street sign",
    answer: "a"
  }
];

// the click fucntion hides the title photo and shows 
// the 1st quiz photo (ID of "photo1")
var hideTitleShowPhoto = function() {
  $(".title-photo-template").hide();
  $(".memo-photo-template").show();
};

var hidePhotoShowQNA = function() {
  $(".memo-photo-template").hide();
  $(".qna-photo-template").show();
};

var hideQnAshowMemoPhoto = function(){
  $(".qna-photo-template").hide();
  $(".memo-photo-template").show();
  console.log("click");
};

$("#answer").on("click",hideQnAshowMemoPhoto);

// check if answer is right or wrong
var isRight = function(photoNumber, answer) {
  return answer === quizPhotos[photoNumber].answer;
};

// this is what happens when I click on an answer choice
$(".choice").on("click", function () {
  if (isRight(0, this.id)) {
    $("#answer").text("Correct! (Click for next photo)");
  } else {
    $("#answer").text("Wrong! (Click for next photo)");
  }
});

$(function() {
  $(".start-trigger").on("click", hideTitleShowPhoto);

  // when i click on a memo photo i go to a qna photo
  $(".memo-photo-template").on("click", function() {
    hidePhotoShowQNA();
  });
});
