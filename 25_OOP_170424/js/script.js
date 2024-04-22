// 1. Работаем в предметной области интернет-магазина. Нам нужно создать класс для хранения информации о конкретном товаре. У товара есть наименование, категория, цена, описание. Это нужно отразить в создаваемом классе.
// 2. Написать конструктор для класса. Он ожидает на вход 4 аргумента (наименование, категорию, цену и описание товара), и должен инициализировать соответствующие поля класса переданными значениями.

class Product {
     static count = 0; 

     getCurrentCounter(){
        return Product.count;
     }

    constructor(name, category, price, description) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;

        Product.count += 1
    }

    

// 3. Работаем с методами. Добавим нашему товару функцию changePrice. Она должна менять цену нашего товара - прибавлять к ней переданное значение.
    changePrice(addPrice){
        this.price += addPrice;

// 5. Оптимизируем работу метода из п.3. Нужно при изменении цены проверять, что она не меньше 1. Если новая цена будет меньше 1 - то нужно выводить в консоль сообщение об этом, а цену товару ставить 1.
        if(this.price < 1) {
            console.log('To low price!');
            this.price = 1;
        }
    }

// 4. Добавляем еще метод, logProduct. Он должен выводить в консоль информацию о товаре, в виде строки типа "Товар ИМЯ, цена ЦЕНА".

    logProduct(){
        console.log(`Product ${this.name}, price ${this.price}`);
        console.log('Now counter is', Product.count);;
    }
}

const product = new Product('Toy', 'Boots', 50, 'Super boots');
const product1 = new Product('Toy', 'Boots', 50, 'Super boots');
const product2 = new Product('Toy', 'Boots', 50, 'Super boots');
product2.logProduct()
const product3 = new Product('Toy', 'Boots', 50, 'Super boots');
product.changePrice(5)
product.changePrice(-50);
product.logProduct();
console.log(product);
console.log(product1);
console.log(product2);
console.log(product3);
product2.logProduct()
console.log('Counter is', product.getCurrentCounter());



// 6. Оптимизируем конструктор. При создании товара, нужно проверять, что название, категория и цена - непустые, а цена - больше 1. Если что-то пустое или цена меньше 1 - выводим сообщение в консоль. Пустое наименование заполняем "Default Name", пустую категорию - "Default Category".

// 7. Создаем "внутренний счетчик" товаров. Нужно обеспечить, чтобы при создании объекта класса Product (то есть при вызове конструктора), мы увеличивали бы этот счетчик. Подсказка: это стоит сделать статическим свойством.

// 8. Создаем метод getCurrentCounter, который будет возвращать значение счетчика из предыдущей задачи.

// 9. Делаем класс для представления корзины товаров. У корзины должны быть такие свойства:
// список товаров (productsStorage), добавленных в корзину. Обязательно - с количеством товаров. Рекомендуется список хранить в виде обычного объекта, у которого в качестве ключей будут названия товаров, а в качестве значений - количество единиц данного товара в корзине. Пример:
// productsStorage: {
//    ball: 1,
//    gloves: 2,
//    // ...
// }
// общая стоимость всех товаров (totalPrice).
// 10. Добавляем возможность добавить товар в корзину. Создаем метод addProduct - добавление товара. Ожидает объект класса Product - добавляемый товар. При добавлении товара, нужно проверить в списке товаров в корзине (это свойство productsStorage) наличие товара с таким наименованием. Если есть - увеличить кол-во на 1. Если нет - добавить такое свойство в наш список, и поставить ему значение 1 - т.е. мы добавили товар в корзину. При этом, общую стоимость товаров в корзине увеличить на стоимость добавляемого товара.
// 11. Добавляем возможность удалять товары из корзины. Создаем метод dropProduct. Логика та же, как и в задаче 7, только количество уменьшаем на 1. Следить чтобы не было отрицательного кол-ва товаров!

// class Product {


//     myProperty = 0; // свойство класса, оно будет присуще ВСЕМ объектам этого класса
//     myMethod() { } // метод класса, присущ прототипу, доступен для всех объектов
  
//     static staticProp = 0; // статическое свойство, оно будет присуще КЛАССУ в целом, но НЕ каждому объекту
//     static staticMethod() {} // статический метод класса, присущ КЛАССУ в целом.
  
//     static count = 0;
  
//     constructor(name, category, price, description) {
//       this.name = name;
//       this.category = category;
//       this.price = price;
//       this.description = description;
  
//       Product.count += 1;
//     }
  
    
  
//     changePrice(addPrice) {
//       this.price += addPrice;
//       if (this.price < 1) {
//         console.log('Too low price!');
//         this.price = 1;
//       }
//     }
  
//     logProduct() {
//       console.log(`Product ${this.name}, price: ${this.price}`);
      
//     }
//   }