window.onload;
{
	//could I make this a function to reset the game after win?
	// initialize random number for 19-120
	// chooses the random # between 19-120
	// display this in div tag for the displahy on html page for magic crystal

	var randomNum = Math.floor(Math.random() * 120 + 19);
	// displays the randomized number on html file
	$('#displayCrystal').html('<h2>Magic Crystal<h2>' + randomNum);

	//variables for the randomized # for each color block
	var btnPink = Math.floor(Math.random() * 12 + 1);
	var btnOrange = Math.floor(Math.random() * 12 + 1);
	var btnGreen = Math.floor(Math.random() * 12 + 1);
	var btnBlue = Math.floor(Math.random() * 12 + 1);

	//test and debug -- worked and showed randomized numbering
	console.log(btnPink);
	console.log(btnOrange);
	console.log(btnGreen);
	console.log(btnBlue);

	// variables to display the wins/losses/totalscore of user
	var wins = 0;
	var losses = 0;
	var userScore = 0;

	//display wins/losses on html
	$('#winDisplay').html('<h4>Wins:<h4>' + wins);
	$('#lossDisplay').html('<h4>Loss:<h4>' + losses);
	$('#displayScore').html('<h4>Your Score Is:<h4>' + userScore);

	// need to add the click capability to each crystal
	// add jquery to grab html to display
	//function is triggered when button is clicked
	$('#btnPink').on('click', function() {
        $(this).val();
        console.log(btnPink + userScore);
        
        
	});

	$("#btnOrange").on("click", function() {
	    $(this).val();
        console.log(btnOrange + userScore);
	});

	$("#btnGreen").on("click", function() {
	    $(this).val();
        console.log(btnGreen + userScore);
	});

	$("#btnBlue").on("click", function() {
	    $(this).val();
        console.log(btnBlue + userScore);
	});

	//test & debug
	// console.log(userScore);
}
