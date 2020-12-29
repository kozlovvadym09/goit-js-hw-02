'use strict'

const checkForSpam = function (message) {
   let forbiddenWords = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam');

   console.log(forbiddenWords);
   
};
  
checkForSpam('Latest technology news');

checkForSpam('JavaScript weekly newsletter');

checkForSpam('Get best sale offers now!');

checkForSpam('[SPAM] How to earn fast money?');



