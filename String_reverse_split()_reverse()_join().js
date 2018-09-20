
Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"


/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var reversearr = s.split("").reverse().join("");//reverse方法只有数组能用,split完返回数组，join完返回字符串
console.log(s.split(""));
   return(reversearr)
};