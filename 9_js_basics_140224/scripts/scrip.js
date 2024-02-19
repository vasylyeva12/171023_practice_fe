//  1. Вывести в консоль текст Hello World!.

// console.log('Hello World');

// 2. Написать свою функцию customizedLog, которая принимает на вход аргумент (текст), и просто выводит его в консоль.

function customizedLog(text) {
//   console.log(text);  
}

customizedLog('Hello world')

// 3. Усложним функцию customizedLog - теперь она должна вывести в консоль текст в таком формате: "Logged by Dev: TEXT" - то есть добавить префикс "Logged by Dev". Пример вызова:
// customizedLog('first message'); // Logged by Dev: first message

function customizedLog(text) {
    //   console.log(`Logged by Dev: ${text}`);  
    }
    
    customizedLog('Hello world')

// 4. Напишем функцию add - она принимает 2 аргумента, и должна возвращать их сумму.  

function add(num1, num2) {
    return num1 + num2 
  }  
  let result = add(5, 5)
//   console.log(result); 

//  5. Напишем также функции для вычисления разности, произведения и частного (subtract, multiply, divide).
let subtract =(num1, num2) => num1 - num2;  
  
  let resultSubstract = subtract(10, 5);
//   console.log(resultSubstract);


let multiply =(num1, num2) => num1 * num2;  
  
  let resultMultiply = multiply(10, 4);
//   console.log(resultMultiply);

let divide =(num1, num2) => num1 / num2;  
  
  let resultDivide = divide(20, 4);
//   console.log(resultDivide);

//   6. Теперь поработаем с DOM. Добавим в нашу разметку два инпута, с идентификаторами firstNum, secondNum. И добавим кнопки Add, Subtract, Multiply, Divide.

const mainContainer = document.querySelector('.main')



const firstNum = document.createElement('input')

const secondNum = document.createElement('input')

firstNum.setAttribute('id','firstNum')
secondNum.setAttribute('id','secondNum')

const addButton = document.createElement('button')
const subtractButton = document.createElement('button')
const multiplyButton = document.createElement('button')
const divideButton = document.createElement('button')

addButton.innerText = 'Add Button';
subtractButton.innerText = 'Subtract Button';
multiplyButton.innerText = 'Multipliy Button';
divideButton.innerText = 'Divide Button';


// 7. Нужно добавить соответствующие обработчики на кнопки, и куда-то выводить результат. Создадим в разметке параграф с ИД=mathResult. В этом параграфе нам нужно будет выводить результат математической операции, в соответствии с нажатой кнопкой. То есть, сумму/разность/произведение/частное двух чисел, введенных в инпуты.


const mathResultTitle = document.createElement('p')
mathResultTitle.setAttribute('id', 'mathResult')
mainContainer.append(firstNum, secondNum, addButton,subtractButton, multiplyButton, divideButton, mathResultTitle)

// function addBtnClick() {
    
// }

// function add() {
//     let inputValue = +document.querySelector(".input-5").value; //преобразуем стороку в число
//     let inputValue6 = Number(document.querySelector(".input-6").value); //преобразуем стороку в число
    
//     let result = inputValue + inputValue6       
    

//     document.querySelector(".result-4").innerText = inputValue + " + " + inputValue6 + " = " + result;    
    
// }