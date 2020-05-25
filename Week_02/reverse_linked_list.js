/**
 * 206. 反转链表
 */
var reverseList = function (head) {
  if (!head) return head;
  let prev = head;

  while (head.next) {
    const temp = prev;
    prev = head.next;
    head.next = head.next.next;
    prev.next = temp;
  }

  return prev;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function printLink(l1) {
  while (l1.next) {
    console.log(l1.val);
    l1 = l1.next;
  }
}

function createLinkedList(nums) {
  let list = new ListNode(null);
  const temp = list;
  nums.forEach((item) => {
    list.next = new ListNode(item);
    list = list.next;
  });

  return temp;
}

// test
const l1 = createLinkedList([1, 2, 3, 4, 5]);
const l2 = reverseList(l1);
console.log(l2);
