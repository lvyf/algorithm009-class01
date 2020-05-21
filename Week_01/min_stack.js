/**
 * leetcode 155 最小栈
 */

// 使用数组模拟栈，使用两个栈来优化getMin操作，在常数时间完成
var MinStack = function () {
  this.data = [];
  this.min = [];
};

MinStack.prototype.push = function (x) {
  this.data.push(x);
  if (x <= this.min[0] || this.min.length === 0) {
    this.min.unshift(x);
  }
};

MinStack.prototype.pop = function () {
  if (this.top() === this.min[0]) {
    this.min.shift();
  }
  this.data.length -= 1;
};

MinStack.prototype.top = function () {
  return this.data[this.data.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.min[0];
};
