/**
 * leetcode 42 接雨水
 */

// 动态规划法，分别从两边存储最大值快照，对比两组最大值求出最小值，再减去当前柱子求得面积
// 使用了两个额外数组 时间复杂度和空间复杂度都是 O(n)
var trap = function (height) {
  let maxArea = 0;
  const leftMaxArr = [height[0]];
  const rightMaxArr = [];
  rightMaxArr[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    leftMaxArr[i] = Math.max(height[i], leftMaxArr[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rightMaxArr[i] = Math.max(height[i], rightMaxArr[i + 1]);
  }
  for (let i = 1; i < height.length - 1; i++) {
    maxArea += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
  }

  return maxArea;
};
