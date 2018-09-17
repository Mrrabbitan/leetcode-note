
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.


/*   
the answer of hanming_distance
一、n-1发生了什么

①、二进制数n，n-1后，如果最后一位是0，将向前一位借2，2-1=1。最后一位为1。如果前一位为0，将继续向前一位借2，加上本身少掉的1.则变为1。一直遇到1。减为0.

所以 二进制 xxxx10000-1 = xxxx01111

②、n&n-1

按照上述 n=xxxx10000，n-1=xxxx01111

xxxx10000

xxxx01111

xxxx0000

可以看到将原来的最右边的1变为0了。

重复操作，有多少个1，这个操作就可以执行多少次。


x^y什么意思
这是按位异或的意思 如：x是二进制数0101 y是二进制数1011 则结果为x＾y=1110,0＾1=1,0＾0=0,1＾1=0,1＾0=1!
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
   /* var a =x.toString(2);
    var b =y.toString(2);
    console.log(a);
    console.log(b);
    console.log(a^b);
    *
    *  画蛇添足
    */
    var result = x^y;;
    var dist = 0;
        while(result>0)
        {
            dist++;
            result &= (result - 1);
            console.log(result);
        }
        return dist;
};