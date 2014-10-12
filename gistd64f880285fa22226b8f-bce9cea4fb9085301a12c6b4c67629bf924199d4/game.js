function Game() {
  this.min = 1;
  this.max = 100;

  // Notice the use of the this keyword.
  // A new (and hopefully different) randomNum will be generated with each instance of the class.
  this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

  // For debugging purposes, let's log randomNum to the console.
  console.log(this.randomNum);

  // Function to check if a guess is correct.
  // Notice that the value of this.randomNum never leaves this class.
  // This is an important OOP principle called encapsulation.
  this.makeGuess = function(guess) {
      return this.randomNum == guess;
  };
}