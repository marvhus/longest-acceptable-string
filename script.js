/*
 *  Martin
 *
 *  February 4th, 2022
 *
 *  Find the longest string printable on a 7 segment display
 */

// node js reading and writing to files
var fs = require("fs");
// read file "words.txt" and put it in string
var words = fs.readFileSync("words.txt").toString();
// Splits long string of words into an array, the string is split on new lines
words = words.split("\n"); // Widnows might require \n\r

// RegEX for determening what strings contain illegal characters
var badLetters = /[gkmqwixzio]/

var acceptedWords = []; // Array of the accepted words
var ammountOfWords = 10; // How many words to accept

// Sort words by length or alphabetical order if they are same length
words = words.sort(function(a, b){
    return a.length - b.length || // sort by length, if equal then
           a.localeCompare(b);    // sort by dictionary order
});

// Loop through backwards
for (let i = words.length - 1; i >= 0; i--) {

    // if it has looped through every word it has and does not have enough words, then warn user, and exit loop
    if (i <= 0 && acceptedWords.length < ammountOfWords) {
        console.log("Not enough words");
        break;
    }

    // If word has illegal character, then continue
    if (words[i].match(badLetters)) {
        continue;
    }

    // Add word to array
    acceptedWords[acceptedWords.length] = words[i];

    // If there are enough words, then exit loop
    if (acceptedWords.length >= ammountOfWords) {
         console.log("Done.");
         break;
     }
}

// Print accepted words
console.log(acceptedWords)
// Print amount of accepted words
console.log(`Ammount of words: ${acceptedWords.length}`);

