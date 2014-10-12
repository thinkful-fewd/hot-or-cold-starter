
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
		this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

		console.log("Random Number", this.randomNum);

		// Clear h2#feedback

		// Clear span#count

		// Clear ul#guessList

		var
			guess,
			feedback;

		function checkInput(input) {

			// Validate guess input (numeric integer 1-100)
			if (isNaN(input)) {
				alert("That's not a number! Please enter a number between 1 & 100.");
			} else if ((input % 1) !== 0) {
				alert("That's a decimal! Please enter a whole number integer between 1 & 100.");
			} else if (input < 0) {
				alert("That's a negative number! Please enter a positive number between 1 & 100.");
			}

		}


		// Name function that accepts user guess and delivers feedback
		function makeGuess(guess) {

			// Absolute value ranges for feedback
			if ((guess - this.randomNum) >= 50) {
				feedback = "Ice cold!";
			} else if (30 >= (guess - this.randomNum) > 50) {
				feedback = "Cold...";
			} else if (20 >= (guess - this.randomNum) > 30) {
				feedback = "Warm...";
			} else if (10 >= (guess - this.randomNum) > 20) {
				feedback = "Hot!";
			} else if (1 >= (guess - this.randomNum) > 10) {
				feedback = "Very hot!!";
			}


			// return this.randomNum == guess;
		}

		$('#guessForm').on('submit', function() {
			event.preventDefault();

			guess = $('#userGuess').val();

			checkInput(guess);

			// Feedback appears in h2#feedback
			$('#feedback').text(feedback);
		});

			// Guess count feedback to appear in span#count


			// Supply users with list of guesses in ul#guessList


	}

	// Event handler for li.new
	$('a.new').on('click', Game);

	// Start new game
	Game();

});
