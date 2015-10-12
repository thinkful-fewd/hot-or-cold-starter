
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});


	var userGuess = $('#userGuess');
	userGuess.val('').focus();

	function isNumeric(n) { return !isNaN(parseFloat(n)) && isFinite(n); }

	$('#guessButton').click(function(e) {
		if (isNumeric(userGuess.val()) && userGuess.val() <= 100 && userGuess.val() >= 1) {
			console.log(userGuess.val());

		}	else {
			alert('Please enter a valid number from 1 to 100.');
		}
		userGuess.val('').focus();
	});
});


