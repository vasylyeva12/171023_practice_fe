// 1. Работаем с отложенным выполнением кода. Нужно вывести в консоль сообщение "Delayed message", через 5 секунд после запуска скрипта.

// function deletedMessage() {
//     console.log("Delayed message");
//   }
  
//   setTimeout(deletedMessage, 5000);

//   setTimeout(() => console.log("Delayed message"), 5000);

// 2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.
//  const timerInputEl = document.querySelector('#timerInput');
//  const timerBtnEl = document.querySelector('#timerStartBtn');
//  const timerDeletedBtnEl = document.querySelector('#timerDeletedBtn')

//  timerBtnEl.addEventListener('click', ()=> {
//     setTimeout(() => {
//         console.log('Deleted message');
//     },timerInputEl.value * 1000)
//  })


// 3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
// когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
// при нажатии на кнопку "Отмена", нам нужно отменить запланированное в setTimeout выполнение.
// если выполнение все же произошло (т.е. функциональность внутри setTimeout выполнилась), то кнопку "Отмена" скрываем.

// const timerInputEl = document.querySelector('#timerInput');
//  const timerBtnEl = document.querySelector('#timerStartBtn');
//  const timerDeletedBtnEl = document.querySelector('#timerDeletedBtn')

//  let timerId = null;

//  timerBtnEl.addEventListener('click', ()=> {
//     timerDeletedBtnEl.style.visibility = 'visible';
//     timerId = setTimeout(() => {
//                 console.log('Deleted message');
//                 timerDeletedBtnEl.style.visibility = 'hidden';
//            },timerInputEl.value * 1000)
//  });

//  timerDeletedBtnEl.addEventListener('click', () => {
//     !!timerId && clearTimeout(timerId);
//     timerDeletedBtnEl.style.visibility = 'hidden';
//  })
// 4. Работаем с другой асинхронной операцией. Наша задача - каждые 5 секунд выводить в консоль сообщение "Прошло 5 секунд".
// повторить с интервалом 2 секунды
let timerId = setInterval(() => console.log("Прошло 5 секунд"), 5000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 15000);
// 5. Добавляем на страницу текущие дату и время. Нужно добавить в разметку блок, в котором должны отображаться текущие дата и время, вида 01.01.2000 11:23:55. И нужно сделать так, чтобы дата и время отображались актуальные (т.е. обновлять текст ежесекундно).

const timerEl = document.querySelector('.carrent-datetime-text')

timerEl.innerText = new Date().toLocaleString()

setInterval(() => {
    timerEl.innerText = new Date().toLocaleString() 
}, 1000)


// 6. Реализуем простой секундомер. Нужно добавить в блок с id=simpleTimerContainer секундомер. В блоке будут:
// параграф, в котором будем выводить текущее время секундомера
// кнопка "Старт" - при нажатии запускаем секундомер
// кнопка "Сброс" - при нажатии сбрасываем секундомер.


// 7. Усложняем наш секундомер. Нам нужно добавить кнопки "Пауза", "Возобновить". Первая будет приостанавливать, но не сбрасывать секундомер, а вторая - возобновлять его работу.
// 8.Работаем с промисами. Задача - написать промис, который через 5 секунд будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.

const myPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      // говорим промису, что он должен быть успешно завершен,
      // с результатом 'Successfully finished!'
    //   resolve('Successfully finished!');

      reject("Something went wrong!")
    }, 5000);
  });
  
  myPromise.then( 
    (result) => {
    console.log(result);
  },
  (error)=> {
    console.log('Rejected', error);
  } );

// 9. Теперь задача через 5 секунд завершить промис "неуспехом", с текстом "Something went wrong!", и вывести результат в консоль.