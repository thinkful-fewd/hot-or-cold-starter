$(document).ready(function() {

/*--variables--*/
var secretNumber = 0;
var userGuess = 0;
var guessCount = 0;
var finish = false;

/*--RANDOM NUMBER GENERATION--*/
/*--function to generate random secret number and store in console--*/
function secretNumberGenerator() {
	secretNumber = (Math.floor(Math.random()*100));
	console.log("Secret number is " + secretNumber);
}
/*--call the function that sets a random number--*/
secretNumberGenerator();


/*--NEW GAME--*/
/*--function that starts new game--*/
function newGame() {
	secretNumber = (Math.floor(Math.random()*100));
	console.log("Secret number is " + secretNumber);	
}
/*--call function to start new game--*/
$('.new').click(function() {
	newGame();
});



});