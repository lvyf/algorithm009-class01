/**
 * leetcode 11 盛水最多的容器
 */

// 暴力法，枚举数组计算面积，注意两个柱子是不同的元素
var maxArea = function (heights) {
  let max = 0;
  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const area = Math.min(heights[i], heights[j]) * Math.abs(i - j);
      if (area > max) {
        max = area;
      }
    }
  }

  return max;
};

// 双指针法
var maxArea2 = function (heights) {
  let maxArea = 0;

  let i = 0;
  let j = heights.length - 1;

  while (i < j) {
    const area = Math.min(heights[i], heights[j]) * (j - i);
    if (area > maxArea) {
      maxArea = area;
    }

    // 短边移动
    heights[i] <= heights[j] ? i++ : j--;
  }

  return maxArea;
};

// 双指针法2
var maxArea3 = function (heights) {
  let maxArea = 0;
  let j = heights.length - 1;
  for (let i = 0; i < j; ) {
    const minHeight = heights[i] < heights[j] ? heights[i++] : heights[j--];
    maxArea = Math.max(minHeight * (j - i + 1), maxArea);
  }

  return maxArea;
};

// 测试
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea3([1, 8, 6, 2, 5, 4, 8, 3, 7]));
