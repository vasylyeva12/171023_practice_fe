// sort() // мутирует массив

// console.log('A' > 'a'); // false  ACKII code
// console.log('2' > '10'); //true

let a = [45, 23, 54, 3, 5, 6, 1, 27, 34, 27]
// a.sort((a,b) => console.log(a, b));// a -следующий элемент  b- текущий элемент 
// 23 45
// 54 23
// 3 54
// 5 3
// 6 5
// 1 6
// 27 1
// 34 27

// a.sort((a,b) => console.log(b, a));
// 45 23
// 23 54
// 54 3
// 3 5
// 5 6
// 6 1
// 1 27
// 27 34

// a.sort((a, b) => {
//     if(a > b) return 1
//     if(a < b) return -1
//     if (a === b) return 0
// })
// console.log(a); // [ 1,  3,  5,  6, 23,  27, 34, 45, 54]

// a.sort((a, b) => a - b)
// console.log(a); // сортировка по возрастанию

// a.sort((a, b) => b - a)
// console.log(a); // сортировка по убыванию

// ---------------- MAP --------------------------

// let number = [45, 23, 54, 3, 5, 6, 1, 27, 34, 27]

// const result = number.map(el => console.log(el + 100));

