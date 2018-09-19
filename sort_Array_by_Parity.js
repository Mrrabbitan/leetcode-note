
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var alen = A.length;
    var Oarr=[];
    var Garr=[];
    
    for(var i=0;i<alen;i++){
        if(A[i]%2===0){
            Oarr.push(A[i]);
        }else{
            Garr.push(A[i]);
        }
    }
    
    for(var k=0;k<Garr.length;k++){
        Oarr.push(Garr[k]);
    }
    return Oarr;
};