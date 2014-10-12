
$(document).ready(function(){

	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	// Create newGame function
	var newGame = function() {
		// Generate random number w/ named function

		// Clear h2#feedback

		// Clear span#count

		// Clear ul#guessList

	};

	// Start new game (call newGame())
	newGame();

	// Event handler for li.new
	$('li.new').on('click', newGame);

	// Validate guess input (numeric integer 1-100)

	// Name function that accepts user guess and delivers feedback

		// Absolute value ranges for feedback

		// Feedback appears in h2#feedback

	// Guess count feedback to appear in span#count

	// Supply users with list of guesses in ul#guessList

});
