// let suricate = {
//     kind: 'Suricate',
//     age: 5,
//     color: 'Orange',
//     jump: function() {
//       console.log(this.kind + ' jumps!');
//     }
//   }
  
//   suricate.jump();
  
//   let jumpingCopy = suricate.jump;
//   jumpingCopy();

//   Что выведет фрагмент кода:
//   let timon = {
//     name: 'Timon',
//     kind: 'Suricate',
//     jump: function() {
//       console.log(this.kind + ' ' + this.name + ' jumps!');
//     }
//   }
  
//   let pumba = {
//     name: 'Pumba',
//     kind: 'Boar'
//   }
  
//   pumba.jump = timon.jump;
//   pumba.jump();


//   У нас в скрипте есть объект productInfo. Нужно добавить в этот объект метод describeSelf, который будет выводить данные о товаре, вида "Товар НАЗВАНИЕ, цена - ЦЕНА".

const productInfo = {
    name: 'Electric Saw',
    price: 250,
    category: 'Tools',
    describeSelf: function() {
        // console.log(`Товаp: ${this.name}  цена: ${this.price}`);
      }
    }
    
    // productInfo.describeSelf();

// Пишем функцию showProductInfo(). Задача функции - выводить в консоль информацию о товаре, вида: "Товар НАЗВАНИЕ, цена - ЦЕНА". Функция должна быть контексто-ориентированной, т.е. предполагается, что она будет вызвана в контексте объекта товара. Вызываем функцию showProductInfo() в контексте объекта из п.1. Для этого, нам понадобится явно привязать контекст.

function showProductInfo() {
    console.log(`Товаp: ${this.name}  цена: ${this.price}`);
    
}

showProductInfo.call(productInfo);
showProductInfo.apply(productInfo);
const bindedFunction = showProductInfo.bind(productInfo);
bindedFunction();

// Пишем функцию customMap, которая повторяет функциональность метода массивов map. Нам нужно, чтобы эта функция была бы контекстно-ориентированной, то есть работала с this, и ориентировалась бы на то, что в качестве this будет массив.

// Есть массив numbers. Мы хотим получить из массива numbers другой, новый массив newNumbers, элементы которого будут рассчитаны так: newNumbers[i] = numbers[i] * numbers[i]. То есть, массив квадратов. Сделать это вызовом метода customMap, в контексте массива numbers.

// const arr = [1, 2, 3]
// const mappingFunction = (el) => el * el;

// let result1 = arr.map( mappingFunction );
// console.log('embdedded map', result1);

// function customMap( mappingFunction) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//        result.push( mappingFunction(this[i]) ) 
        
//     }
//     return result;    
// }

// const result2 = customMap.call(arr, mappingFunction );
// console.log('Custom map', result2);


// Задача повышенной сложности. Есть объект weirdArray. У него есть свойство length, и ключи очень похожи на индексы массива. Но это не массив. Нужно применить к нему метод forEach, и вывести в консоль каждое его свойство, у которого ключ - число (т.е. 0, 1, 2, ...). Для этого, нам нужно привязать контекст явно к методу forEach, и вызвать его. Такой прием называется заимствованием методов.

const weirdArray = {
    length: 2,
    0: 'Saw',
    1: 'Hammer'
  };


  Array.prototype.forEach.call(weirdArray, el => console.log(el) )


// Теперь метод forEach нужно применить к объекту veryWeirdArray. Он тоже похож на массив, но у него нет свойства length. Нужно как-то применить к нему метод массива forEach. Здесь нам тоже нужна привязка объектов, но еще не повредит установить нашему объекту свойство length с правильным значением.
// Пишем простую функцию validateInput(errorText) валидации текстового поля (input). предполагается, что она будет вызываться в контексте DOM-элемента, HTMLInput. Нужно проверить:
// если у инпута есть атрибут required - то проверить что его значение непустое.
// если значение пустое - то добавить к инпуту класс error, и в текст записать сообщение errorText.
// если нет required - то вернуть true.
// Добавляем обработчик на кнопку Validate. При нажатии на кнопку, ищем все инпуты в документе, и вызываем функцию validateInput для каждого из них. Передать в нее текст "Заполните это поле!". Здесь нам тоже нужна привязка контекста, но уже с передачей аргументов в функцию, к которой мы привязываем контекст.
// Полезные ссылки по занятию:

  
 
  
  const veryWeirdArray = {
    0: 'Drill',
    1: 'Axe',
    2: 'Nails',
  };