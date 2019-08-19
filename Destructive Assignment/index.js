//Destructive Assignment
let user = {
    name: "John",
    years: 30,
    isAdmin: true
};

let {name, years: age, isAdmin = false} = user;

console.log(age);
console.log(name);
console.log(isAdmin);


//Maximum salary
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(obj) {
    let maxSalary = 0;
    let name = '';
    if (Object.keys(obj).length === 0) return null;
    for (let [key, value] of Object.entries(obj)) {
        if (maxSalary <= value) {
            maxSalary = value;
            name = key
        }
    }
    return name
}
console.log(topSalary(salaries));