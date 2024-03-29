// I. Циклы

// написать цикл, который 10 раз выведет в консоль "Простая итерация". Написать 3 разных варианта: с предусловием (while), с постусловием (do ... while), и с параметром (for).

// for (let i = 0; i < 10; i++) {
//     console.log(`${[i]} "Простая итерация"`);

// }

// let i = 0;
// while (i < 10) {
//   console.log(`${[i]} "Простая итерация"`);
//   i++;
// }

// let j = 0;
// do {
//     console.log(`${[j]} "Простая итерация"`);
//   j++;
// } while (j < 10);

// немного усложним задачу. Теперь в консоль нужно выводить номер итерации. Т.е. "простая итерация 0", "простая итерация 1", и т.д. Рекомендуется использовать цикл с параметром.

// for (let i = 0; i < 10; i++) {
//         console.log(`Простая итерация ${i}`);
//     }

// пишем блок кода, который посчитает сумму чисел от 0 до числа, которое ввел пользователь, и выведет результат в консоль. Т.е. например, пользователь ввел 5 - считаем 1 + 2 + 3 + 4 + 5 = 15.

// number = +prompt("Enter any number from 0")
// sum = (number) => {
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//         sum += i;
//     }
//     return sum
// }
// console.log(sum);

// let number = +prompt("Enter any number from 0")
// function sumNumber(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumNumber(number));

// пишем блок кода, который вычисляет факториал числа. Факториал - это произведение всех чисел от 1 до текущего числа. Т.е. факториал от 3 - это 1 * 2 * 3. Факториал от 5 - это 1 * 2 * 3 * 4 * 5. Наша задача - спросить у пользователя число методом prompt, запустить цикл (рекомендую с параметром), который посчитает факториал этого числа, и вывести в консоль результат.

// let num = +prompt("Enter any number from 0")
// function factorial(num) {
//   let result = 1;

//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(num));



// добавляем условие. Теперь, запускаем расчет факториала только если введенное число меньше 15. Если пользователь ввел число больше 15 - выводим сообщение "Это я считать не буду - тяжко."

// let num = +prompt("Enter any number from 0")
// function factorial(num) {
//     let result = 1;
//     if (num > 15) {
//         console.log("Это я считать не буду - тяжко.");        
//     }  else{
//         for (let i = 1; i <= num; i++) {
//             result *= i;
//           }
//           return result;
//     } 
// }
// console.log(factorial(num));


// II. Массивы.

// // Массив чисел (примитивы)
 

// 1. дан массив numbers. Посчитать сумму элементов массива, результат вывести в консоль.

// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];

// function arraySum(number){
// let sum = 0;
// for(let i = 0; i < number.length; i++){
//     sum += number[i];
//     }
// console.log(sum);
// }
// arraySum(numbers);


// 2. вывести в консоль только четные элементы массива numbers (те, которые делятся на 2 без остатка)

// for (let i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 2) === 0) {
//         console.log(numbers[i]);        
//     }   
// }

//  3. вывести в консоль только те элементы массива numbers, которые делятся без остатка на 2 и на 3.
// for (let i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 2) === 0 && (numbers[i] % 3) === 0) {
//         console.log(numbers[i]);        
//     }   
// }

// 4. добавить в массив numbers число 11 (в конец).

// numbers.push[11]

// console.log(numbers);

// 5. убрать из массива numbers число 11 (из конца).

// numbers.pop()
// console.log(numbers);

// 6. переместить первый элемент массива numbers в конец массива.

const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];
const i = 0; 
const item = numbers.splice(i, 1)[0]; 
numbers.splice(numbers.length, 1, item); 

console.log(numbers); 

// 7. вернуть элемент обратно.
// 8. получить массив, который состоит из "среза" массива numbers, начиная с 3-го элемента.
// 9. получить массив evenNumbers, который состоит только из четных элементов массива numbers.
// 10. вывести массив в консоль в обратном порядке.
// 11. получить массив twiceNumbers, который будет состоять из элементов массива numbers, помноженных на 2. То есть, первый элемент массива twiceNumbers равен 2 * первый элемент массива numbers, и т.д.
// 12. Задача "со звездочкой". Вывести в консоль тексты всех параграфов на странице. Для этого, нам нужно воспользоваться методом querySelectorAll, который нам возвращает объект, по которому можно пройтись циклом.


