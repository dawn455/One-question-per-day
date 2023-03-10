/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  var count = 0;
  var len = s.length;
  for(var i = len-1;i>=0;i--){
    if(s.charAt(i) == ' '){
      break;
    }
    count++;
  }
  return count
};
// @lc code=end

