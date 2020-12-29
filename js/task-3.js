'use strict'


const findLongestWord = function(string) {
   const allWords = string.split(' ');
   let longestWord = allWords[0];

   for (const allWord of allWords) {
      if (allWord.length > longestWord.length) {
         longestWord = allWord;
      }
   }

   return longestWord;     
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 