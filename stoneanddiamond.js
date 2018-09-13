You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.



/*answer：：：：*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count=0;
    let jlen=J.length;
    let slen=S.length;
    if(jlen===0||slen===0){
        return 0
    }
    for(var i=0;i<slen;i++){
        for(var j=0;j<jlen;j++){
            if(J[j] == S[i]){
                count+=1;
            }
            
        }
        
    }
    return count;
    
};