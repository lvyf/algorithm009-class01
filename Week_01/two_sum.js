/**
 * leetcode 1 两数之和
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

// 暴力法 时间复杂度 O(n^2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 利用哈希存储 空间换时间，空间O(n)，时间O(n)
var twoSum2 = function (nums, target) {
  const valueMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (valueMap[nums[i]] !== undefined) {
      return [valueMap[nums[i]], i];
    }

    valueMap[target - nums[i]] = i;
  }
};

// 测试
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
