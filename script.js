let firstName = prompt("Введите имя:");
let lastName = prompt("Введите фамилию:");
let age = prompt("Введите возраст:");
let city = prompt("Введите город:");
let profession = prompt("Введите профессию:");

console.log("Имя:", firstName);
console.log("Фамилия:", lastName);
console.log("Возраст:", age);
console.log("Город:", city);
console.log("Профессия:", profession);

let message = `
Визитная карточка:
Имя: ${firstName} ${lastName}
Возраст: ${age} лет
Город: ${city}
Профессия: ${profession}
`;

alert(message);