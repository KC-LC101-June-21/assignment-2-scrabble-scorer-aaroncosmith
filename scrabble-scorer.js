// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let word;
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
  console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word:");
   return word;
};

let simpleScore = function(word) {
  let score = 0;
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    score += 1;
  }
  console.log(score);
}

let vowelBonusScore = function(word) {
  let vowels = ["A", "E", "I", "O", "U", "Y"];
  let score = 0;
  word = word.toUpperCase();
  splitWord = word.split('');
  console.log(splitWord);
  for (let i = 0; i < splitWord.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (splitWord[i] === vowels[j]) {
        score += 3;
      }
    }
  }
  let tempScore = score/3;
  tempScore = splitWord.length - tempScore;
  score = tempScore + score;
  console.log(score);
  return score;
}

let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
  //  initialPrompt();
  //  oldScrabbleScorer(word);
   vowelBonusScore("Aaron");
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

