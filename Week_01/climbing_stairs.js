/**
 * leetcode 70 爬楼梯
 */

// 找最近子问题
// if-else for while recursion
var climbStairs = function (n) {
  if (n < 2) {
    return n;
  }

  const dp = [];

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// 暴力法
var climb = function (i, n) {
  if (i > n) {
    return 0;
  } else if (i === n) {
    return 1;
  }

  return climb(i + 1, n) + climb(i + 2, n);
};

// 测试
console.log(climbStairs(3) === 3);
console.log(climb(0, 3) === 3);
