// Start Anonymous Function
(function() {
// Start jQuery
$(function(){

	// Generate random number & validate guesses with min being 1 and max being 100
	function generateValidateNumber() {

		// Get user number
		var userNum = +$("#userGuess").val();
		// Error or Success Message Feedback
		var feedback = $("#feedback");

		function instructionsOverlay() {
			/*--- Display information modal box ---*/
			$(".what").click(function(){
				$(".overlay").fadeIn(1000);

			});

			/*--- Hide information modal box ---*/
			$("a.close").click(function(){
				$(".overlay").fadeOut(1000);
			});
		}
		instructionsOverlay();

		// Resets all data on page to start new game
		function newGame() {
			$(".new").on("click", function(event) {
				event.preventDefault();
				$("h1").html("HOT or COLD");
				$("#feedback").html("Make your Guess!");
				$("#userGuess").val("");
				$("#count").html("0");

				// Reset & generate random number from 1-100
				var randomNum = "";
				randomNum = Math.floor(Math.random() * (100) + 1)

					// On submit error, hot, cold & success messages of user number guesses
					$("#guessButton").on("click", function(event) {
						event.preventDefault();

						// Show answer
						$("h1").html("ANSWER: " + randomNum);

						// Error for not using a number or whole numbers not 1-100 inclusive
	//				if(isNaN(userNum) || userNum != Math.floor(userNum) || userNum > 100 || userNum < 1) {
	//					feedback.html("Sorry, you need to enter a whole number from 1 - 100 inclusive. Please try again.");
	//				}
						// Hot or cold error messages
						if(Math.abs(randomNum - userNum) > 30) {
							feedback.html("You're very cold");
						}
						else if(Math.abs(randomNum - userNum) < 30 && Math.abs(randomNum - userNum) > 15) {
							feedback.html("You're getting warmer");
						}
						else if(Math.abs(randomNum - userNum) < 15 && Math.abs(randomNum - userNum) > 5) {
							feedback.html("You're getting hotter");
						}
						else if(Math.abs(randomNum - userNum) < 5 && Math.abs(randomNum - userNum) > 0) {
							feedback.html("You're very hot!");
						}
						else if(randomNum === userNum) {
							feedback.html("You are correct!");
						}


				});




			});
		}
		newGame();

		function errorValidation() {


		}
		errorValidation();




	}
	generateValidateNumber();



// End jQuery
});
// End Anonymous Function
})();