function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
node1.next = node2
node2.next = node3

var removeNthFromEnd = function (head, n) {
    let d = new ListNode();
    d.next = head;
    let rootContainer = [];
    while (head) {
        rootContainer.push(head);
        head = head.next;
    }
    if (rootContainer.length === 1 && n === 1) return null;
    let index = rootContainer.length - n;
    if (index === 0) {
        return rootContainer[1]
    }
    if (index === rootContainer.length - 1 && rootContainer.length !== 2) {
        rootContainer[index - 1].next = null;
        return rootContainer[0]
    }
    if (rootContainer[index + 1]) {
        rootContainer[index - 1].next = rootContainer[index + 1];
    }else {
        rootContainer[index - 1].next = null
    }
    return d.next;
};
const res = removeNthFromEnd(node1, 1)
console.log(res);