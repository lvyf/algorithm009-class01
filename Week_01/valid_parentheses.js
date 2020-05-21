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

  return s === "" ? true : false;
};

//test
console.log(isValid("{[]}"));
console.log(isValid("([)]"));

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
