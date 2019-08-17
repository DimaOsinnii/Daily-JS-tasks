//Write a function witch convert string type of "my-short-string" to "myShortString"
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word: word[0].toUpperCase() + word.slice(1))
        .join('');
}
alert(camelize("lol-kekicg-cheburekich"));

//Range filtering with copying into new array
let arr = [5, 3, 8, 1];
function filterRange(arr, from, to) {
    return arr.filter(item => item >= from && item <= to);
}
alert(filterRange(arr, 1, 10));

//Range filtering with convert array
function filterRangeInPlace(arr, from, to) {
    arr.forEach((item, index) => {
        if (from <= arr[index] || arr[index] <= to) arr.splice(index, 1);
    });
}
filterRangeInPlace(arr, 1, 4,);
console.log(arr);

//