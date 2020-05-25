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

#### leetcode 24 两两交换链表中的节点

> 这道题的关键在于，需要新开两个额外的节点。交换后每次走两步

> prev first second next

> 1 -> 2 -> 3 -> 4 -> null

> 进行如下指针变换:

> prev -> second -> first -> next

> 2 -> 1 -> 3 -> 4 -> null

> 移动指针:

>         prev   first  second  next

> 2 -> 1 -> 3 -> 4 -> null

> 重复上述操作。移动指针进行步进，每次走两格

```
var swapPairs = function(head) {
  let prev = new ListNode(-1)
  prev.next = head
  const link = prev

  while (prev.next && prev.next.next) {
    const first = prev.next
    const second = prev.next.next

    first.next = second.next
    second.next = first
    prev.next = second
    prev = prev.next.next
  }

  return link.next
};
```
