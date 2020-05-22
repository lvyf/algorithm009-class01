/**
 * leetcode 15 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 请你找出所有满足条件且不重复的三元组。
 * 注意：案中不可以包含重复的三元组
 */

// 无论暴力法，hash法还是双指针法，主要困难在去重

// 双指针夹逼法
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);
  const result = [];

  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] === nums[k - 1]) continue;

    let i = k + 1;
    let j = nums.length - 1;

    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j];

      if (sum < 0) {
        while (i < j && nums[++i] === nums[i - 1]) continue;
      } else if (sum > 0) {
        while (i < j && nums[--j] === nums[j + 1]) continue;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        i++;
        j--;

        while (i < j && nums[i] === nums[i - 1]) i++;
        while (i < j && nums[j] === nums[j + 1]) j--;
      }
    }
  }

  return result;
};

// 测试
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
