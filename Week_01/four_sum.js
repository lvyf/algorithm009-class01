/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// leetcode 18，同样的方法。注意这里不是相加等于0，而是等于target，之前的跳过逻辑不生效了
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);
  const result = [];

  for (let k = 0; k < nums.length - 3; k++) {
    // if (nums[k] > target) break
    if (k > 0 && nums[k] === nums[k - 1]) continue;

    for (let n = k + 1; n < nums.length - 2; n++) {
      // if (nums[n] > target) break
      if (n > k + 1 && nums[n] === nums[n - 1]) continue;

      let i = n + 1;
      let j = nums.length - 1;
      while (i < j) {
        const sum = nums[i] + nums[j] + nums[k] + nums[n];
        if (sum < target) {
          while (i < j && nums[++i] === nums[i - 1]) continue;
        } else if (sum > target) {
          while (i < j && nums[--j] === nums[j + 1]) continue;
        } else {
          result.push([nums[i], nums[j], nums[k], nums[n]]);
          i++;
          j--;

          while (i < j && nums[i] === nums[i - 1]) i++;
          while (i < j && nums[j] === nums[j + 1]) j--;
        }
      }
    }
  }

  return result;
};
