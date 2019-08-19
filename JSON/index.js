let user = {
    name: "Василий Иванович",
    age: 35
};
const json = JSON.stringify(user);
alert(json);

let objct = JSON.parse(json);
alert(objct);