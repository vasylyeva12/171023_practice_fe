
// Задача 1. Реализовать функцию getUsers() и вывести результат сетевого запроса в консоль
    http://212.8.247.94:3050/users
    
container = document.querySelector('#root');

const getUser = () => {
  fetch(`http://212.8.247.94:3050/users`)
    .then(res => res.json())
    .then(json => render(json))
}

getUser();

// async function getUsers(){
//     let url = 'http://212.8.247.94:3050/users'
//     let res = await fetch(uer)
//     let data = await res.json()
//     console.log(data);
// }

// Задача 2. Создайте функцию render(data), которая будет получать массив и 
//     циклочно для каждого элемента создавать div элемент с набором h2 и p.
//     Все карточки необходимо распоковать внутри div#root

//     Карточку обязательно застилиозовать на свое усмотрение

const render = array => {
    container.innerHTML = ''
    array.forEach (({ id, name, age, salary, job_id }) => {
    
    const cardElem = document.createElement('div');
    const idElem = document.createElement('p')
    const nameElem = document.createElement('h1');
    const ageElem = document.createElement('p');
    const salaryElem = document.createElement('p');
    const jobIdElem = document.createElement('p')


    cardElem.classList.add('card_container') 

    nameElem.innerText = `Name: ${name}`;
    idElem.innerText = `ID: ${id}`
    ageElem.innerText = `Age: ${age}`;
    salaryElem.innerText = `Salary: ${salary}`;
    jobIdElem.innerText = `Job_id: ${job_id}`;

    container.append(cardElem);
    cardElem.append(nameElem, idElem, ageElem, salaryElem, jobIdElem)
  })
}

// Задание 3. 
//     Реализуйте Post запрос внутри функции addUser(data), которая в качестве аргумента будет получать данные для запроса
//     Ссылка на запрос: 
//     http://212.8.247.94:3050/user/create

// headers: {
//     'Content-Type': 'application/json; charset=utf-8'
// },