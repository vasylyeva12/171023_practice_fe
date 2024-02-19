
// Задание 1 
// Реализуйте событие по нажатию на кнопку, которая изменить числовое значение count 
// на +1 у параграфа с калссом p_count

let incr_btn = document.querySelector('.incr');

incr_btn.onclick = () => {
    let p_counter = document.querySelector(".p__counter"); 
    // console.log(p_counter.innerText);

// 1.2 Создайте переменную, которая будет сохранять полученное текстовое сво-во и преобразует его в число

    let incr_result = +p_counter.innerText;
   
    //Выведите эту значение этой переменной в консоль   
    console.log(incr_result);

    // 1.3 Переопределите текстовое сво-во параграфа на значение result, увеличив его на 1 единицу 
    p_counter.innerText = incr_result + 1
    
}

let decr_btn = document.querySelector('.decr');
decr_btn.onclick = () => {
    let p_counter = document.querySelector('.p__counter');
    let decr_result = +p_counter.innerText;
   
    p_counter.innerText = decr_result - 1
}