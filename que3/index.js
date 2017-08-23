const fs = require('fs');
var ss = require("simple-statistics")
// Returns the path to the word list which is separated by `\n` 
const wordListPath = require('word-list');
 
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')


try {
    
//Reading Inputs from the user
var unscrambledWord = process.argv[3];
var lengthOfWord = Number(process.argv[4]);

function unscramble(word, n) {
    var preFinalWords = [];
    var finalWords = [];
    letters = word.split("");
    words  = ss.combinations(letters, n);
    
    words.forEach(function(arr) {
       combword = ss.permutationsHeap(arr)
       for (var j = 0; j < combword.length; j++) {
           var newWord = combword[j].join("");
           if (wordArray.indexOf(newWord) >= 0){
               preFinalWords.push(newWord)
           }
       }
    }, this);
    
    preFinalWords.forEach(function(word) {
        if (!(finalWords.indexOf(word) >= 0)) {
            finalWords.push(word);
        }
    }, this);
   
   return finalWords;
}

console.log("Loading....")
var totalwords = unscramble("teachable", 5)

if (totalwords.length === 0)  {
    console.log("No Matching Words");
     console.log("Try again with another word");
}
else {
    console.log("The Words are")
    for (var l = 0; l < totalwords.length; l++) {
        console.log(totalwords[l]);
    }
}
}

catch (err) {
    console.log("There is something wrong on the Input");
    console.log("Your Input should be this way 'node index \"a word to search\" \" the length of the word\"'")
}