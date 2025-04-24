// // 1 - отримай body елемент і виведи його в консоль;
// console.log(document.querySelector('body'));

// // 2 - отримай елемент id="title" і виведи його в консоль;
// console.log(document.querySelector('#title'));

// // 3 - отримай елемент class="list" і виведи його в консоль;
// console.log(document.querySelector('.list'));

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataTopic = document.querySelectorAll('[data-topic]');
// console.log(dataTopic);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// console.log(dataTopic[0]);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// console.log(dataTopic[dataTopic.length - 1]);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// console.log(document.querySelector('h1').nextElementSibling);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const titles = document.querySelectorAll('h3');
// console.log(titles);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// for (const title of titles) {
//   title.classList.add('active');
// }

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liDataTopic = document.querySelector('li[data-topic="navigation"]');
// console.log(liDataTopic);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// liDataTopic.style.backgroundColor = 'yellow';

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const paragraph = liDataTopic.querySelector('p');
// paragraph.textContent = 'Я змінив тут текст!';

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається
// // у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const currentElement = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(currentElement);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// currentElement.style.backgroundColor = 'lightblue';

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completedTitle = document.querySelector('.completed');
// console.log(completedTitle);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const parentLi = completedTitle.parentNode;
// parentLi.parentNode.removeChild(parentLi);

// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const h1Element = document.querySelector('h1');
// const newParagraph = document.createElement('p');
// newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
// h1Element.insertAdjacentElement('afterend', newParagraph);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи
// // і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// // тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// // const newLi = document.createElement('li');
// // const newP = document.createElement('p');
// // const newTitle = document.createElement('h3');
// // const list = document.querySelector('ul');
// // newTitle.textContent = 'Властивість innerHTML';
// // newtTitle.classList.add = "active";
// // newP.textContent =
// //   'Ще один спосіб створити DOM-елемент і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// // newLi.append(newTitle);
// // newLi.append(newP);
// // list.append(newLi);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const list = document.querySelector('ul');
// const newLiHTML = `
//   <li>
//     <h3 class="active">Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елемент і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>
// `;
// list.insertAdjacentHTML('beforeend', newLiHTML);

// // 20 - очисти список
// // list.innerHTML = '';

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// function createElements(ammount) {
//   let elementsHTML = '';

//   for (let i = 0; i < ammount; i++) {
//     const numb = randomNumber();
//     const className = numb % 2 === 0 ? 'even' : 'odd';
//     elementsHTML += `<div class="number ${className}">${numb}</div>`;
//   }

//   document.querySelector('.numberContainer').innerHTML = elementsHTML;
// }
// createElements(100);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
// const nameInput = document.querySelector('.contact-form-input');
// const confirmCheckbox = document.querySelector('.contact-form-checkbox');
// const userNameOutput = document.querySelector('.js-username-output');
// const form = document.querySelector('.contact-form');
// const policyLabel = document.querySelector('.js-policy-label');

// nameInput.addEventListener('input', addClass);
// nameInput.addEventListener('input', updateUserName);

// function addClass(event) {
//   if (event.target.value.length >= 6) {
//     event.target.classList.add('success');
//     event.target.classList.remove('error');
//   } else {
//     event.target.classList.add('error');
//     event.target.classList.remove('success');
//   }
// }

// function updateUserName(event) {
//   userNameOutput.textContent = event.target.value.trim() || 'Anonymous';
// }

// nameInput.addEventListener('focus', checkInput);
// nameInput.addEventListener('blur', checkInput);

// function checkInput(event) {
//   if (event.target.value === '') {
//     event.target.style.outline = '3px solid red';
//   } else {
//     event.target.style.outline = '3px solid lime';
//   }
// }

// form.addEventListener('submit', checkForm);

// function checkForm(event) {
//   event.preventDefault();

//   const inputValue = nameInput.value.trim();
//   const isConfirmed = confirmCheckbox.checked;

//   if (inputValue === '' || !isConfirmed) {
//     alert("Будь ласка, введіть ім'я та підтвердіть політику конфіденційності.");
//     return;
//   }

//   const user = { userName: inputValue };
//   console.log(user);

//   nameInput.value = '';
//   confirmCheckbox.checked = false;
//   userNameOutput.textContent = 'Anonymous';
//   nameInput.classList.remove('success', 'error');
//   nameInput.style.outline = '';
// }
