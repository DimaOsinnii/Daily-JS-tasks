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
