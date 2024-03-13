// 1. Пристрелочная. Написать блок кода, который в блоке .firstBlock, добавит в начало блока (ПЕРЕД существующими потомками), заголовк h2 с текстом First block header.

const blockFirstBlock = document.querySelector(".firstBlock");
const titleElem = document.createElement("h2");
titleElem.innerText = "First block header";
blockFirstBlock.prepend(titleElem);

// 2. В блоке .secondBlock, после третьего параграфа, добавить span с текстом Simple Span!.

// const blockSecondBlock = document.querySelector(".secondBlock > p:nth-of-type(3)");
// const spanElem = document.createElement("span");
// spanElem.innerText = "Simple Span!";
// blockSecondBlock.after(spanElem);


// 3. Еще пристрелочная. В блоке .secondBlock, после третьего потомка, добавить параграф с текстом This is added after the third descendant!.

const blockSecondBlock = document.querySelector(".secondBlock > *:nth-child(3)");
const textElem = document.createElement("p");
textElem.innerText = "This is added after the third descendant!";
blockSecondBlock.after(textElem);

// 4. Написать функцию addParagraph. Она должна принимать в аргументах селектор узла, куда нужно добавить параграф, и добавлять параграф с текстом SimpleText в конец этого узла (после уже существующих элементов).

// const addParagraph = (selector) =>{
// const mainBlock = document.querySelector(selector);
// const parElem = document.createElement("p");
// parElem.innerText = "Simple Text!";
// mainBlock.append(parElem);

// }
// addParagraph(".main");

// 5. Усложняем функцию addParagraph - теперь она должна принимать селектор узла, текст параграфа, и строку с названием, куда добавить - в начало (start), или в конец (end).
// addParagraph('.div.firstBlock', 'Dummy text', 'end'); //  в результате вызова, в конец div.firstBlock добавится параграф с текстом `Dummy text`.


const addParagraph = (selector, text, str) =>{
    const divFirstBlock = document.querySelector(selector);
    const parElem = document.createElement("p");
    parElem.innerText = text;
    if (str === "start") {
        divFirstBlock.prepend(parElem);        
    }else{
        divFirstBlock.append(parElem);
    }     
    
    }
    addParagraph('div.firstBlock', 'Dummy text', 'end');

// 6. Пишем функцию renderParticipant - она будет рисовать карточку участника похода к Роковой горе. Нужно создать div с классом strangerData, и в него поместить:
// заголовок h3 с именем участника (класс strangerName)
// параграф с описанием: оружие - название оружия, возраст.
// кнопка с текстом "Добавить".
// и добавить получившуюся карточку в div.strangersContainer.
// Теперь нужно пройтись по массиву strangers, и для каждого участника похода вызвать эту функцию. 

// Массив массивов
// const strangers = [
//     ['Gimli', 'Axe', 'Dwarwes', 298],
//     ['Legolas', 'Longbow', 'Elves', 329 ],
//     ['Aragorn', 'Sword', 'People', 89],
//     ['Boromir', 'Sword', 'People', 35]
//   ];
// const renderParticipant = (name, age,) =>{
// const strangersContainer = document.querySelector(".strangersContainer");
// const strangerDataElem = document.createElement("div");
// const strangerNameelem = document.createElement("h3")
// }

const strangers = [
    ['Gimli', 'Axe', 'Dwarwes', 298],
    ['Legolas', 'Longbow', 'Elves', 329 ],
    ['Aragorn', 'Sword', 'People', 89],
    ['Boromir', 'Sword', 'People', 35]
  ];
  
  const strangersContainer = document.querySelector(".strangersContainer");
  const renderParticipant = (part) => {
    
       
        const divElem = document.createElement('div');
        const titleElem = document.createElement('h3');
        const descriptionElem = document.createElement('p');
        const btnElem = document.createElement("button");
        titleElem.innerText = part[3];
        descriptionElem.innerText = `Название оружия: ${part[1]}, возраст: ${part[3]}`;
        btnElem.innerText = "Add"
                    
        divElem.classList.add('strangers_container');
        titleElem.classList.add('strangers_name')
        
        strangersContainer.append(divElem);
        divElem.append(titleElem, descriptionElem, btnElem)
        strangersContainer.append(divElem)
        
        
  }

  strangers.forEach((el) => renderParticipant(el))

  renderParticipant()




// 7. Дорабатываем функцию. Теперь, нужно при создании карточки, добавлять также обработчик клика на кнопку. При клике, нужно добавлять к списку классов div.strangerData класс isParticipant, если такого класса еще нет, и удалять его если он уже есть. То есть добавлять/удалять класс в зависимости от его отсутствия/наличия. 
// 8. Еще усложним обработчик клика. Нужно проверять, если у div.strangerData класс isParticipant есть - то нужно его удалять, и при этом кнопке ставить текст "Добавить". Иначе класс добавлять, а кнопке ставить текст "Убрать".



// let strangersContainer = document.querySelector('.strangersContainer')

// function renderParticipant(part) {
//   let strangerData = document.createElement('div')
//   strangerData.classList.add('strangerData')
//   let strangerName = document.createElement('h3');
//   strangerName.innerText = part[0];
//   strangerName.classList.add('strangerName');
//   let describtion = document.createElement('p');
//   describtion.innerText = `Оружие - ${part[1]}, возраст - ${part[3]}`
//   let btn = document.createElement('button');
//   btn.innerText = 'Добавить'

//   strangerData.append(strangerName, describtion, btn)
//   strangersContainer.append(strangerData)
// }
// strangers.forEach(participant => renderParticipant(participant))