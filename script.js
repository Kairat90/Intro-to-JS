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

//Задание 2: Информация о типах данных (дополнительно)

// let ten = 10;
// let tenString = 'десять';
// let isTen = true;
// let nothing = null;
// let undef;
// let user = {
//   name: 'Иван',
//   age: 25,
//   isStudent: true
// };
// let array = [1, 2, 3];

// console.log(`Число = ${ten}, Тип данных ten = ${typeof ten}`);
// console.log(`Строка = ${tenString}, Тип данных tenString = ${typeof tenString}`);
// console.log(`isTen = ${isTen}, Тип данных isTen = ${typeof isTen}`);
// console.log(`Переменная = ${nothing}, Тип данных nothing = ${typeof nothing}`);
// console.log(`Переменная = ${undef}, Тип данных undef = ${typeof undef}`);
// console.log(user, `Тип данных user = ${typeof user}`);
// console.log(array, `Тип данных array = ${typeof array}`);