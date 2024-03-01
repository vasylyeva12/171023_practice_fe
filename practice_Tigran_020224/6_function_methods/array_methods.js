//  ------------- FILTER-------------------

// let arr = [1,2,3,4,5,6,7,8,9]
// let result = arr.filter(el => el > 5)
// console.log(result); // [ 6, 7, 8, 9 ]

// // Отфилььруйте массив, сформировав в новом массиве только четные элементы
// let arr = [1,2,3,4,5,6,7,8,9, 10];

// let result = arr.filter(el => el % 2 === 0);
// console.log(result); //[ 2, 4, 6, 8, 10 ]

// Отфилььруйте массив, сформировав в новом массиве только нечетные элементы
// let arr = [1,2,3,4,5,6,7,8,9, 10];

// let result = arr.filter(el => el % 2 !== 0);
// console.log(result);// [ 1, 3, 5, 7, 9 ]

// -------------------------
// В магазине объявлена распродажа! Стоимость всех товаров внезапно стало меньше на 20%
// Измените массив таким бразом, чтобы значения всех чисел было меньше на 20%

// let prices = [1000,600,400,700,800]
// let newPrice = prices.map(el => el * .8)
// console.log(newPrice);

// Небольшое ДЗ
// Отфильтруйте массив, оставив только строковые элементы
let values = [false, 10, 'test', 'true', true, {name: 'alex'}]

 const strValues = values.filter(el => typeof(el) === "string")

console.log(strValues);


// Отсортируйте массив по длине строк (по возрастанию)
let chars = ['aaaaa', 'ddd','vvvv', 'llllll','hh']

const result = chars.map((el) => el.length).sort((a, b) => a - b);
console.log(result);
