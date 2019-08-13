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
alert('Multiply' + ' ' + '=' + ' ' + calculator.mul());