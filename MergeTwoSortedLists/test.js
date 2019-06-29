describe("mergeTwoSortedLists()", function () {
    it('1 -> 2 -> 4, 1 -> 3 -> 4 → 1 -> 1 -> 2 -> 3 -> 4 -> 4 ', function () {
        let input = [new ListNode(1, new ListNode(2, new ListNode(4))),
            new ListNode(1, new ListNode(3, new ListNode(4)))];

        let output = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4,
            new ListNode(4))))));

        assert.deepEqual(mergeTwoSortedLists(...input), output);
    });
});