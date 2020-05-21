/**
 * leetcode 84. 柱状图中最大的矩形
 */

// 暴力法 时间复杂度 O(n^3) 2层循环 + 找最小值
var largestRectangleArea = function (heights) {
  var maxArea = 0;
  for (var i = 0; i < heights.length; i++) {
    for (var j = i; j < heights.length; j++) {
      var minHeight = Number.MAX_SAFE_INTEGER;
      for (var k = i; k <= j; k++) {
        minHeight = Math.min(minHeight, heights[k]);
      }
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
};

// 优化后的暴力法 时间复杂度 O(n^2) 按柱子遍历，找到该柱子对应的左右边界
var largestRectangleArea2 = function (heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let minHeight = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }
};

// test
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea2([2, 1, 5, 6, 2, 3]));
