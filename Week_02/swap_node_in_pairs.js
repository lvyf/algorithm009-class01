/**
 * leetcode 24
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1 -> 2 -> 3 -> 4 -> 5 -> null
var swapPairs = function (head) {
  let prev = new ListNode(-1);
  prev.next = head;
  let link = prev;

  // 交换 1和2，然后移动指针，每次两步
  while (prev.next && prev.next.next) {
    const first = prev.next;
    const second = prev.next.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = prev.next.next;
  }

  return link.next;
};

// prev  first  second  next
//       1  ->  2  ->  3  ->  4 -> null
//             .
//             .
// 进行如下指针变换:
// prev -> second -> first -> next
//           2    ->   1   ->  3  ->  4 -> null
//               .
//               .
// 移动指针:
//                   prev   first  second  next
//           2    ->   1   ->  3  ->  4 -> null
//               .
//               .
// 重复上述操作
// 移动指针进行步进，每次走两格
