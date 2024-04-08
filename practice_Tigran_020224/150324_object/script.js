// 1. Реализуйте событие на кнопку, которая при нажатии будет увеличивать значение параграфе на +1

// const parElem = document.querySelector(".count > p");
// const btnElem = document.querySelector(".count > button");

// // let count = (localStorage.getItem("count")) ? +localStorage.getItem("count") : 0;
// let count =  +localStorage.getItem("count") ?? 0; // оператор слияния

// parElem.innerText = count;

// btnElem.addEventListener("click", () => {
    
//         count++
//         parElem.innerText = count;
//         // 2.1 Реализуйте сохранение актуального значение count в LS при нажатии на кнопку
//         localStorage.setItem("count",(count))
// })

// // 1.1 При нажатии на кнопку Отправить, реализуйте сохранение записи input в LS
// // 1.2 После обновления страницы значение input должно загружаться с LS

// const formElem = document.querySelector('form');

// formElem[0].value= localStorage.getItem('input') ?? 'Введите значение';

// formElem.addEventListener('submit', () => {
//     localStorage.setItem("input", formElem[0].value);    
// })

// ------------------------------------------
// Задание 1. Реализуйте событие клик на всю карточку, которая будет формировать в косноли сообщение "Карточка продукта"
// Задание 2. Реализуйте событие клик на КАРТИНКУ, которая будет формировать только одно сооющение в консоль: "Изображение продукта"
// Задание 3. Реализуйте событие клик на кнопку, которая будет формировать только одно сообщение в косноль: "Покупка продукта"

// const cardElem = document.querySelector('.product__card');
// cardElem.addEventListener('click', () => {
//     console.log("Карточка продукта");
// })

// const cardElem = document.querySelector('.product__card > img');
// cardElem.addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log("Изображение продукта");
// })

const cardElem = document.querySelector('.product__card > button');
cardElem.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log("Покупка продукта");
})







