/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1, q = l2, curr = dummyHead;
    var carry = 0;
    while(p || q) {
        var x = p ? p.val : 0;
        var y = q? q.val : 0;
        var sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode( sum % 10);
        curr = curr.next;
        
        if(p) {
            p = p.next;
        }
        if(q){
            q = q.next;
        }
    }
    if(carry > 0){
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};

/**
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    while (p != null || q != null) {
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}*/