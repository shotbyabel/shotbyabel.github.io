//SCRATCH CODE

function decreasePhotoTimer(){
  if (photoStartTime === 0) {
    // $("#photo1").hide();
    $(quizPhotos[0].questionPhoto).hide();
    // $("#results1").show();
    $(quizPhotos[0].answerPhoto).show();
  } else {
    photoStartTime = photoStartTime -1;
    $("#photo-timer").text(photoStartTime);
  }
}


////////
/////////
function decreasePhotoTimer(){
  if (photoStartTime === 0) {
    $("#photo1").hide(); 
    $("#results1").show();
  } else {
    photoStartTime = photoStartTime -1;
    $("#photo-timer").text(photoStartTime);
  }
}