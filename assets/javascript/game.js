window.onload; {
    // initialize random number for 19-120
    // chooses the random # between 19-120
    // display this in div tag for 
var randomNum = Math.floor((Math.random() * 120) + 19);

$("#displayCrystal").html("<h2>Magic Crystal<h2>" + randomNum);


// variables to display the wins/losses/totalscore of user
var wins = 0;
var losses = 0;
var totalScore = 0;

//variables for the randomized # for each color block
var btnPink = Math.floor((Math.random() * 12) + 1);
var btnOrange = Math.floor((Math.random() * 12) + 1);
var btnGreen = Math.floor((Math.random() * 12) + 1);
var btnBlue = Math.floor((Math.random() * 12) + 1);

// need to add the click capability to each crystal
$("#btnPink").on("click", function() {
  
}

$("#btnOrange").on("click", function() {
  
}

$("#btnGreen").on("click", function() {
  
}

$("#btnBlue").on("click", function() {
  
}








}