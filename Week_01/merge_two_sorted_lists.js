/**
 * 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
  return this;
}

function createLinkedList(str) {
  const arr = str.split("->");
  const link = new ListNode(arr[0]);
  temp = link;

  for (let i = 1; i < arr.length; i++) {
    temp.next = new ListNode(arr[i]);
    temp = temp.next;
  }

  return link;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const link = new ListNode(null);
  let temp = link;

  while (l1 && l2) {
    temp.next = new ListNode(l1.val < l2.val ? l1.val : l2.val);
    temp = temp.next;

    if (l1.val < l2.val) {
      l1 = l1.next;
    } else {
      l2 = l2.next;
    }
  }

  if (l1 || l2) {
    temp.next = l1 || l2;
  }

  return link.next;
};

// 1->2->4, 1->3->4
const l1 = createLinkedList("1->2->4");
const l2 = createLinkedList("1->3->4");

const l3 = mergeTwoLists(l1, l2);

console.log(l3);
