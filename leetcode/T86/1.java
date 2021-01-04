/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode partition(ListNode head, int x) {
        //小链表的头
        ListNode smallHead = new ListNode(0);
        //大链表的头
        ListNode bigHead = new ListNode(0);
        //小链表的尾
        ListNode smallTail = smallHead;
        //大链表的尾
        ListNode bigTail = bigHead;
        //遍历head链表
        while (head != null) {
            if (head.val < x) {
                //如果当前节点的值小于x，则把当前节点挂到小链表的后面
                smallTail = smallTail.next = head;
            } else {//否则挂到大链表的后面
                bigTail = bigTail.next = head;
            }

            //继续循环下一个结点
            head = head.next;
        }
        //最后再把大小链表拼接在一块即可。
        smallTail.next = bigHead.next;
        bigTail.next = null;
        return smallHead.next;
    }
}