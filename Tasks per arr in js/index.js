//Write a function witch convert string type of "my-short-string" to "myShortString"
function camelize(str) {
    return str.split('-').map((word, index) => index === 0 ? word: word[0].toUpperCase() + word.slice(1)).join('');
}
alert(camelize("lol-kekicg-cheburekich"));
//