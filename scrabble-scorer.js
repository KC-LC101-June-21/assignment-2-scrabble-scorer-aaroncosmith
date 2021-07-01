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
   word = input.question(`Let's play some scrabble!
Enter a word to score: `);
   return word;
};

let simpleScore = function(word) {
  let score = 0;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    score += 1;
  }
  console.log(`Score for '${word}': ${score}\n`);
  return score;
}

let vowelBonusScore = function(word) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let score = 0;
  word = word.toLowerCase();
  splitWord = word.split('');
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
  console.log(`Score for '${word}': ${score}\n`);
  return score;
}

let scrabbleScore = function(word) {
  word = word.toLowerCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
	  for (const letter in newPointStructure()) {
      if (word[i].includes(letter)) {
        letterPoints += Number(newPointStructure()[letter]);
      }
		 }
	  }
  console.log(`Points for '${word}': ${letterPoints}\n`);
	return letterPoints;
}

const scoringAlgorithms = [
  {
    name : "Simple Score",
    description : "Each letter is worth 1 point.",
    scoringFunction : simpleScore
  },
  {
    name: "Bonus Vowels",
    description : "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name : "Scrabble",
    description : "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }

];

function scorerPrompt(word, scoringAlgorithms) {
  let prompt = input.question(`Which scoring algorithm would you like to use?

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: `)
  if (prompt == 0) {
    return scoringAlgorithms[0].scoringFunction(word);
  } else if (prompt == 1) {
    return scoringAlgorithms[1].scoringFunction(word);
  } else if (prompt == 2) {
    return scoringAlgorithms[2].scoringFunction(word);
  } else {
    scorerPrompt(word, scoringAlgorithms);
  }
}

function transform(object) {
  let newObject = {};
  let keys = Object.keys(object)
  keys.forEach((key) => {
    let eachArray = object[key];
    eachArray.forEach((eaLetter) => {
      newObject[eaLetter.toLowerCase()] = Number(key);
    }) 
  })
  return newObject;
};

let newPointStructure = function(){
  return transform(oldPointStructure);
};

function runProgram() {
  initialPrompt();
  scorerPrompt(word, scoringAlgorithms);

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

