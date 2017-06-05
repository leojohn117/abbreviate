/*!
 * Write a function which accepts a sentence (as a string) 
 * and turns any word within that sentence which has a length of four 
 * or greater into the above described abbreviation.
 */
'use strict';

module.exports = function abbreviate(string) {
	return string.replace(/\w{4,}/g, function (word) {
    	return word[0] + (word.length - 2) + word.slice(-1);
  	});
}