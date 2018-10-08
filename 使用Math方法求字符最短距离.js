给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
说明:

字符串 S 的长度范围为 [1, 10000]。
C 是一个单字符，且保证是字符串 S 里的字符。
S 和 C 中的所有字母均为小写字母。



/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var carr=[];
    for(var i in S){
        if(S[i]===C){
            carr.push(i);
        }
    }
    var len=S.length;
    var carrlen=carr.length;
    var desc=[];
    for(var j=0;j<len;j++){
        desc[j]=len;//设置最大值，找到右边界
        for(var k=0;k<carrlen;k++){
             desc[j]=Math.min(Math.abs(j-carr[k]),desc[j]);//Math的方法是重点，不用math的方法就要使用>?:方法比较
        }
    }
    return(desc);
};