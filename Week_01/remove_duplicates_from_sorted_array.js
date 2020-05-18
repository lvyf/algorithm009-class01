/**
 * 26. 删除排序数组中的重复项
 *
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间复杂度O(1)，空间O(n)
var removeDuplicates = function (nums) {
  return [...new Set(nums)].length;
};

// 时间复杂度 O(n)，空间 O(1)
// 倒序遍历似乎更快，不过懒得改了
var removeDuplicates2 = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  let last = nums[0];
  for (let i = 1; i < nums.length; ) {
    if (nums[i] !== last) {
      last = nums[i];
      i++;
    } else {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

// 参考答案中的解法，
var removeDuplicates3 = function (nums) {
  let count = 0;
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[i - count] = nums[i];
    } else {
      ++count;
    }
  }
  return n - count;
};

// 和上面一样，这修改不做删除的双指针法
var removeDuplicates4 = function (nums) {
  let len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) nums[len++] = nums[i];
  }
  return len;
};

// 测试
const testArr = [1, 1, 2];
console.log(removeDuplicates(testArr));
console.log(removeDuplicates2(testArr));
console.log(removeDuplicates3(testArr));
