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
			var absolute = Math.abs(guess - randomNum);
			debug('guessDiff ' + absolute);
			return absolute;
		}

		function feedback(event) {
			event.preventDefault();

			guess = $('#userGuess').val();

			checkInput(guess);

			var diff = guessDiff(guess);

			// Absolute value ranges for feedback
			if ( diff >= 50) {
				hint = "Ice cold!";
			} else if ((diff < 50) && (diff >= 30)) {
				hint = "Cold...";
			} else if ((diff < 30) && (diff >= 20)) {
				hint = "Warm...";
			} else if ((diff < 20) && (diff >= 10)) {
				hint = "Hot!";
			} else if ((diff < 10) && (diff >= 1)) {
				hint = "Very hot!!";
			}

			// Feedback appears in h2#feedback
			$('#feedback').text(hint);

			// Guess count feedback to appear in span#count
			$('#count').html(function(i, val) {
				return +val + 1;
			});

			// Supply users with list of guesses in ul#guessList
			$('#guessList').append('<li>'+guess+'</li>');

			// Clear #userGuess
			$('#userGuess').val('');
		}

		$('#guessForm').submit(feedback);
	}

	// Event handler for li.new
	$('a.new').click(Game);

	// Start new game
	Game();

});
