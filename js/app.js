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
		// Generate random number w/ named function
		this.min = 1;
		this.max = 100;
		var randomNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
		console.log("Random Number", randomNum);

		// Game Reset
		function reset() {
			$('#feedback').text('Make your guess!');
			$('#count').text(0);
			$('#guessList').children().remove();
			$('#guessButton').val('Guess').attr('disabled', false);
		}
		reset();

		var guess;
		var hint;

		// Redundant guess check attempt
		var guessIndex = 0;
		var guessArray = [];
		function indexInc() {
			guessIndex++;
		}


		// Validate text input
		function checkInput(input) {

			// Redundant guess check attempt


			// Name function that accepts user guess and delivers feedback
			function guessDiff(guess) {
				return Math.abs(guess - randomNum);
			}

			input = +input;

			function checkRepeat() {

				guessArray.every( function(val, index, array) {
					debug('every');
					return input !== val;
				});
			}

			// Modal window alerts
			if (isNaN(input)) {
				$('#nanAlert').fadeIn(400);
			} else if ((input % 1) !== 0) {
				$('#integerAlert').fadeIn(400);
			} else if (input > 100) {
				$('#greatAlert').fadeIn(400);
			} else if (input < 1) {
				debug(input);
				$('#lessAlert').fadeIn(400);
			} /* else if (checkRepeat() !== true) {
				$('#repeatAlert').fadeIn(400);
			} */
			// Valid input
				else {

				// Add to guess array
				guessArray[guessIndex] = input;
				indexInc();

				// Absolute value ranges for feedback
				var diff = guessDiff(guess);
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

				// Update UI
				$('#feedback').text(hint);
				$('#count').html(function(i, val) {
					return +val + 1;
				});

				// if () {
				// 	return;
				// } else {
					$('#guessList').append("<li class='guess'>"+guess+"</li>");
					$('#userGuess').val('');
				// }
			}
		}

		function feedback(event) {
			event.preventDefault();
			guess = $('#userGuess').val();
			checkInput(guess);
		}
		$('#guessForm').submit(feedback);
	}
	Game();
	$('a.new').click(Game);
});
