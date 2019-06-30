describe("maxProfit()", function () {
   it("[7, 1, 5, 3, 6, 4]", function () {
       assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
   });
    it("[2, 2, 2, 1, 1, 10]", function () {
        assert.equal(maxProfit([2, 2, 2, 1, 1, 10]), 9);
    });
    it("[5, 5, 5, 5, 5]", function () {
        assert.equal(maxProfit([5, 5, 5, 5, 5]), 0);
    });
    it("[10, 9, 2, 10, 1, 10, 9]", function () {
        assert.equal(maxProfit([10, 9, 2, 10, 2, 10, 9]), 8);
    });
});