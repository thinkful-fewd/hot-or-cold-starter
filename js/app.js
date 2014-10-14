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
		$(".alert").fadeOut(400);
	});

	// Create newGame function
	function Game() {
		this.min = 1;
		this.max = 100;

		// Generate random number w/ named function
		var randomNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

		console.log("Random Number", randomNum);

		// Clear h2#feedback
		$('#feedback').val('Make your guess!');

		// Clear span#count
		$('#count').val(0);

		// Clear ul#guessList
		$('#guessList').children();

		var
			guess,
			hint;

		function checkInput(input) {

			// Validate guess input (numeric integer 1-100)
			if (isNaN(input)) {
				$('#nanAlert').fadeIn(400);
			} else if ((input % 1) !== 0) {
				$('#integerAlert').fadeIn(400);
				return;
			} else if (input > 100) {
				$('#greatAlert').fadeIn(400);
				return;
			} else if (input < 1) {
				$('#lessAlert').fadeIn(400);
				return;
			} else {
				input = +input;
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
				} else if (diff === 0) {
					hint = 'You guessed it!';
					$('#guessButton').val('WINNER').attr('disabled', true);
				}

				// Feedback appears in h2#feedback
				$('#feedback').text(hint);

				// Guess count feedback to appear in span#count
				$('#count').html(function(i, val) {
					return +val + 1;
				});

				// Supply users with list of guesses in ul#guessList
				$('#guessList').append("<li class='guess'>"+guess+"</li>");

				// Clear #userGuess
				$('#userGuess').val('');
			}
		}

		// Name function that accepts user guess and delivers feedback
		function guessDiff(guess) {
			return Math.abs(guess - randomNum);
		}

		function feedback(event) {
			event.preventDefault();

			guess = $('#userGuess').val();

			checkInput(guess);
		}

		$('#guessForm').submit(feedback);
	}

	// Event handler for li.new
	$('a.new').click(Game);

	// Start new game
	Game();

});
