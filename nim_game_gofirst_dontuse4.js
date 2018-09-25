You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

Example:

Input: 4
Output: false 
Explanation: If there are 4 stones in the heap, then you will never win the game;
             No matter 1, 2, or 3 stones you remove, the last stone will always be 
             removed by your friend.
			 
			 
			 
/**


在线的总是为多少的时候一定会输呢。

每人每步最多划三条线，所以线的总是至少为4条。当线的总数为4条的时候，不管先手划几条线，后手都有应对的方法，先手必输。

所以你会发现8条也是必输，8条线可以分成两个部分，每个部分四条线。自然先手还是必输。4这个数字还真是不太吉利。

当线的总数为5条的时候，先手先划掉一条线，后手就等于是在4条线的情况下先手，自然后手输。

而6条 7条 先手都可以划掉2条线和3条线来让后手落入“4”的陷阱。

所以我们可以看出，我们只要远离”4“就行了。当线的总数不是4的倍数的时候，先手必赢。

看到这里，恭喜你掌握了必胜法则，下次各位盆宇就可以用这个游戏跟别人打赌了。
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    var flag=true;
    if(n%4==0){
        flag=false;
    }else{
        flag
    }
   return flag;
};