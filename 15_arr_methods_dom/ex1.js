// 1. Получить сумму массива чисел. Решить задачу двумя способами: с использованием forEach, reduce.
// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// let sum = 0;
// let sumNumbers = numbers.forEach(num => sum += num;
// })
// console.log(sum);
// let reduceNumber = numbers.reduce((a, b)  => {
//     return a + b;
    
// }, 0);
// console.log(reduceNumber);

// 2. Из массива строк, получить суммарную длину всех строк. Использовать тот/те метод(ы) массивов, которые сочтете нужным.

// const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// let lenghtStr = strings.reduce((acc, val) => acc + val.length, 0)
// console.log(lenghtStr);

// let res = strings.join('').length;
// console.log(res);

// let result5 = 0;
// strings.forEach( str => result5 += str.length );
// console.log(result5);

// 3. Есть массив strangers с данными участников похода к Роковой Горе. Данные хранятся в виде массивов из 4 элементов: имя, основное оружие, раса, возраст. Нужно получить суммарный возраст участников похода.
// const strangers = [
//     ['Gimli', 'Axe', 'Dwarwes', 298],
//     ['Legolas', 'Longbow', 'Elves', 329 ],
//     ['Aragorn', 'Sword', 'People', 89],
//     ['Boromir', 'Sword', 'People', 35]
//   ];
//   let ageStrangers = strangers.reduce((acc, val) => acc + val[3], 0)
//   console.log(ageStrangers);



// 4. Из массива strangers, получить другой массив, который будет содержать вооружения участников похода.

// const strangers = [
//     ['Gimli', 'Axe', 'Dwarwes', 298],
//     ['Legolas', 'Longbow', 'Elves', 329 ],
//     ['Aragorn', 'Sword', 'People', 89],
//     ['Boromir', 'Sword', 'People', 35]
//   ];
// // let weapons  = strangers.map(el => el[1])
// let weapons = strangers.reduce((acc, val) => {
//      acc.push(val[1]);
//      return acc;
// }, []);
// console.log(weapons);

// 5. Из массива strangers, получить массив, который будет содержать 2 элемента. Первый элемент - количество участников-людей (раса People), второй элемент - количество участников других рас.

// const strangers = [
//         ['Gimli', 'Axe', 'Dwarwes', 298],
//         ['Legolas', 'Longbow', 'Elves', 329 ],
//         ['Aragorn', 'Sword', 'People', 89],
//         ['Boromir', 'Sword', 'People', 35]
//       ];


// 6. Теперь поработаем с DOM. Пристрелочная задача - вывести в консоль количество всех параграфов (p) на странице.
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs, paragraphs.length);


//7.  Создадим элемент. Нужно в div с классом strangersContainer добавить заголовок h3 с текстом "Участники похода к Роковой Горе". Нужно также присвоить этому элементу класс strangersHeader.

const strangersContainer = document.querySelector("#strangersContainer");
const titleElem = document.createElement('h3');
titleElem.innerText = "Участники похода к Роковой Горе";
strangersContainer.append(titleElem);

// 8. Теперь нужно пройтись по массиву strangers, и для каждого участника похода, создать нечто вроде карточки участника. Нужно создать div с классом strangerData, и в него поместить:
// заголовок h3 с именем участника (класс strangerName)
// параграф с описанием: оружие - название оружия, возраст.

const strangers = [
            ['Gimli', 'Axe', 'Dwarwes', 298],
            ['Legolas', 'Longbow', 'Elves', 329 ],
            ['Aragorn', 'Sword', 'People', 89],
            ['Boromir', 'Sword', 'People', 35]
          ];

strangers.forEach(() => {
    const divElem = document.createElement('div');
    const titleElem = document.createElement('div');
    const paragraphsElem = document.createElement('p');

    paragraphsElem.innerText = `название оружия: ${[2]}, возраст: ${[3]}`;


    divElem.classList.add("strangerData");
    titleElem.classList.add("strangerName");

    strangersContainer.append(divElem);
    divElem.append(titleElem, paragraphsElem)

})


// 9. Вспоминаем стили. Нужно разместить карточки участников в виде таблицы, 4 колонки. Выравнивание текста - по центру.
// 10. Добавим динамики. Нужно при создании карточки, также добавлять на карточку кнопку. И при нажатии на кнопку, выводить в консоль имя и расу участника похода.
// Подопытные данные

// Массив чисел (примитивы)
// const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
// const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// Массив массивов
// const strangers = [
//   ['Gimli', 'Axe', 'Dwarwes', 298],
//   ['Legolas', 'Longbow', 'Elves', 329 ],
//   ['Aragorn', 'Sword', 'People', 89],
//   ['Boromir', 'Sword', 'People', 35]
// ];