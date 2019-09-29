var secretNumber = 4;
var guess = Number(prompt("What is the secret number?"));

while(guess !==  secretNumber){
 var guess = Number(prompt("Try again!"))
}
alert("You guessed right?")