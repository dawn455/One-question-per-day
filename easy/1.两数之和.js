/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i =0; i<nums.length;i++) {
    if(map.has(target - nums[i])){
      return [map.get(target - nums[i]),i]
    } else {
      map.set(nums[i],i)
    }
  }
  return []
};

// （1）get() 方法用来获取一个 Map 对象中指定的元素。
// （2）set() 方法为Map对象添加一个指定键（key）和值（value）的新元素。
// （3）has() 返回一个bool值，用来表明map 中是否存在指定元素。
// @lc code=end
