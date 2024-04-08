
// Подопытные данные
  
   
  
//   1. Что будет выведено в консоль при запуске фрагмента кода?
const firstObj = {
  name: 'Timon',
  color: 'Orange'
}

const secondObj = {
  name: 'Timon',
  color: 'Orange'
}

// console.log(firstObj === secondObj);
// 2. Что выведет код?
const pumba = {
  name: 'Pumba',
  color: 'Brown'
}

const pumbaClone = pumba;
pumbaClone.color = 'Black';

// console.log(pumba.color);
// 3. Что выведет код?
const simba = {
  name: 'Simba',
  color: 'Yellow'
}

const simbaClone = Object.assign( {}, simba );
simbaClone.color = 'Brown';

// console.log(simba.color);

// Задачи занятия
// 1. Пристрелочная. Вывести в консоль значение свойства salary объекта jobData.

const jobData = {
    position: 'Director',
    experience: 5,
    salary: 100500
  }

//   console.log(jobData.position, jobData.experience, jobData.salary);
// 2. Еще пристрелочная. Вывести в консоль улица адреса проживания у объекта complexObject.

const complexObject = {
    firstname: 'Name',
    lastname: 'LastName',
    age: 32,
    address: {
      city: 'The best City',
      street: 'The longest street',
      house: 5
    }
  };

//   console.log(complexObject.address.street);
// 3. Создать переменную addressClone, в которую нужно сделать ГЛУБОКОЕ КОПИРОВАНИЕ объекта адреса из complexObject.

const addressClone = Object.assign( {}, complexObject.address);
// console.log(addressClone);

// const addressClone = JSON.parse(JSON.stringify(complexObject.address));

// 4. Пишем функцию setObjectProperty, она принимает 3 аргумента: объект, ключ и значение. Нужно чтобы в результате работы функции у объекта добавлялось бы свойство с таким ключом, и значением. Пример работы:

function setObjectProperty(object, key, value) {
  obj[key] = value;
}
const obj = { name: 'Dummy'};

setObjectProperty(obj, 'foo', 'bar');
// console.log(obj); // { name: 'Dummy', foo: 'bar' };

// 5. Теперь поработаем с массивами объектов. У нас есть массив products. Нужно пройтись по массиву, и вывести в консоль наименование каждого товара (свойство name).

// Массив объектов


const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
  };
  const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
  };
  const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
  };
  const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
  };
  const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
  };
  const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
  };

  let products = [ball, gloves, shoes, hammer, saw, shark];
  
//   products.forEach(el => console.log(el.name));
     
  
// 6. Посчитаем суммарную цену всех товаров.

const sum = products.reduce((acc, el) => {
    let result = el.price + acc;
    return result
},0);

// console.log(sum);

//7.  Получить объект, в котором будут категории товаров, и количество товаров по категориям.
// const result = Object.assign({}, products.forEach(el => el.category))

const newProducts = products.reduce((acc, el) => {

    if (acc[el.category]) {
        acc[el.category] += 1 
    } else {
        acc[el.category] = 1  
    }
    
    return acc
    
},{});

//  console.log(newProducts);

//8. Пишем функцию addProduct. Она будет принимать 4 аргумента: название, категорию, ссылку на изображение, и цену товара. Задача функции - создать объект, и добавить его в массив товаров (products).

const addProduct = (name, category, imgRef, price) => {
    const product = {};
    product.name = name;
    product.category = category;
    product.img = imgRef;
    product.price = price;
    products.push(product)

}
// 9. Добавляем обработчик на клик по кнопке Add product. Он должен взять значения из инпутов, и вызвать нашу функцию.

// const btnElem = document.querySelector(".addProductBtn");
// const formElem = document.querySelector("#newProductForm")
// btnElem.addEventListener("click" , () =>  {
//     formElem

// })
// 10. Реализуем сохранение данных инпута. Для инпута #simpleInput, реализовать такую функциональность, что при каждом изменении инпута (событие change), нужно сохранять в localStorage значение этого инпута. Используем ключ inputData.

let simpleInput = document.querySelector("#simpleInputBlock");
simpleInput.addEventListener('keydown', (event) => {
    localStorage.setItem('inputData', event.target.value);
})
// 11. Теперь реализуем восстановление данных. На событие DOMContentLoaded, добавляем обработчик - он должен взять из ЛС значение по ключу inputData, и вставить в инпут #simpleInput.
// 12. Реализуем сохранение данных формы. Написать функцию preserveFormData. Она должна принимать в аргументах идентификатор узла, в котором есть инпуты. Ее задачи:
// брать значения из ВСЕХ инпутоы внутри узла
// собирать из них объект, где ключами будут идентификаторы инпутов, а значениями - значения инпутов
// сериализовывать объект
// сохранять его в localStorage. Ключом будет идентификатор узла (аргумент функции).
// 13. Пишем функцию восстановления данных инпутов restoreInputsData. Она также принимает в аргументах идентификатор узла, чьи инпуты мы восстанавливаем. Ее задача - извлечь из ЛС соответствующий объект с данными инпута, десериализовать, и распихать значения по соответствующим инпутам.