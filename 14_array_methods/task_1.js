// 1. Из массива чисел numbers, получить массив квадратов этих чисел.
// Подопытные данные

// Массив чисел (примитивы)
// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// const newNumbers = numbers.map(el => el**2);
// console.log(newNumbers);

// Массив строк (примитивы)
// const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
// 2. Из массива строк, получить массив, который будет содержать длины этих строк.

// const newStrings = strings.map(el => el.length);
// console.log(newStrings);
// 3. Из массива чисел, получить новый массив, который содержит только четные элементы.
// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// const newNumbers = numbers.filter(el => (el % 2 === 0));
// console.log(newNumbers);


//4. Из массива строк, получить массив, который будет содержать только строки длиной больше 5 символов.
// const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// const fiveStrings = strings.filter(el => el.length > 5);
// console.log(fiveStrings);

// Написать функцию capitalizeWords. Она принимает массив строк, и должна вернуть строку, которая будет содержать эти строки, разделенные пробелом, и каждая первая буква - заглавная.
//  capitalizeLetters( ['this', 'is' 'array'] );
// This Is Array

// const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
// const capitalizeWords = (arr) => {
//    const capitalized = arr.map(el => el.charAt(0).toUpperCase() + el.slice(1))
//    console.log(capitalized);
//     const joined = capitalized.join(' ');
//     return joined;

// }

// console.log(capitalizeWords(strings));

// 5. Пишем функцию getRadius. Она принимает в аргументах радиус окружности, и должна вернуть площадь круга (Math.PI * radius ^ 2). По умолчанию, задать значение аргумента 0.

const getRadius = (r) => {
    let length = 2 * Math.PI * r;
    console.log(Math.round(length));
}

getRadius(7)


function getRadius(radius = 0) {
    
    return Math.PI * Math.pow(radius, 2);
  }  
getRadius(); 


// 6. Пишем функцию getCircleParam. Она принимает 2 аргумента: радиус окружности, и требуемую характеристику (prop). Если prop === 'length', вернуть длину окружности (2 * Math.PI * radius). Иначе - вернуть площадь круга. По умолчанию, значения аргументов - 0 и length.

function getCircleParam(radius = 0, prop = 'length') {
      if (prop === 'length') {
        return 2 * Math.PI * radius;
      }else{
        return Math.PI * Math.pow(radius, 2);
      }     
  }  
getCircleParam(); 


// 7. Пишем функцию createCollector. Это будет функция, которая создаст нам нечто вроде сборщика. Она должна вернуть другую функцию, которая будет принимать в качестве аругмента строку с названием предмета, который мы кладем в корзину. Нужно обеспечить сохранение массива с предметами (использовать замыкания).


function createCollector() {
    let storage = [];
    return function (productName) {
        
        storage.push(productName);
        console.log(storage);
    }    
}

const collector = createCollector();
collector('Diamond');
collector('Sapphire')

// 8. Пишем функцию countVovels. Она должна принимать строку, и возвращать количество гласных в этой строке. Гласные - a,o,e,i,u,y. Функция должна быть регистронезависимой.
// countVovels('timon'); // 2
// countVovels('PUMBA'); // 2

//  ВАРИАНТ 1
const countVovels = str => {
    let newVovels = str.match(/[aoeiuy]/gi)
    return newVovels ? newVovels.length : 0;
}

console.log(countVovels('timon'));
console.log(countVovels('PUMBA'));


//  ВАРИАНТ 2
function countVovels(str){
    const newVovels = ['a', 'o', 'e','i','u','y'];
    let vowelCount = 0;

    for (let char of str.toLowerCase()) {
        if (newVovels.includes(char)) {
            vowelCount++;
        }        
    }
    return vowelCount;
}


console.log(countVovels('timon'));
console.log(countVovels('PUMBA'));



// 9. Задача "со звездочкой". Не используя встроенные методы массивов, реализовать свой метод map.
// 10. Задача "со звездочкой". Не используя встроенные методы массивов, реализовать свой метод filter.