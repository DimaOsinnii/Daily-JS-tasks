//Write a function witch convert string type of "my-short-string" to "myShortString"
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
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


//Copy and sort array
let array = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(array);
console.log(array);
console.log(sorted);

function copySorted(arr) {
    return arr.slice().sort();
}

//Convert obj to arr
let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let userss = [vasya, petya, masha];
let names = userss.map(item => item.name);
console.log(names);


//Convert arr to obj

let v = {name: "Вася", surname: "Пупкин", id: 1};
let p = {name: "Петя", surname: "Иванов", id: 2};
let m = {name: "Маша", surname: "Петрова", id: 3};

let users = [v, p, m];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
console.log(usersMapped);


//Sort by value

let vas = {name: "Вася", age: 25};
let pet = {name: "Петя", age: 30};
let mas = {name: "Маша", age: 28};

let owners = [vasya, petya, masha];

function sortByAge(arr) {
    return arr.sort((a, b) => {
        return a.age - b.age;
    });
}

sortByAge(owners);
console.log(owners);


//unique value
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));

function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

//unique value with using Set
function uni(arr) {
    let set = new Set();
    let newArray  = [];
    for (let value of arr) set.add(value);
    set.forEach((item) => newArray.push(item));
    return newArray;
}


let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(uni(values));
/*function unique(arr) {
    return Array.from(new Set(arr));
}*/

//Filter anagrams

let mass = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();
    for(let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
console.log(aclean(mass));

//WeakSet practice

let messagesS = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messagesS[0]);
readMessages.add(messagesS[1]);
readMessages.add(messagesS[2]);

alert("Read message 0: " + readMessages.has(messagesS[0]));
readMessages.add(messagesS[2]);


//Sum obj value

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries() {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    if (Object.values(salaries)) return sum;
    return 0
}
alert(sumSalaries(salaries));


//counter value
let own = {
    name: 'John',
    age: 30
};

function count (obj) {
    return Object.entries(obj).length;
}

alert( count(own) );