// // Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// // квадрати кожного елементу вхідного масиву.
// // Очікуваний результат: [1, 4, 9, 16, 25].

// // const numbers = [[1, 2, 3, 4, 5]]

// const numbers = [[1, 2, 3, 4, 5]];
// let newArr = numbers.flatMap(number => {
//   return number.map(num => num * num);
// });
// console.log(newArr);

// // Дано масив об'єктів. Створіть новий масив, що містить всі значення
// // з масивів values кожного об'єкту, збережених в одному масиві.
// // Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// // const data = [
// //  { id: 1, values: [1, 2, 3] },
// //  { id: 2, values: [4, 5, 6] },
// //  { id: 3, values: [7, 8, 9] },
// // ];

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// let newArray = data.flatMap(elem => {
//   return elem.values;
// });
// console.log(newArray);

// // Дано масив об'єктів.
// // Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// // Очікуваний результат: true.

// // const people = [
// //  { name: 'John', age: 27 },
// //  { name: 'Jane', age: 31 },
// //  { name: 'Bob', age: 19 },
// // ];
// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// let peopleAge = people.find(person => person.age < 20) ? true : false;
// console.log(peopleAge);

// // Створи клас для калькулятора, який має такі методи:
// // - метод number, який набуває початкового значення для наступних операцій
// // - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
// // - методи add, substruct, divide, multiply
// // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   number(value) {
//     this.result = value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }

//   add(value) {
//     this.result += value;
//     return this;
//   }

//   substruct(value) {
//     this.result -= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       return this;
//     }
//     this.result /= value;
//     return this;
//   }

//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
// }
// const calc = new Calculator();
// console.log(calc.number(100).add(50).getResult());
