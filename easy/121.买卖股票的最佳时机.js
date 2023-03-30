/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
	
  // 最低买点
  let min = prices[0];
  // 最大收入
  let max = 0;

  for (let p of prices) {
      // 最佳买点，买入点最低
      min = Math.min(min, p);
      max = Math.max(max, p - min);
  }

  return max;
};
// @lc code=end

