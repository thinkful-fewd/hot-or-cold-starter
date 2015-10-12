
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});


	var userGuess = $('#userGuess'),
		x = getRandomInt(1, 100),
		count = $('#count'),
		totalCount = 0;
	userGuess.val('').focus();
	console.log(x);

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	function isNumeric(n) { 
		return !isNaN(parseFloat(n)) && isFinite(n); 
	}

	function hotOrCold(y, z) {
		if (y == z) {
			$('#feedback').text('Correct!');
		} else {
			if (Math.abs(y - z) <= 10) {
				$('#feedback').text('Very hot!');
			} else if (Math.abs(y - z) <= 20) {
				$('#feedback').text('Hot!');
			} else if (Math.abs(y - z) <= 30) {
				$('#feedback').text('Warm.');
			} else if (Math.abs(y - z) <= 50) {
				$('#feedback').text('Cold.');
			} else{
				$('#feedback').text('Ice cold...');
			}
		}
	}

	$('.new').click(function(e) {
		x = getRandomInt(1, 100);
		$('#count').text(0);
		$('#guessList li').remove();
		$('#feedback').text('Make your Guess!');
	});

	$('#guessButton').click(function(e) {
		if (isNumeric(userGuess.val()) && userGuess.val() <= 100 && userGuess.val() >= 1) {
			e.preventDefault();
			hotOrCold (userGuess.val(), x);
			totalCount += 1;
			$('#count').text(totalCount);
			$('#guessList').append('<li>' + userGuess.val() + '</li>');
		}	else {
			alert('Please enter a valid number from 1 to 100.');
		}
		userGuess.val('').focus();
	});
});


