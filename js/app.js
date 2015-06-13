
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(500);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});

    //prevent page reload
    $('.guessForm').submit(function(e){
e.preventDefault();
        return false;
    });
    //Choose random number 1-100 newGame function
    var randomNum = Math.floor((Math.random() * 100) + 1);


    //Accept guesses from input (click and Enter), log answers in ul#guessList, increment guess count
    $('#guessButton').click(function() {
        var userGuess = $('#userGuess').val();
        $('#guessList').prepend('<li>' + userGuess + '</li>');
        if (userGuess - randomNum == 0) {
            $('#feedback').empty();
            $('#feedback').append('Yes! You Won!'); //replace
        }
        else if (Math.abs(userGuess - randomNum) <= 5) {
            $('#feedback').empty();
            $('#feedback').append("Lava Hot!");
        }
        else if (Math.abs(userGuess - randomNum) <= 10) {
            $('#feedback').empty();
            $('#feedback').append("Hot!");
        }
        else if (Math.abs(userGuess - randomNum) <= 25) {
            $('#feedback').empty();
            $('#feedback').append("Cold :(");
        }
        else {
            $('#feedback').empty();
            $('#feedback').append("Antarctica, baby!");
        }

        var guessCount = parseInt($('#count').text());
        guessCount++;
        $('#count').empty();
        $('#count').append(guessCount);
        $('#userGuess').val("");
    });

    $(document).on('click', '.new', function() {
        document.location.reload(true);
    });





});


