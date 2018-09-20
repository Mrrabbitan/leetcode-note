
给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

注意:

给定的整数保证在32位带符号整数的范围内。
你可以假定二进制数不包含前导零位。
示例 1:

输入: 5
输出: 2
解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
示例 2:

输入: 1
输出: 0
解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zer

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var numchange=num.toString(2)
    var newcontent='';
    for(var i of numchange){
       //console.log(i);
        switch(i){
            case '0':
            newcontent+='1';
                break;//停止本次循环，进行下次循环
            case '1':
            newcontent+='0'
                break;//停止本次循环，进行下次循环
               }
    }
    return parseInt(newcontent,2)
};