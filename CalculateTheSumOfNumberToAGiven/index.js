//Write a function sumTo (n) that calculates the sum of the numbers 1 + 2 + ... + n.
sumToWithFor = (n) => {
    if (isNaN(n)) {
        return "Not a Number"
    } else {

        let sum = 0;
        for (let i = +n; i >= 0; i--) {
            sum += i;
        }
        return sum
    }
};

sumToWithRec = (n) => {
    return +n + sumToWithFor(+n - 1);
};

sumTOWithFormula = (n) => {
    return +n * (+n + 1) / 2;
};

////////////////////////////////
alert(sumToWithFor("12"));
alert(sumToWithRec("12"));
alert(sumTOWithFormula("12"));
