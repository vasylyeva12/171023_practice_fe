// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат согласно примеру ниже:

// Примечание: Использовать класс Object нельзя.

// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// const getKeys = (obj) => {
//     let arr = [];
//     for (let key in obj) {
//         arr.push(key)
     
//     }
//     return arr
// }
// console.log(getKeys(someObj)); 

// Результат: ['key1','key2','key3','key4']

// Task 2
// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат  согласно примеру:
// Пример:
// let someObj = {
//  key1: 'value1',
//  key2: 'value2',
//  key3: 'value3',
//  key4: 'value4',
// }
// Примечание: Использовать класс Object нельзя

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]

// const getEntries = (obj) => {
//     let arr = [];    
//     for (let key in obj) {
//         let elem = [key, obj[key]]
//         arr.push(elem)
//       }
//     return arr
// }
// console.log(getEntries(someObj)); 


// FOR IN - ЦИКЛ ИСПОЛЬЗУЕТСЯ ТОЛЬКО ДЛЯ ОБЪЕКТОВ
// FOR OF - ТОЛЬКО ДЛЯ МАССИВОВ


// let url ='https://jsonplaceholder.typicode.com/users';
// fetch(url)
// .then(res => res.json())
// .then(data => {
//     let clearName = data.map(el => el.name)
//     console.log(clearName);
// })

let url ='https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(res => res.json())
.then(data => {
    let clearedName = data.map(el => el.name)
    console.log(clearedName);
    return clearedName
})
.then(b => console.log(b.join(" ")));