/**
 * leetcode 283
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明：
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 */

// 排序法，但答案要求保序，所以这种方法不行
var sorted = function (nums) {
  nums.sort((a, b) => a - b);
  const index = nums.lastIndexOf(0);
  const count = index + 1;
  nums.splice(0, count);
  nums.splice(nums.length, 0, ...new Array(count).fill(0));

  return nums;
};

var move = function (nums) {
  let end = nums.length - 1;
  for (let i = 0; i <= end; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      --end;
    } else {
      i++;
    }
  }

  return nums;
};

var move2 = function (nums) {
  nums.forEach((item, index) => {
    if (item === 0) {
      nums.splice(index, 1);
      nums.push(0);
    }
  });

  return nums;
};

var moveZeroes = function (nums) {
  // 非0元素的下标
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];

      if (i !== j) {
        nums[i] = 0;
      }

      j++;
    }
  }

  return nums;
};

// 测试
console.log(move([0, 1, 0, 3, 12]));
console.log(move2([0, 1, 0, 3, 12]));
console.log(sorted([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
