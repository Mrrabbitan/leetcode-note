
给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:

输入: 38
输出: 2 
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
进阶:
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

/**

1    1         
2    2            
3    3        
4    4           
5    5    
6    6       
7    7     
8    8      
9    9        
10    1          
11    2       
12    3          
13    4     
14    5      
15    6     
16    7      
17    8     
18    9     
19    1       
20    2         
* 9个数一个轮回，我们就直接模9 
* 那么特殊情况（9 及9的倍数）我们采用减一加一获取   
* 减一加一也兼顾了其它数的求根
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // return (num-1)%9+1  O(1) 时间复杂度
    
    
    
};