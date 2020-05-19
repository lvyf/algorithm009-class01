/**
 * leetcode 88
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
 *
 * 说明:
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 */

// 方法1 使用了新的数组保存合并后的元素
var merge = function (nums1, m, nums2, n) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    result.push(Math.min(nums1[i], nums2[j]));
    nums1[i] < nums2[j] ? i++ : j++;
  }

  if (i < m || j < n) {
    result = result.concat(i < m ? nums1.slice(i, m) : nums2.slice(j, n));
  }

  return result;
};

// 方法2 从后向前遍历
var merge2 = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  while (i >= 0 && j >= 0 && k > 0) {
    nums1[k] = Math.max(nums1[i], nums2[j]);
    nums1[i] > nums2[j] ? i-- : j--;
    k--;
  }

  if (i >= 0 || j >= 0) {
    (i >= 0 ? nums1.slice(0, i + 1) : nums2.slice(0, j + 1)).forEach(
      (element, index) => {
        nums1[index] = element;
      }
    );
  }

  return nums1;
};

// 另一种从后向前遍历
var merge3 = function (nums1, m, nums2, n) {
  let p = m + n;

  while (n > 0) {
    if (m <= 0) {
      nums1[--p] = nums2[--n];
      continue;
    }
    nums1[--p] = nums1[m - 1] >= nums2[n - 1] ? nums1[--m] : nums2[--n];
  }

  return nums1;
};

// test 输出: [1,2,2,3,5,6]
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge3([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
