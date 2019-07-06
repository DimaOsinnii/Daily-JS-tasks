describe("twoSum()", function () {
   it('[5, 10, -1, 20, -100, 2] → 4' , function () {
      let input =  [5, 10, -1, 20, -100, 2];
      let target = 4;
      let output = [0, 2];

      assert.deepEqual(twoSum(input, target), output);
   });
});