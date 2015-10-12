
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
	var	x = getRandomInt(1, 100);
	userGuess.val('').focus();

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	function isNumeric(n) { 
		return !isNaN(parseFloat(n)) && isFinite(n); 
	}

	$('.new').click(function(e) {
		x = getRandomInt(1, 100);
		console.log(x);
	});

	$('#guessButton').click(function(e) {
		if (isNumeric(userGuess.val()) && userGuess.val() <= 100 && userGuess.val() >= 1) {
			console.log(userGuess.val());
			e.preventDefault();
			$('#guessList').append('<li>' + userGuess.val() + '</li>');

		}	else {
			alert('Please enter a valid number from 1 to 100.');
		}
		userGuess.val('').focus();
	});
});


