// 1. У нас есть функция task1Demo. В ней есть 2 промиса, каждый из которых возвращает "часть от целого". Нужно дождаться выполнения обеих промисов, и вывести в консоль сумму их результатов.

// Для задачи №1
const task1Demo = () => {
    const firstPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            // console.log('First promise finished!')
            resolve(5)
        }, 2000);
    });
    const secondPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            // console.log('Second promise finished!')
            resolve(7)
        }, 3000);
    });
    // Здесь нужно дождаться выполнения обеих промисов и вывести сумму результатов в консоль
    Promise.all([firstPromise, secondPromise])
    .then((data) => {
        console.log('Result', (data[0] + data[1]));

    })
  }

//   task1Demo();  


// 2. Освежаем в памяти нештатные ситуации. Пишем функцию randomPromise. Она должна возвращать промис, который будет завершен успехом или неуспехом, в зависимости от случайного значения. То есть, в функции нужно взять случайное значение (Math.random()), и если его значение меньше 0.5 - завершать возвращаемый промис успехом, а иначе - завершать неуспехом.

function randomPromise() {
    const randomVal = Math.random();
    return new Promise((resolve, reject) => {
        if (randomVal < 0.5) {
            resolve (5)            
        }else{
            reject('Something went wrong!')
        }        
    });  
    
}
// randomPromise().then( res => console.log(res))



// 3. Работаем с нештатной ситуацией. У нас есть функция task3Demo, в ней также 2 промиса, но второй промис может быть завершен с ошибкой. Нужно построить такую логику, чтобы:
// - при успешном завершении обоих промисов, в консоли выводилась сумма результатов (как в предыдущей задаче)
//-  в случае ошибки, в консоль выводилось "something went wrong!", и причина ошибки (то, что передается в reject)
// - вне зависимости от результата, чтобы в консоль выводилось "All promises are finished now!".

// Для задачи №3
const task3Demo = () => {
    const firstPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('First promise finished!')
            resolve(5)
        }, 2000);
    });
    const secondPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            const rand = Math.random();
            if (rand < 0.5) {
                console.log('Second promise rejected!')
                reject(7);
            }
            else {
                console.log('Second promise finished!')
                resolve(7);
            }
        }, 3000);
    });
    Promise.all([firstPromise, secondPromise])
    .finally(() => {console.log("All promises are finished now!")})
    .then((data) => {
        console.log('Result', (data[0] + data[1]));

    })
    .catch(rejected => {
        console.log('Something went wrong!', rejected)
    });
};

// task3Demo();
    
    // Здесь нужно добавить логику в соответствии с постановкой задачи.
  
// 4. У нас есть функция fastAndFurious, которая готовит участников заезда. Она возвращает массив промисов, каждый из которых имитирует заезд на соревновании. Нужно определить победителя - то есть дождаться первого фиинишировавшего.

// Для задачи 4
const fastAndFurious = () => {
    const participants = [
     { name: 'Brian O`Conner', car: 'Nissan Skyline' },
     { name: 'Dominic Toretto', car: 'Dodge Charger'},
     { name: 'Vince', car: 'Nissan Maxima' }
    ];
    const results = [];
    for (let ptr of participants) {
     const rand = Math.random() * 1000;
     results.push( new Promise( resolve => {
       setTimeout( () => {
         resolve(`${ptr.name} on ${ptr.car}`);
       }, rand );
     }));
    }
    return results;
 }

 Promise.race(fastAndFurious())
 .then(data => {
    console.log(data);
 })

// 5. Пишем функцию добавления нового поста addPost. В аргументах она принимает:
// title - заголовок поста
// body - текст поста
// userId - ID пользователя, создавшего пост
// Она должна обратиться POST-запросом к адресу https://jsonplaceholder.typicode.com/posts, и в теле запроса передать объект со свойствами из аргументов. Объект нужно преобразовать в строку (JSON.stringify). 6. Пишем функцию удаления поста. Она должна принимать в аргументах ИД поста, и обращаться к адресу https://jsonplaceholder.typicode.com/posts/POST_ID, методом DELETE. В адресе нужно вместо POST_ID подставить ИД поста из аргумента. 7. Пишем свою функцию sendJsonRequest для отправки сетевого запроса (GET). Она должна принять в аргументе URL, к которому хотим обратиться, и вернуть ПРОМИС, который:

// в случае успеха, будет зарезолвлен преобразованными в JSON данными с бэка
// в случае неуспеха, будет вызван reject, с текстом ошибки.


  function addPost(title, body, userId) {
    const payload = JSON.stringify({title, body, userId});
    fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            body: payload
        }
        )
    .then(res => {
        if(res.ok) {
            return res.json();

        }else{
            throw new Error(res.statusText);
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  addPost('Title', 'Body', 1)

//   6. Пишем функцию удаления поста. Она должна принимать в аргументах ИД поста, и обращаться к адресу https://jsonplaceholder.typicode.com/posts/POST_ID, методом DELETE. В адресе нужно вместо POST_ID подставить ИД поста из аргумента. 

function deletePost(postId) {
    fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            method: 'DELETE'
        }
    )
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        })
        .then( data => console.log(data))
        .catch( error => console.log(error));
}

deletePost(1);

// 7. Пишем свою функцию sendJsonRequest для отправки сетевого запроса (GET). Она должна принять в аргументе URL, к которому хотим обратиться, и вернуть ПРОМИС, который:

// в случае успеха, будет зарезолвлен преобразованными в JSON данными с бэка
// в случае неуспеха, будет вызван reject, с текстом ошибки.
  
function sendJsonRequest(url) {
    // const result = await fetch(url);
    // const parsedResult = await result.json();
    // return parsedResult;
    return new Promise( (resolve, reject) => {
        fetch(url)
            .then( response => response.json() )
            .then( data => resolve(data) )
            .catch( error => {
                reject(error)
            });
    })
}

sendJsonRequest('https://jsonplacehosdsdlder.typicode.com/posts')
    .then( res => console.log(res))
    .catch( err => console.log('Something went wrong', err));
  
  
  