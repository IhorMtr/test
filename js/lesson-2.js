// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// let styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// for (let i = 0; i < styles.length; i++) {
//   if (styles[i] === 'blues') {
//     styles[i] = 'classic';
//   }
// }
// console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(['rock', 'pop', 'metal']);
// logItems(['reggae']);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let counter = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (typeof args[i] === 'number') {
//       sum += args[i];
//       counter++;
//     }
//   }
//   return sum / counter;
// }
// console.log(caclculateAverage(5, 15, 25, 35));
// console.log(caclculateAverage(5, true, 'lalala', 35));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     let smallestNumber = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//       }
//     }
//     return smallestNumber;
//   } else {
//     return 'Sorry, it is not an array!';
//   }
// }

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallestNumber(numbers));
// console.log(findSmallestNumber('Hello'));

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let totalPrice = 0;
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      totalPrice += fruit.price * fruit.quantity;
    }
  }
  return totalPrice;
}

console.log(calcTotalPrice(fruits, 'Виноград'));
