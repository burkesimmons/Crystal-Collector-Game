var numberToGuess = '';
var crystalAmount = '';
var score;
var wins = 0;
var losses = 0;
var crystal1 = '';
var crystal2 = '';
var crystal3 = '';
var crystal4 = '';

$(document).ready(function(){

	function reset() {
		getRandomLg();
		$('#number-to-guess').html(numberToGuess);
		getRandomSm();
		crystal1 = crystalAmount;
		getRandomSm();
		crystal2 = crystalAmount;
		getRandomSm();
		crystal3 = crystalAmount;
		getRandomSm();
		crystal4 = crystalAmount;
		score= 0;
		$('#finalTotal').html(score);
	}

reset();
// run();	
// console.log(numberToGuess, crystal1, crystal2, crystal3, crystal4);
$('#numberWins').html(wins);
$('#numberLosses').html(losses);

function youWon(){
alert("You won!");
  wins++; 
  $('#numberWins').html(wins);
  reset();
}
//addes the losses to the userTotal
function youLost(){
alert ("You lost!");
  losses++;
  $('#numberLosses').html(losses);
  reset()
}

			// Generate random number 19-120 and show
function getRandomLg(min, max) {
  min = Math.ceil(19);
  max = Math.floor(121);
  numberToGuess = Math.floor(Math.random() * (121 - 19)) + 19; //The maximum is exclusive and the minimum is inclusive
}
// getRandomInt();
// console.log(numberToGuess);

//			Assign each crystal generates a random number between 1-12
function getRandomSm(min, max) {
  min = Math.ceil(1);
  max = Math.floor(13);
  crystalAmount = Math.floor(Math.random() * (13 - 1)) + 1; //The maximum is exclusive and the minimum is inclusive
}
// getRandomSm();
// console.log(crystalAmount);

//sets up click for jewels
  $('#one').on ('click', function(){
    score = score + crystal1;
    console.log("New score= " + score);
    $('#finalTotal').text(score); 
          //sets win/lose conditions
        if (score == numberToGuess){
          youWon();
        }
        else if ( score > numberToGuess){
          youLost();
        }   
  })  
  $('#two').on ('click', function(){
    score = score + crystal2;
    console.log("New score= " + score);
    $('#finalTotal').text(score); 
        if (score == numberToGuess){
          youWon();
        }
        else if ( score > numberToGuess){
          youLost();
        } 
  })  
  $('#three').on ('click', function(){
    score = score + crystal3;
    console.log("New score= " + score);
    $('#finalTotal').text(score);
//sets win/lose conditions
          if (score == numberToGuess){
          youWon();
        }
        else if ( score > numberToGuess){
          youLost();
        } 
  })  
  $('#four').on ('click', function(){
    score = score + crystal4;
    console.log("New score= " + score);
    $('#finalTotal').text(score); 
      
          if (score == numberToGuess){
          youWon();
        }
        else if ( score > numberToGuess){
          youLost();
        }
  }); 



//			listen for crystal click and when clicked:
//				When crystal is clicked, score is updated
//					If score = random number then play wins
						// update wins and restart game
//					If score is more than random number then player loses
						// update losses adn restart game
});