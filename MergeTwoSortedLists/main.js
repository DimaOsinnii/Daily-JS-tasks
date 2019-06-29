/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

    Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4*/
function mergeTwoSortedLists(firstList, secondList, list, node) {

    if(firstList === null) return secondList;
    if(secondList === null) return  firstList;

    if(firstList && secondList) {
        if(firstList.val <= secondList.val)  {
            node = firstList;
            firstList = node.next;
        }
        else {
            node = secondList;
            secondList = node.next;
        }
    }
    list = node;

    while(firstList && secondList) {
        if(firstList.val <= secondList.val) {
            node.next = firstList;
            node = firstList;
            firstList = node.next;
        }
        else  {
            node.next = secondList;
            node = secondList;
            secondList = node.next;
        }
    }

    if(firstList === null) node.next = secondList;
    if(secondList === null) node.next = firstList;

    return list;
}

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
