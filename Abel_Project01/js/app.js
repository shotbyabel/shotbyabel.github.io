$(".start-trigger").click(function(){
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
function decreaseTimeBy1Second(){
  if (startTime === 0) {
    $("#gameover").show();
  } else {
    startTime = startTime - 1;
    $("#game-timer").text(startTime);
  }
}

var photoStartTime = 4;
//Jquery is accessing the document's ID and with the 'text' tag it
// inserts the variable we created.

//i want the PhotoStartTime to "start" as soon as Photo 01
//shows on the sreen and when it reaches 0 for photo 01 to hide and results 1 to show
function decreasePhotoTimer(){
  if (photoStartTime === 0) {
    $("#photo1").hide();
    $("#results1").show();
  } else {
    photoStartTime = photoStartTime -1;
    $("#photo-timer").text(photoStartTime);
  }
}

//creating photos & results arrays

// var photos = ["#photo1","#photo2","#photo3","#photo4","#photo5"];
// var results = ["#results1","#results2","#results3","#results4","#results5"];

// console.log(results[0]);

    


//object array//

    score = 0;

    titlePhoto = "../img/PhotoTitle.jpg";
    qAphoto = "../img/Results.jpg";
    scorePhoto = "../img/FinalScore.jpg";
  
      quizPhotos = [

      { url:"../img/Photo01.jpg",
        question:"What color was the bottle?",
        a:"White",
        b:"Dark",
        answer:"Dark",

    },
    
      { url:"../img/Photo02.jpg",
        question:"what was hanging from the window?",
        a:"a flag",
        b:"laundry",
        answer:"laundry",

      },

      { url:"../img/Photo03.jpg",
        question:"what color were the old man's pants?",
        a:"red",
        b:"black",
        answer:"black",

      },

      { url:"../img/Photo04.jpg",
        question:"What color were the boom-boxes?",
        a:"black and white",
        b:"grey and black",
        answer:"laundry",

      },

      { url:"../img/Photo05.jpg",
        question:"what did the street sign read?",
        a:"a speed limit",
        b:"there was no street sign",
        answer:"a speed limit",

      },

        ]


//write functions that adds a photo on page.. and click events 






