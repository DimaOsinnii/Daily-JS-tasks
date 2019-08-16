function extraCurrencyValue(str) {
    let number = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]))number += str[i];
    }
    return +number;
}
alert(extraCurrencyValue('$100') === 100 );
