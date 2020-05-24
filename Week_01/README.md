## 学习笔记

#### leetcode 70 爬楼梯

尝试了两种解题思路

> 暴力法，递归计算每一级台阶的步数。包含重复计算，在计算第 4 级台阶时，会把第三级重新计算一遍
> 动态规划，找最近子问题，并缓存上一步的解。简化时间复杂度到 O(n)，但需要额外辅助空间

```
var climbStairs = function(n) {
  if (n < 2) {
    return n
  }
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}
```

#### leetcode 20 有效的括号

尝试了两种思路，代码都比较简洁

> 暴力匹配，不停的对字符串进行 replace ，去除掉成对的括号。比较两次循环之间字符串的长度变化，如果字符串 s 为空，或者没有匹配到成对的括号就退出循环

```
var isValid = function(s) {
  const matchs = ['()', '[]', '{}']
  let lastLength = s.length
  do {
    lastLength = s.length
    matchs.forEach(item => s = s.replace(item, ''))
  } while (s.length && lastLength !== s.length)

  return s.length === 0
};
```

> 哈希匹配，遍历复杂度仍然是O(n)，但将字符串的处理过程简化到 O(1)。需要额外的数组作为辅助空间，时间复杂度 O(n)

> 关键点：利用栈，如果是左括号，压入栈中。如果是右括号，就从栈中弹出元素进行匹配。最后判断栈是否为空

```
var isValid = function(s) {
  const quoteDict = {')': '(', ']': '[', '}': '{'}
  const quoteList = []
  for (char of s) {
    if (!quoteDict[char]) quoteList.push(char)
    else if (quoteList.pop() !== quoteDict[char]) return false
  }
  return quoteList.length === 0
};
```

#### leetcode 1 两数之和

#### leetcode 15 三数之和

#### leetcode 18 四数之和

#### leetcode 84 柱状图中最大的矩形

#### leetcode 11 盛水最多的容器

#### leetcode 88 合并两个有序数组

#### leetcode 21 合并两个有序链表

#### leetcode 155 最小栈

#### leetcode 283 移动零

#### leetcode 66 加一

#### leetcode 26 删除排序数组中的重复项

#### leetcode 189 旋转数组

#### leetcode 42 接雨水

#### leetcode 641 设计循环双端队列

略
