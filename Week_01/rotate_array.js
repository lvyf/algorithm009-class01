/**
 * 189. 旋转数组
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
 *
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 *
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 * @see https://leetcode-cn.com/problems/rotate-array/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 先用最暴力的
var rotate = function (nums, k) {
  nums = nums
    .slice(nums.length - k)
    // .reverse()
    .concat(nums.slice(0, k + 1));

  return nums;
};

// 第二暴力的
var rotate1 = function (nums, k) {
  // 旋转k个元素
  for (var i = 0; i < k; i++) {
    let bak = nums[nums.length - 1];

    // 将每个元素与r交换位置
    for (j = 0; j < nums.length; j++) {
      const temp = nums[j];
      nums[j] = bak;
      bak = temp;
    }
  }

  return nums;
};

// 看答案来的暴力方法
var rotate2 = function (nums, k) {
  nums.splice(0, 0, ...nums.splice(nums.length - k));
  return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));
