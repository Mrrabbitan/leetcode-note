给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。


American keyboard


示例1:

输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]
注意:

你可以重复使用键盘上同一字符。
你可以假设输入的字符串将只包含字母。
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  var line1 = ['q','w','e','r','t','y','u','i','o','p'],
      line2 = ['a','s','d','f','g','h','j','k','l'],
      line3 = ['z','x','c','v','b','n','m'];
  var result = [];  
    for(var i=0;i<words.length;i++){
        var inline1,inline2,inline3;
         inline1 = inline2 = inline3 = false;
        var wordslower=words[i].toLowerCase();
        var [...a]=wordslower;
        //var alower=a.toLowerCase();
        console.log(a);
       for (var j=0;j<a.length;j++){
           inline1=inline1||line1.includes(a[j]);//重点
           inline2=inline2||line2.includes(a[j]);//重点
           inline3=inline3||line3.includes(a[j]);//重点
       }
        if(inline1+inline2+inline3==1){
            result.push(words[i]);
        }
    }
    return result

};