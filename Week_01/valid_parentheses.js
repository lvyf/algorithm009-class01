/**
 * leetcode 20 有效的括号
 */

// 暴力法 不断replace 掉成对的括号 比较replace之前和之后的长度是否有变化
var isValid = function (s) {
  const matchs = ["()", "[]", "{}"];
  let lastLength = 0;

  do {
    lastLength = s.length;
    matchs.forEach((item) => (s = s.replace(item, "")));
  } while (s.length !== lastLength);

  return s === "";
};

// 利用栈和哈希匹配，栈用于求解有 -> 最新相关性 的问题
var isValid2 = function (s) {
  const quoteMap = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (char of s) {
    if (quoteMap[char]) {
      if (stack.pop() !== quoteMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

// 更简短的写法，把插入操作提前
var isValid3 = function (s) {
  const dict = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (c of s) {
    if (!dict[c]) stack.unshift(c);
    else if (!stack.length || (stack.length && stack.shift() !== dict[c]))
      return false;
  }

//test
console.log(isValid("{[]}"));
console.log(isValid("([)]"));

console.log(isValid2("{[]}"));
console.log(isValid2("([)]"));

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
