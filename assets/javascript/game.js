window.onload;
{
	// // variables to display the wins/losses/totalscore of user
	// var wins = 0;
	// var losses = 0;
	// var userScore = 0;
	var randomNum;
	var btnPink;
	var btnOrange;
	var btnBlue;
	var btnGreen;
	var userScore;
	var wins;
	var losses;

	//could I make this a function to reset the game after win?
	// initialize random number for 19-120
	// display this in div tag for the display on html page for magic crystal
	function startGame() {
		randomNum = Math.floor(Math.random() * 120 + 19);
		// displays the randomized number on html file
		$('#displayCrystal').html('<h2>Magic Crystal<h2>' + randomNum);

		//variables for the randomized # for each color block
		btnPink = Math.floor(Math.random() * 12 + 1);
		btnOrange = Math.floor(Math.random() * 12 + 1);
		btnGreen = Math.floor(Math.random() * 12 + 1);
		btnBlue = Math.floor(Math.random() * 12 + 1);

		wins = 0;
		losses = 0;
		userScore = 0;
		$('#displayScore').html('<h3>Your Score Is:</h3>' + userScore);
		$('#winDisplay').html('<h4>Wins:</h4>' + wins);
		$('#lossDisplay').html('<h4>Loss:</h4>' + losses);

		//test and debug -- worked and showed randomized numbering
		console.log(btnPink);
		console.log(btnOrange);
		console.log(btnGreen);
		console.log(btnBlue);
	}
	startGame();
	// variables to display the wins/losses/totalscore of user
	// var wins = 0;
	// var losses = 0;
	// userScore = 0;

	//display wins/losses on html
	$('#winDisplay').html('<h4>Wins:</h4>' + wins);
	$('#lossDisplay').html('<h4>Loss:</h4>' + losses);
	//$('#displayScore').html('<h3>Your Score Is:</h3>' + userScore);

	// need to add the click capability to each crystal
	// add jquery to grab html to display
	//function is triggered when button is clicked
	//update & display userscore when clicked
	$('#btnPink').on('click', function() {
		userScore = userScore + btnPink;
		$('#displayScore').html(userScore);
		checkScore();
	});

	$('#btnOrange').on('click', function() {
		userScore = userScore + btnOrange;
		$('#displayScore').html(userScore);
		checkScore();
	});

	$('#btnGreen').on('click', function() {
		userScore = userScore + btnGreen;
		$('#displayScore').html(userScore);
		checkScore();
	});

	$('#btnBlue').on('click', function() {
		userScore = userScore + btnBlue;
		$('#displayScore').html(userScore);
		checkScore();
	});

	function checkScore() {
		if (userScore === randomNum) {
			// console.log("You win!")
			wins++;
			console.log('Wins: ' + wins);
			$('#winDisplay').html(wins);
			startGame();
		} else if (userScore > randomNum) {
			// console.log("LOSER!")
			losses++;
			console.log('Losses: ' + losses);
			$('#lossDisplay').html(losses);
			startGame();
		}
	}

	//player whens if score matches randomnumber aka magic crystal
	//player loses if their score exceeds randomnumber aka magic crystal
	//game should reset once the player wins or loses
}
