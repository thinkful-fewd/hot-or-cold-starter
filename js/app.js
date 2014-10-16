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
		// Reset
		$('#feedback').text('Make your guess!');
		$('#count').text(0);
		$('#guessList').children().remove();
		$('#guessButton').val('Guess').attr('disabled', false);

		// Generate random number w/ named function
		this.min = 1;
		this.max = 100;
		this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
		console.log("Random Number", randomNum);

		this.guessArray = [];

		// Name function that accepts user guess and delivers feedback
		this.checkGuess = function(input) {

			input = +input;

			this.validInput = function() {
				guessArray.push(input);

				function diff() {
					return Math.abs(input - randomNum);
				}

				if ( diff() >= 50) {
					hint = "Ice cold!";
				} else if ( (diff() < 50) && (diff() >= 30) ) {
					hint = "Cold...";
				} else if ( (diff() < 30) && (diff() >= 20) ) {
					hint = "Warm...";
				} else if ( (diff() < 20) && (diff() >= 10) ) {
					hint = "Hot!";
				} else if ( (diff() < 10) && (diff() >= 1) ) {
					hint = "Very hot!!";
				} else if ( diff() === 0) {
					hint = 'You guessed it!';
					$('#guessButton').val('WINNER').attr('disabled', true);
				}

				$('#feedback').text(hint);
				$('#count').html(function(i, val) {
					return +val + 1;
				});
				$('#guessList').append("<li class='guess'>"+input+"</li>");
				$('#userGuess').val('');
			};

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
			} else if (guessArray.every( function(val, index, array) {
				return input !== val;
				}) !== true) {
				$('#repeatAlert').fadeIn(400);
			} else {
				validInput();
			}
		};

		$('#guessForm').submit(function(event) {
			event.preventDefault();
			checkGuess($('#userGuess').val());
		});
	}
	Game();
	$('a.new').click(Game);
});
