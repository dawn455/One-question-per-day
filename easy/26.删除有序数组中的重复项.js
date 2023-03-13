/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 1;
  for(let i = 1;i<nums.length;i++){
    if(nums[i] !== nums[i-1]){
      nums[j] = nums[i];
      j++
    }
  }
  return j
};
// @lc code=end

