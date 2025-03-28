/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(4, null);
let node2 = new ListNode(3, node1);
let node3 = new ListNode(2, node2);
let node4 = new ListNode(1, node3);

const list = [1, 2, 3, 4];

const swapPairs = (head) => {
  if (!head) return head;
  let dummyNode = new ListNode(0, head);
  let prev = dummyNode;
  let currentNode = head;

  while (currentNode && currentNode.next) {
    let tempNode = currentNode.next;

    currentNode.next = currentNode.next.next;
    prev.next = tempNode;
    tempNode.next = currentNode;

    prev = currentNode;
    currentNode = currentNode.next;
  }
  return dummyNode.next;
};

node4 = swapPairs(node4);
const result = [];

while (node4) {
  result.push(node4.val);
  node4 = node4.next;
}
console.log(result); // Output: [2,1,4,3]
