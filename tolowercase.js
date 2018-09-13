Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"


/*answer：：：：*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var strlen = str.length;
    if(strlen === 0){
        return '';
    }
    var strnew='';
    for(var i=0;i<strlen;i++){
        if(str[i]>= 'A' && str[i]<= 'Z'){
            var strsmall=str[i].toLowerCase();
           strnew+=strsmall;
        }else{
            strnew+=str[i];
        }
    }
     return strnew;
};