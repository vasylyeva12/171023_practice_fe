// let counter = 0;

// function incrementFirst() {
//     counter++;
// }

// incrementFirst();
// console.log(counter);//1


// console.log(counter); //0

// function incrementSecond() {
//     let counter = 10;
//     counter++;
//     console.log(counter)
// }

//  incrementSecond(); //11
// console.log(counter);


// Еще пристрелка. Что выведет блок кода:
// let counterFirst = 0;
// let counterSecond = 5;

// function incrementer() {
//     return counterFirst + counterSecond;
// }

// console.log( incrementer() );//5

// counterFirst = 5;

// console.log( incrementer() );//10

// И завершающая на пристрелку: что выведет блок кода:
// let counterFirst = 0;
// let counterSecond = 5;

// function incrementer() {
//     let counterSecond = 10;
//     return counterFirst + counterSecond;
// }

// console.log( incrementer() ); //10

// counterFirst = 5;
// counterSecond = 20;

// console.log( incrementer() ); //15

// 3. В разметке (index.html), добавить инпут, в котором пользователь будет вводить свой стаж работы (в годах). Рядом разместить кнопку. Нужно написать функцию checkExperience, которая будет брать значение из инпута, и проверять: если стаж в диапазоне от 0 до 3 лет - нужно вывести сообщение "Вы приняты на должность Junior Developer!". Если от 3 до 7 лет - то сообщение "Вы приняты на должность Middle Developer!". Если стаж выше 7 лет - выводим сообщение "Сеньоры нам тоже нужны!".

let userInput = document.querySelector('.user__work-expirience')

function checkExperiense() {

    const userInputValue = +userInput.value;
    const expirienceBtnElem = document.querySelector(".expirience-btn")
    expirienceBtnElem.onclick = () => {
    
    if (userInputValue <= 3) {
        console.log("Вы приняты на должность Junior Developer!");
        
    }else if ( userInputValue > 7){
        console.log("Сеньоры нам тоже нужны!");       
    }else{
        console.log("Вы приняты на должность Junior Developer!");
    }
    }    
}

checkExperiense()


// 4. Добавим еще одну кнопку, "Надбавка". Напишем функцию calculateBonus. Она будет считать надбавку за стаж. Если стаж - 3 года, то надбавка - 10%. Если 5 - то 15%. Если 8 - то 20%, и если 10 - то 25%.

function calculateBonus() {

    
    const bonusBtnElem = document.querySelector(".bonus-btn")
    bonusBtnElem.onclick = () => {
        const userInputValue = +userInput.value;
  
    // if (userInputValue === 3) {
    //     console.log(userInputValue);
    //     // console.log("надбавка - 10%.");
        
    // }else if ( userInputValue === 5){
    //     console.log("надбавка - 15%.");       
    // }else if(userInputValue === 8){
    //     console.log("надбавка - 20%."); 
    // }else if(userInputValue === 10){
    //     console.log("надбавка - 25%."); 
    // }   
   

    switch (userInputValue) {
        case 3: { console.log('Bonus 10%'); break; }
        case 5: { console.log('Bonus 15%'); break; }
        case 8: { console.log('Bonus 20%'); break; }
        case 10: { console.log('Bonus 25%'); break; }
    }
}
}

calculateBonus()




// 5. Теперь реализуем задачу посложнее - сделаем функциональность автомата по продаже снеков. В разметку, добавим блок div, который будет содержать заголовок "Автомат по продаже всякой всячины", инпут (куда пользователь будет вводить номинал брошенной монеты), и кнопку "Купить". Наша задача - чтобы при нажатии на кнопку мы бы брали номинал монеты, добавляли его к текущему значению, и когда суммарный номинал будет больше или равен 150 - выводили бы сообщение "Получите Ваш товар". Нужно также при достижении номинала 150, сбрасывать суммарное значение в 0.
let deposite = 0
const coinInput = document.querySelector(".machineBlock")

function calculateMoney() {
    
    const buyBtnElem = document.querySelector(".buy-btn")
    buyBtnElem.onclick = () => {
        const coin = +coinInput.value;
        deposite += coin;
        if (deposite >= 150) {
            console.log('Get your product!');
            deposite = 0;
            
        }
  
    // if (userInputValue === 3) {
    //     console.log(userInputValue);
    //     // console.log("надбавка - 10%.");
        
    // }else if ( userInputValue === 5){
    //     console.log("надбавка - 15%.");       
    // }else if(userInputValue === 8){
    //     console.log("надбавка - 20%."); 
    // }else if(userInputValue === 10){
    //     console.log("надбавка - 25%."); 
    // }    

   
}
}

calculateBonus()


// 6. Усложним наш автомат. Он теперь должен принимать только монеты номиналом в 5, 25 и 50 копеек. То есть, нам нужно рассматривать, что введено в инпут. Если монета неизвестная - то суммарный номинал не увеличиваем. Подсказка: здесь нам возможно поможет switch.
// 7. И еще усложняем автомат. Предположим, что у него теперь есть 3 товара. Первый стоит 150 монет, второй - 225, и третий - 280. Нужно добавить в наш автомат логику: если мы бросили монетку, и общая сумма больше либо равна стоимости первого или второго товаров - то спросить у пользователя (prompt): "Вы хотите первый/второй товар?". Если пользователь ввел в промпт yes - то сбрасываем в 0 общую сумму и выводим сообщение "Получите Ваш первый/второй товар". Если общая сумма больше либо равна стоимости 3-го товара - сбрасываем ее в 0, и выводим сообщение "получите Ваш третий товар".