## Week2 学习笔记

#### leetcode 206 反转链表

> 1. 利用外部空间，比如栈。先遍历一遍链表，将所有值压入栈中，再一个个弹出元素，生成新链表。需要遍历两次，并使用额外的线性存储空间

> 2. 迭代法: 先做异常处理，如果是空链表直接返回。然后使用一个指针记录当前头结点。

> null -> 1 -> 2 -> 3 -> 4 -> 5

> 1 <- 2 <- 3 <- 4 <- 5 <- null

> 单步演示交换过程 head = 1, prev = 1

> temp = null, prev = 1, null -> 2, prev.next -> null。注意两个关键点，每次交换都从 head 中移除了 head.next。以及空节点需要放到链表末尾

```
var reverseList = function(head) {
  if (!head) return head
  let prev = head

  while (head.next !== null) {
    const temp = prev
    prev = head.next
    head.next = head.next.next
    prev.next = temp
  }

  return prev
};
```
