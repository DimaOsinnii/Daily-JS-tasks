/*
let calculator = {
    read() {
       this['x'] = +prompt('Entry first number');
       this['y'] = +prompt('Entry second number');
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
};
calculator.read();
alert('Sum' + ' ' + '=' + ' ' + calculator.sum());
alert('Multiply' + ' ' + '=' + ' ' + calculator.mul());*/

/*
function Calculator() {
    this.read = function () {
        this.firstNumber = +prompt('Entry first number');
        this.secondNumber = +prompt("Entry second number");
    };

    this.sum = function () {
        return this.firstNumber + this.secondNumber;
    };

    this.mul = function () {
        return this.firstNumber * this.secondNumber;
    }
}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/


function Calculator() {
    let methods = {
        '+': (a, b) => a + b,
    };
    this.calculate = function (string) {
        let split = string.split(' '),
            a = +split[0],
            symbol = split[1],
            b = +split[2]

        if (!methods[symbol] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[symbol](a, b);
    };

    this.addMethod = function (name, func) {
        methods[name] = func;
    };
}

let calc = new Calculator;
calc.addMethod('^', (a, b) => a **b);
calc.addMethod('-', (a, b) => a - b);
console.log(calc.calculate('10 - 100'));
