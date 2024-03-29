// // Подопытные данные

// 1. Ставим обработчик на событие загрузки документа (DOMContentLoaded). Нужно вывести в консоль сообщение с текстом Hello World!.

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log("Hello World!", event);
// })


// 2. Работаем с кнопкой button#testButton. Добавляем на нее обработчик клика. Нужно чтобы при клике на кнопку, в консоль выводилось сообщение Clicked!.
// const testButton = document.querySelector("#testButton");
// testButton.addEventListener('click', () => {
//     console.log('Clicked!');
// })

// 3. Реализовать счетчик кликов на кнопку. Нужно чтобы при клике на кнопку, в консоль выводилось сообщение с количеством кликов по этой кнопке.
// let count = 0;
// testButton.addEventListener('click', () => {
//     count++
//     console.log('count: ', count );
// })

// 4. Работаем с текстовым полем input#testInput. Наша задача - протоколировать нажатие каждой кнопки (выводить в консоль ее код).
// нужен обработчик события нажатия кнопки на инпут. Событие - keypress
// в объекте события, есть свойство charCode - это код нажатой кнопки. Его нужно вывести в консоль.

 const testInput = document.querySelector("#testInput");
 testInput.addEventListener('keypress', (event) => {
    console.log(event.charCode);
 })


// 5. Пишем свою функцию валидации для инпута, назовем ее validateInput. Предположим, мы вводим количество единиц товара, и у нас разрешенные символы - только цифры. Наша задача - запретить ввод в текстовое поле не-цифровых символов.
// нужен обработчик на keypress текстового поля - это будет наша функция validateInput
// при обрабокте события, проверяем event.charCode.
// коды клавиш-цифр - от 48 до 57.
// здесь нам нужно ПРЕДОТВРАТИТЬ стандартное поведение (т.е. изменение текста инпута). В этом нам поможет preventDefault.

const validateInput = (event) => {
    if(!(event.charCode >= 48 && event.charCode <= 57)) {
        event.preventDefault()
    }  
  }
testInput.addEventListener('keypress', validateInput );        


// 6. Усложняем валидацию. Теперь мы хотим проверять правильность ввода при "уходе" фокуса из текстового поля. Что требуется:
// закомментировать добавление обработчика keypress на инпут
// добавить обработчик события утери фокуса (focusout) на наш инпут
// при обработке события, проверять текст инпута (через event.target.value)
// если текст не является числом (используем метод isNaN), то возвращаем фокус в наше текстовое поле (для этого, у DOM-элементов есть метод focus - то есть нам нужно вызвать этот метод у инпута).

testInput.addEventListener('blur', (event) => {
    const value = event.target.value;
    console.log(event.target);
    if(isNaN(value)) {
        event.target.focus();
    }
});


// 7. Добавляем в DOM чекбокс с текстом "Валидация". Задача чекбокса - включать/выключать валидацию. На событие change чекбокса добавляем обработчик. В обработчике, если чекбокс непустой - добавляем обработчик keypress на инпут, в качестве функции-обработчика используем validateInput. Если пустой - то этот обработчик удаляем.
const checkboxEl = document.querySelector('#checkbox');
checkboxEl.addEventListener('change', (event) => {
  if (event.target.checked) {
    testInput.addEventListener('keypress', validateInput);
  }
  else {
    testInput.removeEventListener('keypress', validateInput);
  }
});


// 8. Работаем со всплытием событий - добавляем подобие своей аналитики. Нам нужно отслеживать события клика по кнопкам, и ввода в текстовые поля, и записывать их в массив-хранилище (его предстоит создать). Первый элемент массива - количество кликов по кнопкам, второй - количество вводов в инпуты. Нужно написать такой блок кода, который будет отслеживать все клики по кнопкам и ввод в текстовые поля в документе, и при наступлении такого события он будет увеличивать соответствующий счетчик в массиве. В этом нам поможет то, что события всплывают - то есть нам нужно добавлять наш слушатель таких событий на уровень документа. При этом важно не считать события, которые не относятся к инпутам и кнопкам (надо проверять event.target).

// 9. Работаем с событиями мыши. Мы хотим добавить "счетчик времени", когда пользователь зажимает левую кнопку мыши (ЛКМ). То есть, когда пользователь нажимает ЛКМ, мы запускаем счетчик. Когда отпускает ЛКМ - останавливаем счетчик и выводим в консоль время в миллисекундах, пока ЛКМ была зажата. Как это сделать:
// нас интересуют события mousedown, mouseup.
// нам интересны все события в документе - а значит обработчик пишем на уровне документа
// сам "счетчик" имеет смысл объявить вне обработчиков (чтобы он был доступен обоим обработчикам)
// при событии mousedown фиксируем текущее время (Date.now()) в наш "счетчик"
// при событии mouseup, нам нужно определить текущее время (Date.now()), и вывести в консоль разницу между текущим временем, и временем события mousedown.

