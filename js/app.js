$(document).ready(function(){
	function debug(input) {
		console.log('Debug', input);
	}

	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	// Create newGame function
	function Game() {
		this.min = 1;
		this.max = 100;

		// Generate random number w/ named function
		var randomNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

		console.log("Random Number", randomNum);

		// Clear h2#feedback

		// Clear span#count

		// Clear ul#guessList

		var
			guess,
			hint;

		function checkInput(input) {

			// Validate guess input (numeric integer 1-100)
			if (isNaN(input)) {
				alert("That's not a number! Please enter a number between 1 & 100.");
			} else if ((input % 1) !== 0) {
				alert("That's a decimal! Please enter a whole number integer between 1 & 100.");
				return;
			} else if (input < 0) {
				alert("That's a negative number! Please enter a positive number between 1 & 100.");
				return;
			} else if (input > 100) {
				alert("That number is greater than 100! Please enter a number between 1 & 100.");
				return;
			} else if (input < 1) {
				alert('That number is less than 1! Please enter a number between 1 & 100.');
				return;
			} else {
				input = +input;
			}
		}

		// Name function that accepts user guess and delivers feedback
		function guessDiff(guess) {
			return Math.abs(guess - randomNum);
		}

		function submitEvent() {
			guess = $('#userGuess').val();

			checkInput(guess);

			var diff = guessDiff(guess);

			// Absolute value ranges for feedback
			if (diff >= 50) {
				hint = "Ice cold!";
			} else if (30 >= diff > 50) {
				hint = "Cold...";
			} else if (20 >= diff > 30) {
				hint = "Warm...";
			} else if (10 >= diff > 20) {
				hint = "Hot!";
			} else if (1 >= diff > 10) {
				hint = "Very hot!!";
			} else {
				hint = 'undefined';
			}

			// Feedback appears in h2#feedback
			$('#feedback').text(hint);

			// Guess count feedback to appear in span#count
			var count = $('#count').val();
			count++;

		}

		$('#guessForm').on('submit', submitEvent);

			// Supply users with list of guesses in ul#guessList


	}

	// Event handler for li.new
	$('a.new').on('click', Game);

	// Start new game
	Game();

});
