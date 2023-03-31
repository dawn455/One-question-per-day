/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var a=s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g);
  if(!a) return true
  var slong=a.join("");
  var left=0;right=slong.length-1;
  while(left<right){
      if(slong[left]==slong[right]){
          left++;
          right--;
      }else{
      return false
      }
  }
  return true
};
// @lc code=end

