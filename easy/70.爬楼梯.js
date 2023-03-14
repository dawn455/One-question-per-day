/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let num1=0, num2 =0, must=1
  for(let i=1;i<=n;i++){
    num1 = num2
    num2 = must
    must = num1 + num2
  }
  return must
};
// @lc code=end

