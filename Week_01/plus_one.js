/**
 * leetcode 66 加一
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

// 最简单粗暴的方法，倒序遍历每一位加1，存储进位值
var plusOne = function (digits) {
  let buffer = 0;

  const digitStr = digits.reduceRight((prev, curr, index, arr) => {
    // 加一逻辑
    if (index === arr.length - 1) {
      curr += 1;

      if (curr === 10) {
        curr = 0;
        buffer = 1;
      }
    }

    // 进位逻辑
    if (buffer === 1) {
      curr += buffer;
      buffer = 0;

      if (curr === 10) {
        curr = 0;
        buffer = 1;
      }
    }

    console.log("curr", curr, index);

    return curr + prev.toString();
  });
};

// 作弊法，性能不太好 38%
var plusOne2 = function (digits) {
  return (BigInt(digits.join("")) + 1n)
    .toString()
    .split("")
    .map((n) => +n);
};

// test
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne2([4, 3, 2, 1]));
