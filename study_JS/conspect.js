
                        /*       CКРИПТЫ И ВРЕМЯ ВЫПОЛНЕНИЯ
                        setTimeout, setInterval и requestAnimationFrame
                                    Объект Date 

setTimeout() - принимает 2 параметра,
1. - callback функцию которая будет вызываться через определённое время
2. - это количество миллисекунд через соклько мы хотим вызвать эту функцию

setTimeout(function(){
    console.log('Message for console');
}, 3000);


setInterval() - это функция будет вызывать функцию через какой-то интервал
параметры эта функция принимает очень схожие.
1. - callback функция
2. - это время в миллисекундах через которое будет запускаться эта функция
Это что каждые 2 секунды будет запускаться функция коллбек 
3. параметром setInterval принимет аргументы которые будут переданны в нашу функцию

const idInterval = setInterval(() => {
    console.log('Each 2sec start the function');
}, 2000);

clearInterval(idInterval); - метод очищает и останавливает функцию setInterval

таким образом мы запускали setInterval каждые 2 секунда, а в setTimeout заданили метод cleatInterval
который очищает setInterval и стопит его через 5 сек

let count = 0;
const idInterval = setInterval(() => {
    count++;
    console.log('Each 2sec start the function '+ count);
}, 2000);

setTimeout(function(){
    console.log('setInterbal stopped');
    clearInterval(idInterval);
}, 5000);

let getMessage = function(name) {
    console.log('Privet ' + name + '!');
}

let count = 0;
const idInterval = setInterval(getMessage, 2000, 'John');

setTimeout(getMessage, 5000, 'Sarah');

Для чего нужны clearInterval и cleatTimeout
что застопить функции , а то они и могут работать бесконечно.

Сделаем анимацию нашим картинками 

let skydiver = document.querySelector('.skydiver'), 
    falcon = document.querySelector('.falcon'),
    // счётчик начало анимации
    count = 0;

    // такой вызов setTimeout называется рекурсивный вызов setTimeout
const skydiverGoDown = function(){
    count++;
    falcon.style.left = count * 2 + 'px';
    skydiver.style.top = count + 'px';
    if (count < 300) {
        setTimeout(skydiverGoDown, 10);
    }
};

setTimeout(skydiverGoDown, 150);

рекурсивным способо мы решили задачку, 

так же это сделать можно с помощью setInterval;

let skydiver = document.querySelector('.skydiver'), 
    falcon = document.querySelector('.falcon'),
    // счётчик начало анимации
    count = 0;

const skydiverGoDown = function(){
    count++;
    if (count < 300) {
     falcon.style.left = count * 2 + 'px';
     skydiver.style.top = count + 'px';
    } else if (count < 500){
        falcon.style.left = count * 2 + 'px';
    } else{
        clearInterval(idInterval);
    }
};

let idInterval = setInterval(skydiverGoDown, 10);


///////// requestAnimationFrame /////////

Но к сожалению эти способы не принимают во внимание что происходит браузере в данный момент
страница может быть в неактивной вкладке браузера и анимация так и будет продолжатся , правда соверменные
браузера учли это, но к сожалению не все, и это остаёться минусом setIntervala и setTimeout
также анимация в js не синхронно работает с обновленрием экрана и при анимации большого количества одновременно
на нашей станице в нашем браузере необходимо использовать большие мощности компьютера для что мы синхронезирировать
анимацию в обновлением экрана. для того чтобы это всё испраитьь была создана функиция requestAnimationFrame
которая позволяет запускать анимации любых типов, будь DOM элементов Canvas, web jl.
также даёт возможность оптимизировать анимации и делать их более пдавным, также есть возможность связывать
несколько анимации в одно целое.
requestAnimationFrame похоже на setInterval и другое - также возвращает setId для то чтобы в будущем эту
анимацию остановить.

requestAnimationFrame если вы хотите углубиться в анимации то requestAnimationFrame стоит изучить более
подробно, особееноо полезно работая с canvasom или другими графическими анимациями.

Такой вид анимации браузер запустит в тот момент когда подсчитает это возможным выполнить эту анимацию

let skydiver = document.querySelector('.skydiver'), 
    falcon = document.querySelector('.falcon'),
    count = 0,
    flyInterval;
const flyAnimate = function(){
    flyInterval = requestAnimationFrame(flyAnimate);
    count++;
    if (count < 300) {
     falcon.style.left = count * 2 + 'px';
     skydiver.style.top = count + 'px';
    } else if (count < 500){
        falcon.style.left = count * 2 + 'px';
    } else{
        cancelAnimationFrame(flyInterval);
    }
    console.log('count: ', count);
};
let animate = false;
document.addEventListener('click', function(){
    if (animate){
        flyInterval = requestAnimationFrame(flyAnimate);
        animate = false;
    }else{
        animate = true;
        cancelAnimationFrame(flyInterval);
    }
    
});


В requestAnimationFrame нам часто необходимо знать, время анимации, время выполнение анимации и тд.
ив этом нам помощет обеькт date, мы можем вычислять текущее время, после этого будет происходить выполнение
функции или анимации и снова получать текущее время 
Для работы с датой и временем исползуют class date new Date()

Мы можем получить любой компонент даты с помощью следующих методов

console.log('yaer ' + date.getFullYear());
console.log('month ' + (date.getMonth() + 1));
console.log('day ' + date.getDate());
console.log('day of week ' + date.getDay());
console.log('hours ' + date.getHours());
console.log('minutes ' + date.getMinutes());
console.log('sec ' + date.getSeconds());
console.log('miliSec ' + date.getMilliseconds());

все эти методы возвращаеют значение текущей даты! 
Если мы хотим дату по гринвичу то указывает UTS  
console.log('yaer ' + date.getUTCFullYear());
console.log('month ' + (date.getUTCMonth() + 1));
console.log('day ' + date.getUTCDate());
console.log('day of week ' + date.getUTCDay());
console.log('hours ' + date.getUTCHours());
console.log('minutes ' + date.getUTCMinutes());
console.log('sec ' + date.getUTCSeconds());
console.log('miliSec ' + date.getUTCMilliseconds());

Помимо этого мы можем задавать компоненты даты, вместо get пишем set
date.setFullYear(2008, 2, 10); можем передать год, месяц, число
date.setHours(10, 30, 30, 300); - часы, минусы, секунды, милисекунды
date.getMinutes(30, 30, 300) - минуты, секунды, милисекунды
и так далее.
также все эти методы имеют UTC методе, нужно после set написать UTC
date.setUTCHours(10, 30, 30, 300);

Классная функция у date которая высчитывает корректную дату.
если указать больше число чем есть в месяце или в дате, то он их добавляет и коректирует,
т.е. указал 15 в графе месяца, он подсчитает 12 и добавит + 3 и выведет 3й месяц
Также мы можем расчитать какой число будет через 100 дней

let date = new Date();
date.setDate(date.getDate() + 100);

в js дата и время храниться в миллисекунда с начало 1 января 1970года , и это называеться timestepm
чтобы его получиться необходимо воспользоваться методом getTime()
на сегодняшний день с первого января прошло 1568210082518 миллисекунд

Если в параметрах Date ввести число, он воспринимает их как миллисекунды, и введя число getTime
покажет нам какая дата это была

let date = new Date(678994374654); - Mon Jul 08 1991 22:32:54 GMT+0500
если это число будет отрицательным до мы получим число - миннус указанное количество миллисекунд от 
1 января 1970года.
let date = new Date(-678994374654); - Sat Jun 26 1948 11:27:05 GMT+0500 

получить время в виде строки 
console.log(date.toTimeString()); 11:27:05 GMT+0500
console.log(date.toDateString()); Sat Jun 26 1948

Еслть методы которые будут отображать время и дату с учётом локализации 
console.log(date.toLocaleTimeString());       19:02:22
console.log(date.toLocaleDateString());       11.09.2019

Также мы можем указать первым параметром имеено локализацию которую хотим увидить
console.log(date.toLocaleTimeString('ru'));     19:04:30
console.log(date.toLocaleDateString('ru'));     11.09.2019

console.log(date.toLocaleTimeString('en'));     7:04:53 PM
console.log(date.toLocaleDateString('en'));     9/11/2019

console.log(date.toISOString());        2019-09-11T14:06:07.388Z

Можно применить метод substr и вывести только первые 10 символов 
console.log(date.toISOString().substr(0, 10));  2019-09-11

Метод now
console.log(Date.now()); покажет количество миллесекунд от 1970г до момента вызова функции
console.log(Date.now());           1568210920489

метод parse 
console.log(Date.parse('23 july 1991'));  console.log(Date.parse('10 march 1988'));


let date = new Date();

console.log(Date.parse('23-07-1991'));
*/

// console.log('yaer ' + date.getFullYear());
// console.log('month ' + (date.getMonth() + 1));
// console.log('day ' + date.getDate());
// console.log('day of week ' + date.getDay());
// console.log('hours ' + date.getHours());
// console.log('minutes ' + date.getMinutes());
// console.log('sec ' + date.getSeconds());
// console.log('miliSec ' + date.getMilliseconds());












/*
//// defineProperty ////
этот метод позваоляет обьявляеть свойство обьекта и настроить его поведенческие свойства

const mazda = {
  model: 3,
  year: 2006
};

mazda['color'] = 'blue';
mazda.color = 'blue';  эти методы делают тоже самое 
теперь обратимся через defineProperty
1 параметр - это обьект mazda
2 параметр это значение свойства
3 параметр указываем атрибуты этого свойства (это обьекты аргументов)

Object.defineProperty (mazda,'color', {
  value: 'blue',   - значение
                  - если все эти своёства true то это анологично как мы задовали свойство выше
  writable: true,   - нужен чтобы разрешать присваивать или изменять свойства 
  configurable: true, - нужен чтобы заперщать удаление свойства
  enumerable: true, - разрешает видеть или не видеть это свойство во время перебора цикла, напр for in
});
console.log(mazda);


const mazda = {
  model: 3,
  year: 2006
};

// захотелось запретить замену значений writable: false, то получим ошибку
Object.defineProperty (mazda,'color', {
  value: 'red',
  writable: false,
  configurable: true,
  enumerable: true,
});

mazda.color = 'blue';

console.log(mazda);


/////////// defineProperty ПОЗВОЛЯЕТ НАМ ДОБАЛЯТЬ ГЕТТЕРЫ И СЕТТЕРЫ /////////
функция Getter отдаёт значение 
функция Setter задаёт значение
давайте добавим новый гетер


const car = {
  brand: 'mazde',
  model: 3,
  year: 2006
};

car.color = 'blue';
// добави метод готорые будет выводит бренд авто и модель
Object.defineProperty (car,'fullTitle', {         // мы это свойство не вызывали, оно самовызывающие
  get: function(){                                // это getter, его позволяет задать метод define Property
    return this.brand + ' ' + this.model;
  },
  set: function(item){                           // set задаёт значение, наш setter должен принимать значние
    this.brand = item;
  }
});

// car.fullTitle = '123';   поменять значение  у fullTitile мы не можем мы получим ошибку, потому что это
// явялется getterom, fullTitle дадже не метод это свойство, свойство является getterom, a getter является 
// функцией. Getter отдаёт значение 

car.fullTitle = 'BMW';  Заметим что записываем в car.fullTitle занчение BMW  потом распечатываем его
а получаю BMW 3.

т.е. у нас перезаписался бренд, но выводиться через fullTitile то что находится в gettere!

console.log(car.fullTitle); - получили  BMW 3


Но теперь в ES6 можно прописывать getter и setter внутри объекта 

const car = {
  brand: 'mazda',
  model: 3,
  year: 2006,

  get: fullTitle() {
    return this.brand + ' ' + this.model;
  },

  set: fullTitle(value) {
    this.brand = value
  }
};

car.color = 'blue';

car.fullTitle = 'BMW'
console.log(car.fullTitle);

///////////// Классы ES6 ///////////
ключевое слове class создаёт class, т.е. функцию конструктор.
Class это функция которая создаёт обьект функцию конструктор
classi это шаблон по которому создаётся объект

можем обьявить конструктор - это момед создаётся в момент создания класса и подготваливает объект
для дальнейшего использования и мы можем указывать свойство обьетка


class Car {             совйство можно задать и так
  constructor(){
    this.brand = 'Toyota';
  }
}

const car1 = new Car();

console.log(car1);

class Car {             можно как переменная в конструкторе 
  constructor(brand){
    this.brand = brand;
  }
}

const car1 = new Car('Toyota');

console.log(car1);


Мы в classe часто пишем this это потому что нам необходимо указать, что свойства будут привязаны
к обьекту, это вообще очень важный пункт в ООП, с this нужно разобратся

class CarWashing {
  constructor(brand, model){
    this.brand = brand;
    this.model = model;
    this.washed = false;
  }

 washReady() {
   this.washed = true;
   this.reportSMS();
 }

 reportSMS(){
   console.log( this.brand, this.model, this.washed);
 }
}

const car1 = new CarWashing('Toyota', 'Prius');
car1.washReady();

////// также необходимо знать про статические методы и свойства  ///////
мы можем внутри класс их создавать, т.е. эти методы и свойства будут принадлежать самому
классу а не обьекту.

CarWashing.counter = 0;

 static noCarBaseModel() {
    return 'none';
  }

class CarWashing {
  constructor(brand, model = CarWashing.noCarBaseModel()){
    this.brand = brand;
    this.model = model;
    this.washed = false;
  }

  static noCarBaseModel() {  // статический метод, его обязательно надо будет вызывать в параметрах
    return 'none';           // статичексие методы нельзя вызвать из объекта нельзя написать car1.noCarBaseModel()
  }                          // будет ошибка - что не ялвялется функцией, также не могу вызвать и counter

 washReady() {
   this.washed = true;
   CarWashing.counter++;
   this.reportSMS();
 }

 reportSMS(){
   console.log( this.brand, this.model, this.washed);
 }
}

CarWashing.counter = 0;

const car1 = new CarWashing('Toyota', 'Prius');
const car2 = new CarWashing('Toyota', 'Prado');
const car3 = new CarWashing('Toyota', 'Wish');
const car4 = new CarWashing('Zaz');

car1.washReady();
car2.washReady();
car3.washReady();
car4.washReady();  // - Zaz none true

console.log(CarWashing);


Так-же в классы мы можем добавять getters and setters

class CarWashing {
  constructor(brand, model = CarWashing.noCarBaseModel(), services = []){
    this.brand = brand;
    this.model = model;
    this.washed = false;
    this._services = services;  // Это необходимо чтобы мы неимели доступ к этой перменной из вне
  }                             // и называется это Инкапсуляцией.
  // Разработчкику положено эти миханихм скрыть, чтобы пользователь не поломал систему. но что бы пользователь
  // имел возвожмость влиять на эти глобальные переменные созданны getters и setters
  static noCarBaseModel() {  // статический метод, его обязательно надо будет вызывать в параметрах
    return 'none';           // статичексие методы нельзя вызвать из объекта нельзя написать car1.noCarBaseModel()
  }                          // будет ошибка - что не ялвялется функцией, также не могу вызвать и counter

 washReady() {
   this.washed = true;
   CarWashing.counter++;
   this.reportSMS();
 }

 reportSMS(){
   console.log( this.brand, this.model, this.washed);
 }

 get services(){
  console.log(this._services);
  return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
 }

 set services(addServices){
   return this._services.push(addServices);
 }
}

CarWashing.counter = 0;

const car1 = new CarWashing('Toyota', 'Prius', ['black tires', 'wax']);
const car2 = new CarWashing('Toyota', 'Prado');
const car3 = new CarWashing('Toyota', 'Wish');
const car4 = new CarWashing('Zaz');

car1.services = 'Протирка стёкол';
car2.services = 'Протирка стёкол';

console.log(car1.services);
console.log(car2.services);

// если бы мы добавляли свойство на прямую в servises то перееписали бы уже имеющияся ['black tires', 'wax'])
// А использовав инкапсюляцию мы легко добавли новые свойства для автомобилей не затирая уже имеюищйся свойстава



///// НАСЛЕДОВАНИЕ ///// новый синтаксис

допустим мы захотим открыть вторую автомойку

class CarWashing {
  constructor(brand, model = CarWashing.noCarBaseModel(), services = []){
    this.brand = brand;
    this.model = model;
    this.washed = false;
    this._services = services;
  } 
  static noCarBaseModel() {
    return 'none';
  }

 washReady() {
   this.washed = true;
   CarWashing.counter++;
   this.reportSMS();
 }

 reportSMS(){
   console.log( this.brand, this.model, this.washed);
 }

 get services(){
  console.log(this._services);
  return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
 }

 set services(addServices){
   return this._services.push(addServices);
 }
}

class PassCar extends CarWashing{


}

// С помощью методе extends мы наследуем свойства и методы класс CarWashing к нашему класс PassCar
// и не нужно указывать прототипы и конструкторы, как мы указывали на предыдущих уроках
// Наследуемый класс, если не имеет конструктора то испоьзует контсруктор родителя, т.е. когда мы
// не указали конструктор, то мы использем полностью конструктор родителя
// constructor(brand, model = CarWashing.noCarBaseModel(), services = []){
//   this.brand = brand;
//   this.model = model;
//   this.washed = false;
//   this._services = services;
// } 

// CarWashing {brand: "Toyota", model: "Prius", washed: false, _services: Array(3)}brand: 
"Toyota"model: "Prius"washed: false_services: (3) ["black tires", "wax", "Протирка стёкол"]services: (...)__proto__: 
constructor: class 
CarWashingreportSMS: ƒ reportSMS()services: (...)washReady: ƒ washReady()get
 services: ƒ services()set services: ƒ services(addServices)__proto__: Object
// PassCar {brand: "Toyota", model: "Prado", washed: false, _services: Array(1)}

CarWashing.counter = 0;

const car1 = new CarWashing('Toyota', 'Prius', ['black tires', 'wax']);
const car2 = new PassCar('Toyota', 'Prado');

const car3 = new CarWashing('Toyota', 'Wish');
const car4 = new CarWashing('Zaz');

car1.services = 'Протирка стёкол';
car2.services = 'Протирка стёкол';
car1.washReady();
car2.washReady();

console.log(car1);
console.log(car2);


Для созданре конструктора у наследуемого класса. Используется ключевое слово super

class CarWashing {
  constructor(brand, model = CarWashing.noCarBaseModel(), services = []){
    this.brand = brand;
    this.model = model;
    this.washed = false;
    this._services = services;
  } 
  static noCarBaseModel() {
    return 'none';
  }
 washReady() {
   this.washed = true;
   CarWashing.counter++;
   this.reportSMS();
 }
 reportSMS(){
   console.log( this.brand, this.model, this.washed);
 }
 get services(){
  console.log(this._services);
  return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
 }
 set services(addServices){
   return this._services.push(addServices);
 }
}

// создание конструктора
// так мы наследуем конструктор у родителя и можем даже его расширять
class PassCar extends CarWashing{
 constructor(brand, model, services, passAmount = 5){
   super(brand, model, services);
   this.passAmount = passAmount;
 }

 // чтобы не повторять весь метод как у родителя, пишем super
//  washReady() {
//   this.washed = true;
//   CarWashing.counter++;
//   this.reportOffice();
// }
washReady() { // использовава super и указали метод, мы унаследовали все функции указаынне выше
  super.washReady(); // наследуем темод родителя
  this.reportOffice(); // здесь добавили свой метод
}

reportOffice(){
  console.log('Атомойка PassCar помыла машину');
}
}

CarWashing.counter = 0;

const car1 = new CarWashing('Toyota', 'Prius', ['black tires', 'wax']);
const car2 = new PassCar('Toyota', 'Prado', ['Мойка двигателя'], 7);

const car3 = new CarWashing('Toyota', 'Wish');
const car4 = new CarWashing('Zaz');

car1.services = 'Протирка стёкол';
car2.services = 'Протирка стёкол';
car1.washReady();
car2.washReady();

console.log(car1);
console.log(car2);

////////////// Коллекции Map и Set /////////////
Раньше мы могли хранить данные только в массивах и обьектах, но в ES6 появилась возможность хранить 
данные в коллекции set и map.

Так какие есть минусы у массивов и обьектов и у всех типов данных.
во первых они наследуют методы родителей, даже если они нам не нужны, они всё равно имеються - мы можем
расскрыть прототип и увидим все методы.

Второй минус обьекты могут содержать ключи только в виде строки! 
const myGarage = {
  whils: 4,     ---- могут содержать ключи только в виде строки! 
  fishStick: 5, ---- могут содержать ключи только в виде строки! 
};
синтаксис нам позволяет их записать без ковыечек, а так это стрроки 
const myGarage = {
  'whils': 4,
  'fishStick': 5,
};
т.е. ключь в объекте всегда имеет тип данных строку, он не может быть функциее массивом, обьектом и тд

Третий недостоток, что при переборе, порядок перебра будет не такой как мы его записали, он может отлечаться 
У обьекта нет свойства length, для мы обращаемся console.log(Object.keys(myGarage).length); и только так мы получим 2
такой себе способ и не очень удобный
////// MAP /////////
и как раз коллекция Map решает эти проблемы которые есть у нашго обьекта.
Map создаёться с помощью конструктора new Map, коллекция Map хранит пары ключь : занчение, но в отличии от
Map от объекта, ключем может быть любое произвольное занчение.
с помощью метода set мы можем добавлять в коллекцию данные

const map = new Map();
map.set('Shop', {apple: 'iPhone', model: 'X'});
map.set(163, 'Самарский регион');
map.set(null, 'Даже так');
map.set(NaN, 'WOW');
map.set(undefined, 'Не может быть');
const obj = {
  name: 'Evgen',
  age: 28
};
const func = () => {
  console.log('Hello');
};
map.set(obj, 123);
map.set(func, 'ухх');
console.log(map);

и как видите ключем может всё.


Получать данные с коллекции мы можем с помощью метода get 

console.log(map.get(func)); - мы получим ухх
console.log(map.get(undefined)); - мы получим Не может быть

метод has проверяет наличие ключа
console.log(map.has(undefined));  нам вернёт true 
console.log(map.has('Не может быть')); нам вернёт false

У коллекции есть метод size 
если указать console.log(map.size); то получим 7 - это количесвто наших элементов 

ещё мы можем передавать значение при создании коллекции прямо при вызове конструктора в виде массива
который будет содержать массив данных, первым будет идти ключ а вторым значение


const map = new Map([
  [2049, 'summer'],
  ['colt', 1845]
]);

map.set('Shop', {apple: 'iPhone', model: 'X'});
map.set(163, 'Самарский регион');
map.set(null, 'Даже так');
map.set(NaN, 'WOW');
map.set(undefined, 'Не может быть');
const obj = {
  name: 'Evgen',
  age: 28
};
const func = () => {
  console.log('Hello');
};
map.set(obj, 123);
map.set(func, 'ухх');

console.log(map.size);
console.log(map);

const collectMap = new Map([
  ['Toyota', 'Prado'],
  ['House', '156m2']
]);

/// метод delete удаляет элемент с коллекции
collectMap.delete('House');

// метод clear удаляет все элементы Map(0) {}
collectMap.clear();
console.log(collectMap);


Map является этрируемой структурой данных это значит что мы можем использоваться к нему спред операторы,
деструктурезацию, Array from
кстати Array from если использовать к нашему map

const arr = Array.from(map); 
console.log('arr: ', arr);   и мы получим большой большой массив который содержит множество массивов)

arr:  (9) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

0: (2) [2049, "summer"]
1: (2) ["colt", 1845]
2: (2) ["Shop", {…}]
3: (2) [163, "Самарский регион"]
4: (2) [null, "Даже так"]
5: (2) [NaN, "WOW"]
6: (2) [undefined, "Не может быть"]
7: (2) [{…}, 123]
8: (2) [ƒ, "ухх"]
length: 9

В коллекцию map сохраняется именно тот порядок элементов в котором они добавлялись
а обьект это не гарантирует

const map = new Map([
  [2049, 'summer'],
  ['colt', 1845]
]);

map.set('Shop', {apple: 'iPhone', model: 'X'});
map.set(163, 'Самарский регион');
map.set(null, 'Даже так');
map.set(NaN, 'WOW');
map.set(undefined, 'Не может быть');
const obj = {
  name: 'Evgen',
  age: 28
};
const func = () => {
  console.log('Hello');
};
map.set(obj, 123);
map.set(func, 'ухх');

console.log(map.size);
console.log(map);

const collectMap = new Map([
  ['Toyota', 'Prado'],
  ['House', '156m2']
]);

const arr = Array.from(map);
console.log('arr: ', arr);

map.forEach((value, key) => {
  console.log(`ключ: ${key} занчение: ${value}`);
});

for(let [key, value] of map){
  console.log(`ключ: ${key} занчение: ${value}`);
}

Когда вообще стоит использовать Map 
- когда у нас ключи разных типов 
- если ключи генерируются на этам выполнения кода (ключи динамические)
- если мы много работает с парамаи ключ: значение - удаление и добавление элементов
- если нам необходимо переберать ключ: значение 

////// SET /////////
Это коллекция нужна для хранения уникальных значений
также используем для вызова конструктор

const myLife = new Set();
myLife.add('ownHouse');
myLife.add('ToyotaPrado');
myLife.add('iPhoneX');

console.log(myLife); // мы получаем коллекцию из 3х элеметов

если мы добавим ещё 2 похожих элемента 

const myLife = new Set();
myLife.add('ownHouse');
myLife.add('ToyotaPrado');
myLife.add('iPhoneX');
myLife.add('iPhoneX');
myLife.add('iPhoneX');

console.log(myLife); // мы получили всё также 3 элемента! Дублированные элементы не добавляются!
// т.е. коллекция содрежит только уникальыне значения;

console.log(myLife.size); получим 3

Коллекция Set может хранить любые типы данных

удалять желементы мы можем с помощью метода delete 
mylife.delete('iPhoneX');

Очистить коллекцию от элементом можнео с помощью clear 
myLife.clear();

А ещё с помощью спред оператора мы можем превратить нашу коллекцию в массив
console.log([...myLife]); 

0: "ToyotaPrado"
1: "ownHouse"
2: "iPhoneX"
length: 3
__proto__: Array(0)

const cars = new Set(['Toyota', 'BMW', 'Mers']);
const cars2 = new Set(['Opel', 'NIVA', 'BMW']);

const allcars = new Set([...cars, ...cars2]);
console.log(allcars);

Коллекция содержит 6 элементов, а мы получили только 5 потому что коллекция содержит только уникальные 
значения. используя спред оператор переделываем в массив и получаем наши машиниы 

0: "Toyota"
1: "BMW"
2: "Mers"
3: "Opel"
4: "NIVA"
length: 5

Разработчики ecmo рекомендуют использовать set если вам необходимо
- часто проверять значение имеються ли эти элементы или нет это менее ресурсо затратно, нежели использовать
массив, потому что для перебора массива вам необходимо использовать циклы а они кушают память
*/






/* Обьявление переменных var, let, const.

VAR - когда мы обьявляем переменную через var она всплывает в самый верх, можно предствить что мы её
обьявили на какой-то нулевой строке но не присвоили значение, это будет аналогично если мы обьявим
переменную в первой строчке, но значение прислвою в четвёртой

var n;
console.log(n); - undefined

n = 5;
console.loh(n); - 5

ват так примерно и работате var,
следующая проблема var, что можно перменную переобпределиьть до её обьявления

console.log(n); 

n = 10

console.log(n); 

var n = 5;

console.loh(n); - 5

А ещё мы можем обьявить переменную много много раз и var обьявляется во всей облости видимости

for(var i = 0; i < 5; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000*i);
}

мы увидим 5, 5, 5, 5, 5.
Потому значение i после прохожденире 1 цикла будет 5 и после этого все сет таймоауты у нас только
отработают. Всё потому что var будет храниться в одной ячейке памяти и когда setTimeout будет 
обращаться в память за i она уже будет равняться = 5, даже не 4м а 5ти. А когда мы задаём
переменнуб через let то каждое значение i будет храниться отдельно в своей ячейке памяти.
Какждый раз i будет новая i.

for(let i = 0; i < 5; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000*i);
}

мы увидим 0, 1, 2, 3, 4.

let имеет облость видимости блок кода, то в каждой итерации цикла создаётся своя переменная в своём
блоке кода, в каждой итераци можно считать это новый блок кода и поэтому всё корректно работает, т.е все 
проблемы которые имеет var, испраляет обьявление переменной с помощью let или const - работают эти
перменные точно также как и var, но исправляют все выше указзанные проблемы.

если мы выведем в констоль перменную let но оьявим её позже, то получим в консоле ошибку

console.log(n);

let n = 5;

error

и нельзя обьявлять переменную несколько раз,

let n = 5;
let n = 10; - получим ошибку - всё тоже самое и с const 

Пременные обьявленный с помощью let их область видимости является блок кода ограниченный скобками и 
поэтому если ограничить фигурным скобками n, то в другой части кода мы её не надём.

Если мы обьявляем переменную через const - то это константа, постоянное значение, его мы поменять не можем

const name = 'Alex';
name = 'Wick'; то получим ошибку и так будет со всем простыми типами данных (числа, строки, булевые типы, null
undefined, символ) мы их поменяться не можем, но при работе с массивами, мы можем понять значение внутри 
массива, добавлять или удалять элемент

const names = ['Alex', 'John', 'Peter'];
names.push('Max');

но если мы захоти изменить массив или записать новый массив 
names = ['Kate', 'Mary'];
то получим ошибку, присвоить новый массив мы не сможем 

С обьектами принцип такойже, мы не можем присловить новый обьект но можем извенять совйства объекта

cosnt agents = {
  firstName: 'John',
  lastName: 'Wick',
  age: 46
};

Можем добавть свойство
agents.artist = 'Keanu Reebes';
и свойство мы добавли и также можем меня те свойства которые у нас уже есть
agents.firstName = 'Johny';

но обьект добавить мы не можем.

В практике нужно использовать const, но если значение переменной будет меняться, то использовать let
При получение элемента со стрaницы, функции, обьекты и массивы можно использовать const


// ШАБЛОННЫЙ СТРОКИ //

const str = "Двойные кавычки"
const str2 = 'Одинарные кавычки'
const str3 = `Обратные кавычки`


Раньше для переносов необходимо было сипользовать экранированную \n
const str = "Двойные \n кавычки"

а что видеть переносы приходилось
const str = "Двойные \n" +
            "кавычки"

const str3 = `Обратные кавычки`

const str = "<h1>Hello</h1> \n" +
            "<div>World</div>"

            для переноса в обратных страничка достаточно нажать энтер никаких + и экрарированных \n
const str3 = `<h1>Hello</h1>
<div>World</div>` и нет необходимости в конкантенации строк, просто переносим и всё.

Допусти у нас есть переменная Alex и захотис вставить её в верстку


const name = 'Alex';

const str3 = `<h1>Hello</h1>
<div>World</div>`;

Шаблонные строки позволяют использовать интерполяцию для этого используется ${...}
const name = 'Alex';

const str3 = `<h1>Hello</h1>
<div>${name}</div>`;

так же мы можем добавть и возрость, если мы захоти прибавит к возросту 1, прибавляем через + 1.
Шаблонные строки будут обходить метод конкантенации и мы не получим 311.

const name = 'Alex';
const age = 31;
const str3 = `<h1>Hello</h1>
<div>${name}</div>
<div>${age + 1}</div>`;

console.log('str3: ', str3);

В интерполяции плюсов масса, с помощью интерполяции всё намного проще.
ИНТЕРПОЛЯЦИЯ позволяет использовать любые вычесление, т.е. любое выражение которое возвращает значение, 
вы можете использовать вызов функции, которая что-то возвращает, можно использовать тернарный оператор, 
который будет возвращать значения, и также будет удобно использовать короткие стрелочные функции.

Фишка ES6 - это указания параметров по умолчанию

например в функции в принимаемых параметрах можно через равно указать параметры по умолчания
в нашем случае укажем в переменнюу window, так жу необходимо значеть, что все переменные которым
указываешь параметры по умолчания нужно поставить в конец всех переменных, т.е. в крайне правую чатсь

const careatHome = function(wall, doors, window = 1){
  console.log (`Дом имеет:
  стен: ${wall},
  двери: ${doors},
  окна: ${window}`);
};

careatHome(4,2);
Дом имеет:
  стен: 4,
  двери: 2,
  окна: 1

// СТРЕЛОЧНАЯ ФУНКЦИЯ //

обьявляем переменную чеерез ровно создаём переменные, дальше стрелка открывает фигурные скобки и это
и есть наше тело функции

const sum = (a, b) => {
  return a + b;
};

Одна из возможностей стрелочной функции, это если функция сразу возвращает значение без дополнительный вычеслений
то нам не обязательно использовать тело функции и ключевое слово return 
const sum = (a, b) => a + b;
console.log(sum(2, 3));

и даже если у нас параметр один, то мы можем и убрать круглые скобки и получим тот же результат
const sum = a => a + 3;
console.log(sum(2));

если функция возвращает обьект и чтобы всё корекно работало, нужно нашу скобки тело функции закрыть 
в другие скобкии ({тело 
  функции})
  и тогда мы получим наш обьект 
  const sum = (a, b) => ({
  a: a,
  b: b,
  sum: a + b
});
console.log(sum(2, 3));
  {a: 2, b: 3, sum: 5}

Стролочные функции удобно использоват в обработчике событий
к примеру у нас в вёрстке есть картинка 
мы её находим

const img = document.querySelector('img');
img.addEventListener('click', () => {
  console.log('hi');
});
получаем клик 
const img = document.querySelector('img');
img.addEventListener('click', () => {
  console.log(e.target);
});
получаем нашу картинку

А если у нас много картинок тогда собираем их все
const img = document.querySelectorAll('img');
и перебераем и используем стрелочную функцию
img.foreach((e)=>{
  console.log(e);
})

Второя интересная особенность стрелочной функции, что у них не контекста вызова 
так как ключевого слово this у стрелочной фукнции нет, она будет использовать this который у нас в
функции выше, в которой он обьявлен.
т.е. This будет использован в той функции в которой эта стрелочная функция была обьявлена

Нельзя создать конструктор с помощью стрелочной функции потому что у стрелочной функции нет 
контекста вызова и свойство prototype 


Фишки es6 и тд

rest параметр
иногда нам приходиться работать с функциями которые принимают неизвестное, множество параметров и для 
обработки прихрдилось использовать псевдо массив arguments
и приходилось его конвертировать в обычный массив
const arg = Array.prototype.slice.call(arguments); 
после этого мы получали массив в котором есть все методы который нам не обходимы 
function test(){

  const arg = Array.prototype.slice.call(arguments); 
  console.log(arguments);


}

test('red', 5, 12, 'black', [], true, 9);

в es6 добавили вишку, теперь мы можем принимать аргументы с помощью rest параметра
для этого ставиться 3 точки ... и имя параметра ...arr

function test(...arr){

  console.log(arr);
}

test('red', 5, 12, 'black', [], true, 9);

и получили обычый масиив из того, что передали

Если мы не указали что передаваь, то мы получим пустой массив
function test(...arr){

  console.log(arr);
}

test();


т,е. первые 3 параметра записали в переменные а всё остальное в массив с помощью рест(...) параметра 
function test(a, b, c, ...arr){

  console.log(a, b, c);
  console.log(arr);
}

test('red', 5, 12, 'black', [], true, 9);
мы получили red 5 12
            (4) ["black", Array(0), true, 9]

Имя у rest параметра может быть любое ...любоеИмя
и rest параметр всегда идёт последним.


следующее нововвидение это спред оператор
Мы имем массив arr и что передать перменные в функцию приходиться делать так

const arr = ['red', 5, 12];
function test(a, b, c){

  console.log(a, b, c);
}

test(arr[0], arr[1], arr[2]) - наша функция применила каждый элемент массива к принимающим параметрам 
а стала 'red',
b стала 15, 
с стала 12

если мы передадим наш массив таким образом 

test(arr) - то мы получи, что в 'a' у нас записался наш масиив, а в 'b' и 'c' у нас undefined.
но с помощью rest параметра мы можем передать наши элементы по ОДНОМУ а не массивом

const arr = ['red', 5, 12];

function test(a, b, c){

  console.log(a, b, c);
}
ставим ... и передаём наш массив
test(...arr);  - red 5 12

Таким образом мы можем передать несколько массивом или комбенировать с другими значениями
const arr = ['red', 5, 12];
const arr2 = ['black', true];

function test(a, b, c, d, e){

  console.log(a, b, c);
  console.log(d, e);
}
через запятую с помощтю рест парамера передаём ещё один массив
test(...arr, ...arr2);

const arr = ['red', 5, 12];
const arr2 = ['black', true];

function test(a, b, c, d, e, f){

  console.log(a, b, c);
  console.log(d, e, f);
}

test(...arr, 50, ...arr2);

И даже из нескольких массивов собирать один
const arr = ['red', 5, 12];
const arr2 = ['black', true];
const arr3 = [...arr, ...arr2];
console.log('arr3: ', arr3);

также можно компинировать дабавляя свои элементы
const arr = ['red', 5, 12];
const arr2 = ['black', true];
const arr3 = [1, ...arr, 55, ...arr2, 'hi']; и получим уже 8 элементов

Также можем преобразовать из коллекции в массив, разница в том что у nodeList ограниченное количество 
свойство нежели чем у массива.

const allImg = document.querySelectorAll('img');
console.log(allImg);
const newImg =[...allImg];
console.log(newImg);




Ещё крутое нововведение это деструктурорезация обьектов 

const car = {
  brand: 'toyota',
  model: 'prius',
  color: 'grey'
};

const {brand, model, color} = car;   -   это называется деструктурорезация обьекта, мы в фигурных скобках
указываем свойства которые хотим взять у нашего обьекта после знака ровно

console.log(brand, model, color);


Так же мы можем взять и ВЛОЖЕННОСТЬ совойства внутри обьекта 

const car = {
  brand: 'toyota',
  model: 'prius',
  options: {
    color: 'grey',
    abs: true,
  }
  
};

const {options:{color, abs}} = car;  

console.log(color, abs);

Если мы хотим изменить имя переменной если вас не устраивают то имя свойства из обьекта 
указать новую переменную мы можем так

const car = {
  brand: 'toyota',
  model: 'prius',
  options: {
    color: 'grey',
    abs: true,
  }
  
};

const {options:{color: carColor, abs: carAbs}} = car;  

console.log(carColor, carAbs);

Бывают случае если мы не знаем свойства в обьекте или нет в таком случае мы можем указать
значение по умолчанию
const car = {
  brand: 'toyota',
  model: 'prius',
  options: {
    color: 'grey',
    abs: true,
  }
  
};

const {brand, model = 6} = car;  выставляем занчение по умолчанию, и если этого свойства нет в обьекте 
model будет равно 6 (по умолчанию), а если есть, то останется 'prius'

console.log(brand, model);

так же мы можем сделать с вложенным свойством
const car = {
  brand: 'toyota',
  model: 'prius',
};

const {options: {color: 'red'}} = car;  

console.log(color); Так будет ошибка, потому что он захожит в обьект и ищет oprions, а там его нет.
тогда мы можем его создать с помощью значения по умолчанию

const car = {
  brand: 'toyota',
  model: 'prius',
};

const {options: {color = 'grey'} = {}} = car;  мы в обьекте car попытались найти options, мы его не нашли,
по умолчание сделали пустой обьект, в этом обьекте попытались найти свойство color - его не существует и 
сделали его по умолчанию red. и получили его значение

т.е при обращении где это свойство есть - мы получис его, а где его нет мы создадим его по умолчанию

console.log(color);

Где это применить

создаём функцию которая принимает обьект

const createCar = (car) => {
  console.log(`
  запущенно производство автомобиля ${car.brand} ${car.model} 
  цвет кузова: ${car.color} 
  цвет салон: ${car.colorInt} `);
};

createCar({
  brand: 'toyota',
  model: 'prius',
  color: 'grey',
  colorInt: 'black',
});
все работает, но если мы не дадим model, то получим undefined

тогда деструктурезируем наш обьект присваем функции принимающие параметры и устанавливаем значение по умолчанию
в случае если у обьекты не будет свойства, оно присвоиться по умолчаю.
так мы можем присвоить значени по умолчанию когда вообще не заведены данные 

const createCar = ({
  brand = 'bmw', 
  model = 6, 
  color = 'black', 
  colorInt = 'white'
} = {}) => {
  console.log(`
  запущенно производство автомобиля ${brand} ${model} 
  цвет кузова: ${color} 
  цвет салон: ${colorInt} `);
};

createCar();


const car = {
  brand: 'toyota',
  model: 'prius',
  options: {
    color: 'grey',
    abs: true,
  }
};

const {brand, ...options} = car;
console.log(options);

получаем

    {model: "prius", options: {…}}
    model: "prius"
    options:
    abs: true
    color: "grey"
    __proto__: Object
    __proto__: Object

Также можно деструктуризировать массивы с помощью квадратных скобок

const cars = ['toyota', 'mazda', 'audi','bmw', 'mers', 'Zil'];

const [a, b, c] = cars;

console.log(a);
console.log(b);
console.log(c); - получили первые 3 автомобиля из массива

чтобы пропустить элемент используем запятую
const [a,, b, c] = cars;

console.log(a);
console.log(b);
console.log(c);

const cars = ['toyota', 'mazda', 'audi','bmw', 'mers', 'Zil'];

const [,,a,, b, c] = cars;

console.log(a);
console.log(b);
console.log(c);

Если у нас многомерный массив

const cars = [['toyota', 'mazda'], ['audi','bmw', 'mers'], 'Zil'];

const [a, b, c] = cars;

console.log(a); // первый массив
console.log(b); // второй массив
console.log(c); // 3й элемент

так можно получить вложенные массивы повторяя их структура

const cars = [['toyota', 'mazda'], ['audi','mers'], 'Zil'];

const [[a, b], [c, d], e] = cars;

console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e); 

const cars = [['toyota', 'mazda'], ['audi','mers'], 'Zil'];

const [[a, b], [...c]] = cars;

console.log(a); 
console.log(b); 
console.log(c); 

toyota
 mazda
(2) ["audi", "mers"]

также мы можем одновременно приминять деструктуризировать обьектов и массивов
const carsModel = {
  brand: 'volvo',
  models: {
    sedan: ['s60', 's90'],
    cross: ['v60', 'v90']
  }
};

const {
  models: {
    sedan: [s1,s2], 
    cross: [c1, c2]}
  } = carsModel;

console.log(s1,s2,c1, c2); - s60 s90 v60 v90

новый синтаксис как из переменных сделать обьект и добавлять функцию

const car = 'bentley';
const cycle = 'bmx';
const bike = 'honda';

const transport = {
  car,
  cycle,
  bike,
  ride(){
    console.log('go ride');
  }
};

console.log('transport: ', transport);


const car = 'bentley';
const cycle = 'bmx';
const bike = 'honda';

const transport = {
  car,
  cycle,
  bike,
  ride: () => {           - стрелочная функция
    console.log('go ride');
  }
};
transport.ride();
console.log('transport: ', transport);


Нужно обновить одни данные в другой массив
и с помощью функции assign я могу в обьект transport записать полее актуальные данные 
функция assign принимает 2 параметра
1 - обьект первым параметрам и перезаписывает его совйства которые береёт
2 - вторым параметром из следующих обьектов 

const transport = {
  bike: "honda",
  car: "bentley",
  cycle: "bmx",
};

const newTrasport = {
  bike: "suzuki",
  quadBike: "polaris",
};

Object.assign(transport, newTrasport);

console.log('transport: ', transport);

так же сама функция возвращает все свойства которые мы можем записать в новый обьект 

const currentTransport = Object.assign({}, transport, newTrasport);


Новый метод делает всё тоже что и выше только удобнее
object spread property оператор

const transport = {
  bike: "honda",
  car: "bentley",
  cycle: "bmx",
};

const newTrasport = {
  bike: "suzuki",
  quadBike: "polaris",
};

const curTrans = {...transport, ...newTrasport};

console.log(curTrans);

также мы можем задавать новые значения и методы 

const ship = 'Photinia';

const curTrans = {...transport, ...newTrasport, ship};



const transport = {
  bike: "honda",
  car: "bentley",
  cycle: "bmx",
};

const newTrasport = {
  bike: "suzuki",
  quadBike: "polaris",
};

const ship = 'Photinia';

const curTrans = {
  ...transport, 
  ...newTrasport, 
  ship,
  ride(){
    console.log('go friends');
  }
};

console.log(curTrans);
curTrans.ride();

*/













// forEach(functin(){}, thisArg)
// либо вариант это до форИч привязать this к какой нибудь переменной  типа 
// const _this=this

// appData.getTargetMonth();
// appData.getInfoDeposit();
// appData.calcSavedMoney();
// appData.AddToUpperCaseForFirstChar();


// OOП //
// Обьектно-орентированное-программирование //
/* Принцып ооп обязывает программиста структурировать свой код, обьединение сущностей и методов в единное целое
javaScript является прототипно орентированным языком программирования.
в javaScript есть понятие прототип - скрытыя ссылка обьекта . Прототип это обьект, из которого текущий обьект
черпает недостоющие методы и свойства.
Если в текущем обьекте отсутствует какой-то свойство то JS по прототипу поднимается выше и будет искать
там это свойство.

                      Обьект car prototype              если мы обратимся к свойству
                        door; 4,                        model то получим prius.
                        turbocharting; false,           toyota.model; //'prius'
                        ....                            toyota.door; //4
Обьект toyota            /|\                             toyota.color; //undefined
будет у нас               |
наследоваться             |                             когда мы обращаемся к toyota.model 
от обьекта                |                             получаем prius 
car prototype             |                             когда обращаемся toyota.door
                      Обьект toyota                     то скрипт ищет его в обьекте (Обьект toyota)
                        model; prius,                   ненаходит и поднимается выше по прототипу
                        year; 2018,                     и находит его там и мы получаем 4.
                        turbocharting; true,            если мы ввели обьект color он обращается 
                                                        к обьекту (Обьект toyota) ненаходит, идёт выше
                                                        к Обьекту car prototype ненаходит и поднимается дальше
                                                        потому что у car prototype если прототип - ненаходит и там
                                                        и выдаёт нам undefined.
если мы вызовим свойсвтво toyota.turbocharting то первым делом будет искать в Обьекте toyota
найдёт его и там выдаст true. Так как он нашел это свойство в обьект toyota то выше он не пойдёт.
так мы находим встроенные методы toString, join, toUpperCase, length. но эти свойства 
и методы хранятся не в самом обьекте, а в цепочке прототипов между нашим обьектом и встроеным 
обьектом javaScript - это такое корневой обьект который трогать не стоит. Лучше создавать
собственный и встравить их в цепочку с помощью констркутора.


let arr = [1,2,3,4,5];
console.log('arr: ', arr); // в консоле видим что у arr есть ссылка на прототип,
свойство __proto__: Array(0)
разворачиваем его 
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
и видим много занкомых совйств и методов, всё это написали разрабочики javaScript'a.
console.log(arr.__proto__);
console.log(Array.prototype); - это функция конструктор. Это зарезервированная функция 
на основе которой создаются массивы, она при себе обьект прототип, функции конструктор Array
с помощьью обьекта prototype описывает наш массив, наделяет его методыми, функциями.
Если сравнить console.log(arr.__proto__ === Array.prototype); то мы получим true.
потому что протип у них один


let car = {
  doors: 4,
  turbochargint: false,
  ride: function(){
    console.log('Car is raiding');
  }
};

let newCar = Object.create(car); // мы создали новый обьект newCar на основе нашего обьекта car
если раскроем скобки то там пустo, но откроем __proto__ то увидим там свойства нашего car 
newCar:  {}
        __proto__: 
        doors: 4
        ride: ƒ ()
        arguments: 
        nullcaller: 
        nulllength: 0
        name: "ride"

добавляем новое свойство
newCar.model = 'toyota prius';

попробуем получить совйство doors и у нас это получилось, получили мы его от прототипа.
таким оброазом можно строиться целые цепочки прототипов, если мы на основе обьекта newCar
создадим новый обьект, то у этого нового обьета будет прототип newCar, а прототипа newCar 
будет прототип car - это и называется наследование.
и один момент, что прототип car не может использовать другие прототипы, потому что он не знает
сколько обьектов были созданы на его основе
console.log(newCar.doors); // 4

изучим методы 

метод hasOwnProperty возвращает булевое занчение и будет означат есть ли такой свойство 

у нашего обьекта, т.е принадлежит ли оно ему, сдесь и сейчас
console.log(newCar.hasOwnProperty('model')); // true 

этот метод не видит наследуемые свойства
console.log(newCar.hasOwnProperty('doors')); // false

но можно применить hasOwnProperty таким обрзаом чтобы применить свойства у нашего протипа

console.log(newCar.__proto__.hasOwnProperty('model')); // false
console.log(newCar.__proto__.hasOwnProperty('doors')); // true


ещё полезный метод isPrototypeOf и этот метод принимает один параметр - обьект 
в нашем случае вернуло true - этот метод показывает явялется ли обьект car прототипом 
для newCar.  Когда у нас длинная цепочка из множество обьектов, то нужно понимать, является 
ли обьект прототипом кокого-то обьекта 

console.log(car.isPrototypeOf(newCar));

// ФУНКЦИЯ - КОНСТРУКТОР //

ЭТО обычная функция которая имеет локальную переменную и параметры и тд, но создана она
для определённой цели, она используется как описания какой-то сущности, как инструкция у пазла.
Это функция вызывается когда мы начинаем собирать пазл, смотреть в инструкцию и собирать его,
конечный результат - это пазл ктороый создали это и будет порождением этой функции конструктора

Технически любая функция может быть использованна как конструктор, т.е. любую функцию можно
выделить при помощи оператора new и чтобы выделить, конструктор их называют с большой буквы.
Что делает оператор new - он порождает новый пустой обьект, после вызывает функцию Car,
протоип функции конструктора становиться прототипом нового обьекта, этот новосозданный обьект 
становится this для вызова конструктора, т.е. перенаправляе this на новосозданный обьект дальше
возвращает новый обьект и мы его присваиваем в переменную car1, т.е this будет указывать на car1

Привязка new. Если обьект создан через оператора new то this будет укаызывать на этот обьект.
this это ссылка на новосозданный обьект и обращаемся к его ключу model и если этого ключа нет в 
новом обьекте то мы его создаём и присваиваем занчение 'Mazda' дальше создаём переменную и 
присваиваем этот обьект к перменной car1 


function Car(){
  this.model = 'Mazda';
}

let car1 = new Car();
console.log('car1: ', car1);

let carTest = {
  model: 'Mazda'
};

console.log('carTest: ', carTest);

car1:  Car {model: "Mazda"}

carTest:  {model: "Mazda"}  нет метки Car 

если раскрыть их и их протипы 

car1:  
Car {model: "Mazda"}
model: "Mazda"
__proto__:         -------------
constructor: ƒ Car()           | -- у обьекта который мы создали с помощью конструктора имеется
__proto__: Object  -------------    дополнительный прототип так сказать прослойка, между 
                                    прототипом object и нашим обьектом. 
раскрыв object мы там увидим всё то что есть в обьектс carTest. А простолойка нужна для того, что
бы мы когли добавлять туда наши методы


                                  мы видем что прототимы отлечаются 
carTest:  
{model: "Mazda"}
model: "Mazda"
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()


Функцию car выведим в консоль как обьект припомощи console.dir

ƒ Car()
    arguments: null
    caller: null
    length: 0
    name: "Car"
    prototype: {constructor: ƒ}   <-- и видем что функция имеет прототип и его можно заполнить своими методами
    __proto__: ƒ ()

обращемся к нашей функции Car к её prototype и добавим новый метод это функция ride

Car.prototype.ride = function(){
  console.log('Ехать');
}

смотрим в консоль console.dir(Car);
ƒ Car()
    arguments: null
    caller: null
    length: 0
    name: "Car"
    prototype: {ride: ƒ, constructor: ƒ}  <-- и в прототипе появилась функция ride 
    __proto__: ƒ ()


let car1 = new Car(); - у обьекта пораждённой этой функции, так в прототипе появился ride 
console.log('car1: ', car1);
car1: Car {model: "Mazda"}
      model: "Mazda"
      __proto__:
      ride: ƒ ()   <--- появился ride 
      constructor: ƒ Car()
      __proto__: Object

и теперь я могу вызвать этот метод
car1.ride();  - Ехать


function Car(model, color) {
  this.model = model;
  this.color = color;
}

let car1 = new Car('Mazda', 'Red'); 

console.log('car1: ', car1);
и мы получили наш обьект 
car1:  
    Car {model: "Mazda", color: "Red"}
    color: "Red"
    model: "Mazda"


function Car(model, color) {
  this.model = model;
  this.color = color;
}

let car1 = new Car('Mazda', 'Red'); 
let car2 = new Car('Vaz', 'black');
console.log(car1.ride === car2.ride); - true 

Car.prototype.ride = function(){
  console.log('Ехать');
};
console.dir(Car);

car1.ride();

Вернёмся к классам в JS и понятию ООП - это подход к решению задачи манипулирую обьектами
т.е. задача разбирается на обьект и при помощи них решается, а класс это важная еденица ООП
Разберёмся с понятие класса.
Class - это обстрактная еденица описывающая обьект.
Например автомобиль, если обстрагированться от машин которые мы знаем, типо bmv mercedes и тд,
возьмём понятие атомобиль, мы значем, что у него 4 колеса, мотор, руль педали и это и будет наш
обстрактный класс и на основе его мы можем создать любою модель,но это уже будет настоящее 
существующее еденица, обьект.
Обьект - это второе важное понятие в ООП. Любой атвомобиль созданный на основе класс, это и будет
объетк. В ООП также любой объект должен быть создан на основе класса, должен существовать класс, 
который его диклариурет, который описывает его структуру, свойство, поведение, но он не 
создаёт объект, а объект это структура которое имеет свойство и методы, который были описаны 
в классе, на основе которых был и создан обьект.

javaScript использует ООП как архитектуру, не все задач решаются на с помощью ООП

В эта функция конструктор по сути своей является классом, потому что его не существуте как обьект
какой-то автомобиль, какой-то фирмы, какая-то модель. просто описанно обстрактно

function Car(brand, model){
  this.brand = brand;
  this.model = model;
}

Но в бущем мы определяем экземпляр класса

let car1 = new Car('toyota', 'prius');
let car2 = new Car('BMW', 'm5');       и это уже будут обьекты и они созданы с помощью конструктра 
на основе класса Car 

Добави в конструктор options

function Car(brand, model, options){
  this.brand = brand;
  this.model = model;
  options = options || {};
  this.color = options.color;
  this.transmission = options.transmission;

}

let car1 = new Car('toyota', 'prius', {color: 'Red'});
let car2 = new Car('BMW', 'm5', {ABS: true});
console.log('car1: ', car1);
console.log('car2: ', car2);

car1:  
    Car {brand: "toyota", model: "prius", color: "Red", transmission: undefined}
    brand: "toyota"
    color: "Red"
    model: "prius"
    transmission: undefined
    __proto__: Object

car2:  
    Car {brand: "BMW", model: "m5", color: undefined, transmission: undefined}
    brand: "BMW"
    color: undefined
    model: "m5"
    transmission: undefined
    __proto__: Object

    мы видем что, свойства колор у car 1 есть у car 2 нет и transmissio не определена, но и 
    мы его не обозначили как и цвет у car2, а вот свойства ABS нет потому что она не была
    задиклорированна в конструкторе класса.

    Ещё мы можем декларировать поведение наших автомобилей

    Car.prototype.ride = function(){
  console.log(this.brand + ' ' + this.model + ' ' + 'поехала!');

car1.ride();
car2.ride();

также это функция была добавлена в прототип car и её можно вызвать
car1:  Car {brand: "toyota", model: "prius", color: "Red", transmission: undefined}
car2:  Car {brand: "BMW", model: "m5", color: undefined, transmission: undefined}
toyota prius поехала!
BMW m5 поехала!

Все обьекты созданные на основе класса уже будут иметь уникальные описание свойств брейн и модель,
а поведение которое описсано в прототипе для них общее.

И получаеться у нас система наследования - наш класс декларирует методы которые будут у всех
экземпляров этого класса, мы можем проверить является ли прототип car прототипом обьекта car1

вызываем метод isPrototypeOf
береём нашу функцию Car обращаемя к её prototype и измользуем метод isPrototypeOf а в параметрах
наш обьект car1
console.log(Car.prototype.isPrototypeOf(car1)); получаем true 

так же мы можем использовать оператор instanceof от делает тоже самое что и isPrototypeOf
console.log(car2 instanceof Car); получаем true 



На основе класса Car мы можем наследовать новые классы.
Насследование - это отношение между классами, при котором класс использует структуру и поведение 
другого класса или многих других


function Car(countryBuild, options){
  this.countryBuild = countryBuild;
  options = options || {};
  this.color = options.color;
  this.transmission = options.transmission;
}

Car.prototype.ride = function(){
  console.log(this.brand + ' ' + this.model + ' ' + 'поехала!');
};

function Audi(countryBuild, options, model, type){
  this.brand = 'Audi';
  Car.apply(this, arguments);
  this.model = model;
  this.type = type;
}

Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;

let carA = new Audi('germany', {color: 'black', transmission: 'am'}, 'q7', 'crossover' );
console.log('car: ', carA); // теперь проверим от каких классов наследуется наш автомобиль

console.log(carA instanceof Audi);
console.log(carA instanceof Car);

carA.ride();

//Так работаю встроенные объекты в javaScript
// Класс Object стоит на вершине всех классов
console.log(new Object());
console.log(carA instanceof Object);

*/








// КОНТЕКСТ ВЫЗОВА THIS //
/*
4 - ОСНОВНЫХ ПРАВИЛА THIS 
1. Привязка по умолчанию foo();     this ссылаеться на глобальный обьект window
2. Не явлная привязка obj.foo();      this будет ссылаться на обьект obj
3. Явная привязка apply, call, bind
4. Привязка new. Если обьект создан через оператора new то this будет укаызывать на этот обьект */


/* Вообще this это ссылка на какой-то обьект, если ввести его в консоль
console.log(this);  то получим глобальные обьект 
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …} 

на запомнть что this всегда ссылкается на какой-то обьект, а вот на какой обьект мы сейчас разбереёмся

Во время вызова функции создаётся запись актевации которая содержит информацию откуда вызвана функция, 
как вызвана функция, какие параметры и тд и отдно из свойств является ссылка this 
чтобы понять this нужно понять 4 правила(поведение) это - 
callstack - стек вызова функций и callsite (это место вызова функции)

Что такое CallSite.


function one(){
  console.log('one');
  two();
}
function two(){
  console.log('two');
  three();
}
function three(){
  console.log('three');
}

one(); // это место где была вызвана функция!. если бы она вызывалась в другом месте или ещё где. Для каждого
вызвова был бы определён свой this, т.е он бы прощитался по новой для каждогов вызова.


callStack - работает так 

function one(){
  console.log('one');
  two();
}
function two(){
  console.log('two');
  three();
}
function three(){
  console.log('three');
}
У нас есть три функции 
one two three

во время выполнении функции one стек вызова будет выглядить из одной фукнкции one, но она вызвает функцию two,
а two стек выполнения функции two будет состоять из функции one и two, следуом two вызывает функцию three. 
стек функции three будет состоять из функции one, two, three, затем three первая завершает работу, после
завершает работу two и наконе one

              three
               |
        two   two   two
        |
  one   one   one   one   one
   |
 global


Теперь поговорим о 4х правилах

ПРАВИЛО 1 - ПРИВЯЗКА ПО УМОЛЧАНИЮ 
это когда мы пишем имя функции и ставим скобочки

function test(){
   console.log('hello');
}

test() в консоле получим hello.   this всегда существует внутри функции и определяеться внутри функции и зависит
от того, где и как функция вызывается. Функция test обладает контекстом вызова функции test и он описываеться в this
любая функция вызывается всегда внутри какого-то контекста и контекст может быть исклбчительно только обьектом.
выведем в консоль this 

В данном случает this смотрит на глобальный обьект window 
var a = 10;
console.log('hello', this); - hello

если зададим глобальную переменную то можем обратить через this к этой переменной 
var a = 10;
console.log('hello', this.a); - hello 10

var это глобальная перменная и рекомендуется использовать let и const 
в таком случае мы получим 
let a = 10;
console.log('hello', this.a); - hello undefined

когда мы создаём элемент через var она записываеттся в глобальный обьект window

Как понять что this ссылается на глобальный обьект, если функция вызывается без точки, т.е. ни как метод, то this
будем window, даже если внутри функции мы задали функцию, и во второй функции вызвали this, то this всё равно
ссылается на глобальный обьект window  (Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …})
т.е this ни как не связан с областями видимости.

Всегда когда функцию вызывают без точки, без привязка к обьекту то this это window (если ему не изменили контекст)
var a = 10;
function test(){
  console.log('hello', this.a);
  function test2(){
    console.log(this);
  }
  test2();
}
test();

используя use strict у нас выйдет ошибка с this 
но так как все функции записаны уже в глобальный обьект через обьект window мы можем запустить функцию

var a = 10;
function test(){
  console.log('hello', this.a);
  function test2(){
    console.log(this);
  }
  test2();
}
window.test();

ПРАВИЛО 2 - НЕЯВНАЯ ПРИВЯЗКА 

это когда мы указываем обьект и его метод 
window.test();

let obj = {
  x:10,
  y:15,
  test: function(){
    console.log('this: ', this);
  }
};
// нам надо обратиться к обьекту и через точку к методу test 
// и мы видем что this в функции test ссылается на обьект obj в котором она и описана 
obj.test();
// не важно где она описана и как, главное где она вызывается, важен сам момент вызова 

создалим новую функцию - внешнюю и её передадим в обьект, то при вызове метода тест this будет именно этот 
обьект obj  'this {x: 10, y: 15, test: ƒ}'

let obj = {
  x:10,
  y:15,
  test: newTest
};
// мы видем что при вызове метода newTest то this и будет э
function newTest(){
  console.log('this', this)
}
obj.test();

window.newTest();
но если мы вызовим функцию отдельно то this это будет глобальный обьект
this {x: 10, y: 15, test: ƒ}
script.js:391 this Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}


// У нас теперь есть второй obj2 в котором есть свойство х и у и есть ссылка на обьект testObj: obj - 
testObj присваиваем обьект obj. 
И теперь через obj2 обратимся к его свойству testobj а это ссылка на первый обьект obj и обратимся к свойству 
test: который имеет метод newTest
obj2.testObj.test(); и вызываем его - в консоле видим что this = 10
в таком случае контект берёться из последенего обьекта 

let obj = {
  x:10,
  y:15,
  test: newTest
};

let obj2 = {
x: 20,
y: 25,
testObj: obj
};

function newTest(){
  console.log('this', this.x);
}

obj.test();
obj2.testObj.test();

Ну мы можем также потерять привязку к this 
зададим переменную foo и присвоим obj.test(); в эту переменную

Получается что наша функция newTest была в обьекте obj мы её от туда вытащили и присвоили в перменную foo 
и получули this  (window)


let obj = {
  x:10,
  y:15,
  test: newTest
};

let foo = obj.test();

function newTest(){
  console.log('this: ', this);
}

foo();
// на не важно что тут произошло, что там произошло, а важно как функция вызвалась и где, а вызывается она 
// по имени со скобкой имя(), а это наше первое правило - привязка по умолчанию

Если захотим привязать нашу функцию как функцию callback то тоже произойдёт привязка по умолчанию


let obj = {
  x:10,
  y:15,
  test: newTest
};

function foo (callBack){
  callBack();
}

function newTest(){
  console.log('this: ', this);
}

// такая же привязка по умолчанию
foo(obj.test);  //this:  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

И также это будет работать на встроенных функциях напрмиер setTimeout

let obj = {
  x:10,
  y:15,
  test: newTest
};
function foo (callBack){
  callBack();
}
function newTest(){
  console.log('this: ', this);
}
// Берём setTimeout, первым параметрам обьект вызова, вторым милисекунды через которые обьект будет вызван
// чтож это было 2е правило неявная привязка.
setTimeout(obj.test, 1000);
Резюмируем.

1. Привязка по умолчанию foo();     this ссылаеться на глобальный обьект window
2. Не явлная привязка obj.foo();      this будет ссылаться на обьект obj
3. Явная привязка apply, call, bind
4. Привязка new. Если обьект создан через оператора new то this будет укаызывать на этот обьект


ПРАВИЛО 3 - ЯВНАЯ ПРИВЯЗКА APPLY, CALL, BIND

сейчас obj и функция newTest ни как не связанны но в JS существует явная привязка, она существует для того, 
чтобы использовать конкретный обьект при вызове функции 
для это существуют методы функции apply и call

aplly принимает 2 параметра
1. параметр это конкретный обьект который мы хотим привязать к контексту вызова к this 
2. параметр это массив аргументов которые будут разобраны и переданы в функцию которую мы вызываем

call принимает 2 параметра
1. параметр это конкретный обьект который мы хотим привязать к контексту вызова к this 
2. параметр принимает сколько угодно парметров через запятую

Оба эти метода принимает первым параментом обьект на который будет ссылаться this при вызове функциии newTest

let obj = {
  x:10,
  y:15,
};

function newTest(){
  console.log('this: ', this);
}

Есть ещё такой трюк жесткая привязка - это когда создаём функцию и внутри применяем call или aplly  


let obj = {
  x:10,
  y:15,
};

function newTest(){
  console.log('this: ', this);
}

// внутри этой функции привяжем функцию newTest с помощью call к обьекту obj
// теперь когда я буду вызывать функцию hardBind() то на самом деле будет вызываться функция newTest с 
// с привязанным обьектом
function hardBind(){
  newTest.call(obj);
}

hardBind(); // - this:  {x: 10, y: 15}   в таком случае обьект уже привязан

и также в качестве параметра можем передавать какойто обьект и даже использовать setTimeout

let obj = {
  x:10,
  y:15,
};
function newTest(){
  console.log('this: ', this);
}
function hardBind(hard){
  newTest.call(hard);
}
hardBind(obj);
setTimeout(hardBind, 1000, obj);


в ES5 появилась новый метод bind который также привязывает контекст к обьекту, но единственное он его не вызывает
мы можем создать функцию foo и привязать нашу функцию newTest с помощью bind и указать обьект obj
let foo = newTest.bind(obj);
при вызове функции foo мы будем получать наш обьект   this:  {x: 10, y: 15}

let obj = {
  x:10,
  y:15,
};
function newTest(){
  console.log('this: ', this);
}

let foo = newTest.bind(obj);

foo();

*/ 








// ОБРАБОТЧИКИ СОБЫТИЙ и ОСОБЕННОСТИ ИХ РАБОТЫ //

/* Обработчик события 
у нас есть большой квадрат и мы попробуем навешать на него обработчик собитый 

let square = document.querySelector('.square');
console.log('square: ', square);
console.dir('square: ', square); - consloe dir, покажет нам элеменет в виде обьекта. Раскрыв который можем 
посмотреть все свойства и методы. Мы можем увидить очень много методов начинающихся на 'on'.


/// onclick ///  
Навесим стандартный клик
 square.onclick = function () {
   console.log('Вы кликнули на квадрат')
 }

 В консоле во вкладке Elements где виден весь html код в оригинале, в правом углу есть вкладка
 event listeners - там мы можем увидеть все обработчики событий для нашего элемента.

 Вообще не желательно вешать такие обработчики событий которые начинаються на 'on' с ними етсь определённые проблемы
 
 Теперь мы можем ограничить количество кликов на наш квадрат
 для этого создаём каунтер и записываем в него количество кликов, т.е. сколько раз обработчик заходил в функцию.
 И создадим условие

let square = document.querySelector('.square');
let count = 0;

 square.onclick = function () {
   if (count === 3) {
     return;
   }
   count++;
   console.log('Вы кликнули на квадрат');
 }

чтобьы отключить обработчик событий после выполнения условия - недостаточно просто return, нудно присвоить
обработчику событий значение null 
square.onclick = null;

// ЗАПУСК 2Х ФУНКЦИЙ ПО ОДНОМУ УСЛОВИЮ //


let count = 0;
incomeAdd.onclick = function () {
  if (count === 3) {
    console.log('Опачки');
    incomeAdd.onclick = null;
    return;
  }
  count++;
  console.log('Вы кликнули на квадрат');
};

incomeAdd.onclick = function() {
console.log('Это вторая функция');
};

такой способ работает но не всегда и при этом когда первая функция перестаёт работать вторая заменяет её без возвратно.
так что к нашему квадрату мы применил метод который опишем ниже

/// НАВЕШИВАТЕЛЬ СЛУШАТЕЛЯ ///
// addEventListener - Это Добавить событие слушатель! Этот метод принимает 3 параметра 2 из которых обязательные
1 параметр - 'click' мы указываем само событие но уже без приставки 'on'
2 параметр - function() мы передаём функцию которая будет обрабатывать событие
3 параметр - 

и мы можем навешивать несколько обработчиков событий на один тот же клик

let count = 0;
incomeAdd.addEventListener('click', function(){
console.log('Слушатель на связи 0');
});  


incomeAdd.addEventListener('click', function(){
console.log('Слушатель на связи 1');
});  

incomeAdd.addEventListener('click', function(){
console.log('Слушатель на связи 2');
});  
в логе получаем 
Слушатель на связи 0
Слушатель на связи 1
Слушатель на связи 2
Для решение первой задачи чтобы ограничить количество кликов мы можем использовать метод
removeEventListener - но для этого тебе нужно использовать именную функцию вместо анонимной

/// removeEventListener ///
Создаём функцию

let count = 0;
let clicked = function(){
  count++;
  if (count === 3){
     incomeAdd.removeEventListener('click', clicked);
     }
  console.log('Слушатель на связи 0');
};
incomeAdd.addEventListener('click', clicked);

УКАЖДОГО СОБЫТИЯ ЕСТЬ ОБЬЕКТ СОБЫТИЯ - этот обьект доступен только функции обработчики события, чтобы его получить 
мы должны первым параметром функции указать его имя, указать можно кого угодно но приянято указать event или i

incomeAdd.addEventListener('click', function(event){
  console.log(event);
});

Развернув log мы получаем множетсво информации которая сможет пригодиться в будущем
MouseEvent {isTrusted: true, screenX: 2980, screenY: 391, clientX: 420, clientY: 320, …}
altKey: false
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 420
clientY: 320
composed: true
ctrlKey: false
currentTarget: null     !!!ВАЖНЫЙ ПАРАМЕТР!!!
defaultPrevented: false
detail: 1
eventPhase: 0
fromElement: null
isTrusted: true
layerX: 420
layerY: 320
metaKey: false
movementX: 0
movementY: 0
offsetX: 16
offsetY: 19
pageX: 420
pageY: 320
path: (9) [button.btn_plus.income_add, div.income, div.data, div.calc, section.main, body, html, document, Window]
relatedTarget: null
returnValue: true
screenX: 2980
screenY: 391
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: button.btn_plus.income_add
target: button.btn_plus.income_add                                  !!!ВАЖНЫЙ ПАРАМЕТР!!!
timeStamp: 3147.819999998319
toElement: button.btn_plus.income_add
type: "click"                                                       !!!ВАЖНЫЙ ПАРАМЕТР!!!
view: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
which: 1
x: 420
y: 320

Какие ещё СОБЫТИЯ ПО МИМОМ click у нас есть

let eventFunc = function(event) {
  console.log(event.type);
};
водим по нашем квадрату и выдим что в консоле выводиться количество движений по элементу
incomeAdd.addEventListener('click', eventFunc); - click 
incomeAdd.addEventListener('mouseup', eventFunc); - срабатывет когда отпустить уже кликнувшую мышь
incomeAdd.addEventListener('mousedown', eventFunc); - срабатывает когда нажать на мышь и неотпускать
incomeAdd.addEventListener('mousemove', eventFunc); - слушает движение по элементу 
incomeAdd.addEventListener('mouseenter', eventFunc); - когды мы наводим мышку на квадрат срабатывает mouseenter
incomeAdd.addEventListener('mouseleave', eventFunc); - когда уводим мышку с квадрата срабатывает mouseleave

incomeAdd.addEventListener('mouseout', eventFunc);
incomeAdd.addEventListener('mouseover', eventFunc); - Данное событие работает также как и mouseenter, только 
в отличии от mouseenter mouseover реагирует и на child элементы, т.е. когда в нашем квадрате есть ещё элементы
mouseover mouseout реагируют на них тоже, а mouseenter и mouseleave буду реагировать только на весь элемент 
как один главный. это стоит учитывать, когда мы захоти сделать эвент на элемент внутри другиго элемента.

// ОЧЕНЬ ВАЖНАЯ ЧАСТЬ ТЕМЫ!! БУДЕМ ИСПОЛЗОВАТЬ ОЧЕНЬ ЧАСТО. 
// СОБЫТИЯ КОТОРЫЕ ВОЗНИКАЮ ПРИ РАБОТЕ С ФОРМАМИ

У нас есть imput форма и давайте получим это значение
addEventListener('input', eventFunc)) приминяем событие импут - событые импут происходит когда мы меняем
состояние нашего DOM элемента импут. У элемента импут есть свойство value - это то что мы видим в текстовом
поле и каждый раз когда оно меняется срабатывает событие импут.
Когда вводим, удаляем текст событие импут срабатывает столько раз сколько чаров мы ввели.
console.log(document.querySelector('.salary-amount').addEventListener('input', eventFunc));

Так же есть событие 'change' 
addEventListener('change', eventFunc)); - это событие срабатывает когда мы теряем фокус от нашего импута
и значение value поменялось
console.log(document.querySelector('.salary-amount').addEventListener('change', eventFunc));

Событие ''keydown''
addEventListener(''keydown'', eventFunc)); - оно срабатывает когда мы зажимаем кнопку
Событие 'keyup'
addEventListener('keyup', eventFunc)); - это событие срабатывает когда мы отпускаем кнопку
чаще это используеться при валидации, чтобы запретит ввод не нужных символов.
Событие 'focus'
addEventListener('focus', eventFunc)); - это событие используется когда пользователь на ввёл на форму
и кликнул на неё, т.е. сфокусировался
Событие 'blur'
addEventListener('blur', eventFunc)); - срабатывает когда после фокуса пользователь кликнул мимо 
сфокусированный формы

Работает с range (полоска слайдер имеющая значени от и до)
находим её и чтобы взять с неё значения использует событые change 
document.querySelector('.period-select').addEventListener('change', eventFunc));
console.log(event.target.value); - консольной командой можно взять его значение


let eventFunc = function(event) {
  console.log(event.type);
  console.log(event.target.value);
};

console.log(document.querySelector('.period-select').addEventListener('change', eventFunc));

// Событие Загрузки html документа //
процесс загрузки html документа состоит из 3х стадий
1 - это событие DOMContentLoaded (когда браузер полностьб загрузил html страницу и построил DOM дерево)
2 - это событие load (когда loader загрузл все ресурсы)
3 - это событие unload (уход со старницы)

Первое событие происходит на самом документу тем самым обработчик событий мы можем повесить на 
сам документ
Обычно ставят в первой строчке перед use strict и загрывают функцию в конце кода.

document.addEventListener('DOMContentLoaded', function(){
  .
  .
  .
  .
  .
  .
}); - в таком случае наш JS дожидаеться когда загрузится вся страница а потом уже запускает 
все скрипты 

Так же есть событие widowunLoad - оно срабатывает когда загружается вся страница, включая её ресурсы
стили, картинки, фреймы и тд.
Используеться она очень редко поскольку обычно нет нуждны подгружать все ресурсы и это может
сильно подгружать страницу.
 В основном если нужен определённый ресурс, то событие unload можно 
поставить не постредственно на нём.

Ещё событие onunload - это когда человек уходит со страницы или закрывает окно на виндовс срабатывает 
событие unload на него можно сделать что-то, что не требующие ожидание - например закрыть 
вспомокательные поп окна, но оменить сам переход нельзя. 

Зато есть событие onbeforeunload - оно используеться чаще и оно может отменить переход со страници
можно вызвать этот обработчик события и спросить пользователя, а вы уверены, что хотите закрыть
страницу, вы уверены что сохрании все данные

window.onbeforeunload = function(){
  return 'Вы точно сохранили все данные перед выходом ?';
};

Метод event.preventDefault() - этот метод отменяет стандартное событие браузера, т.е. станардное
поведение браузера, когда кликаем на ссылку у нас должна открывать новая страница или по клику
по фореме submin отправляется форма и можем отменять эти события пока пользователь не заполнил
эту форму или отменять переход пользователья по ссылке на другую страницу и написать
свои действия

document.querySelector('#link').addEventListener('click', function(event){
  event.preventDefault();
  console.log('click');
})

Ещё с помощью event.preventDefault() мы можем использовать фишку ЗАПРЕТИТЬ КЛИК ПРАВОЙ КНОПКОЙ МЫШКИ
мы на документ повесим обработчик события, который называеться contextmenu

это нужно для того, что отключить стандартное браузерное меню и реалезовать своё.
На неокторых онлайн сервисах реализованно своё контекст меню со своими
дивами, классами и ссылками

    document.addEventListener('contextmenu', function(){
    event.preventDefault();

    console.log('click');


    });

Всплытие - Перехват 

*/






// DOM, BOM //

// 2 основных стоба работы с браузером это BOM И DOM
// API HTTP HTML REACVEST

/* DOM - Document object module. Когда вы открываете браузер у вас на странице есть множество 
элементов которые описаны в html версткой - тэги, атрибуты, значения атрибутов текст внутри тегов.
Нам необходимо работать с этими желементами, но к сожалению javaScript не умеет работать с html кодом 
, с html разметкой и тогда на помощь к нам приходит DOM - это способ читать html разметку.

javaScript чтоб получить обьектную модель документа каждый элемент на странице переводит в обьект.

Мы создали div то javaScript создаст отдельный обьект для него, вы напиши текст внутри он создаст
соответсвтуующий обьект. DOM создаёт дерево обьектов.
Корневой обьект это document - он описывает открытаю страницу в браузере от него растёт всё это дерево

Мы може в консоле вывести обьект document

console.log(document);
и если развернём мы увидим структуру нашей странице

У документ нет родителей, мы это можем проверить с помощью свойства document.children
console.log(document.children);
И мы получает html коллекцию это псевтомассив которая содержит обьект html который содержит
атрибуты, детей и много других.

в объекте документ есть уже гоотовые встроеные методы для поиска элементов

// getElementById()
этот метод принимате строку, в которую мы вписываем id console.log(document.getElementById('one_span'));
и мы получили элемент со страницы
не все элементы имею id и нам нужны другие способы

// getElementsByTagName
вписываем в параметры какой тэг хотим получить получаем тег h4 и видим что их один в коллекции html
console.log(document.getElementsByTagName('h4'));  -  HTMLCollection [h4] - 0: h4

чтобы добраться до элемента в квадратный скобках вписываем индекс нашего элемента и поучаем
console.log(document.getElementsByTagName('h4')[0]);  -  <h4>Урок номер 6</h4>

// getElementsByClassName
вписываем в параметры какой класс хотим получить и получаем htmlCollection с количеством классов 
под названием text
console.log(document.getElementsByClassName('text'));  -  HTMLCollection [div.text] 0: div.text

добираем до нашего элемента указываем в квадратных скобках индекс
console.log(document.getElementsByClassName('text')[0]); - получаем.
 <div class="text">
    <p>Объекты, массивы</p>
</div>

// querySelector //
Далее у нас самый удобный способ это querySelector
это метод такде принимает строку, но указывать в строке нужно селектор
console.log(document.querySelector('h4')); и поучаем этот элемент <h4>Урок номер 6</h4>

Если хотим получть класс то пишем через точку
console.log(document.querySelector('.text')); - <div class="text">...</div>

Если хотим получать id пишем решетку 
console.log(document.querySelector('#one_span')); и получас на span id

таким образом мы можем получть любой селектор задавить атрибуты вложеность и тд всё что можно использовать
в css кроме псевдоэлементов потмоу что они не являються частью DOM 

Когда мы получили нужный нам класс document.querySelector('.text') но с таким названием имееться
два класс только используем метод document.querySelectorAll('.text') и получаем NodeList раскрыв 
который можно посмотреть все селекторы с данным классом

Разница между getElementsByClassName и document.querySelectorAll в том что если раскрыть в каждом
из методов свойсво _proto_ то в getElementsByClassName мы не увидим никаких свойсв, потому что это
псевдомассив у него нету никаких свойств и методов кроме length, а если развернём NodeList который
получили с помощью document.querySelectorAll, то мы можем обнаружить метод foreach которым удобно
пользоваться при разработке.
*/

// Тема: как мы можем этими элементами управлять //
/* зададим переменную 
let myElem = document.querySelector('.hello'); получаем класс hello у класса hello 
есть атрибут id что бы его получить пишем метод для нашей переменной метод getAttribute
console.log(myElem.getAttribute('id'));

Так же мы можем добавлять элементы это делает метод setAttribute() и он принимает два параметра
1 - параметр это имя атрибута
2 - параметр это содержимое атрибута
myElem.setAttribute('style', 'font-size: 24px'); и к верстве добавился атрибут 
<div class="text" style="font-size: 24px">
    <p>Объекты, массивы</p>
</div>

Все обьекты в html мы можем использовать как свойство, например у тега main есть атрибут title 
let myElem = document.querySelector('main'); 
console.log(myElem.title); выводим свойство title и мы получили Learn_git т.е значение этого атрибута

также мы можем задать своё значение
let myElem = document.querySelector('main');
myElem.title = 'Урок по DOM';
console.log(myElem.title);

Например чтобы получить class нам нудно прописать className, давай получим элементо по id 
let myElem = document.querySelector('#one_p');
и давайте получим все его классы 
console.log(myElem.className); - text

Такмы мыжем управлять DOM деревом. 
метод classList - myElem.classList и получили мы коллекцию с классами  
DOMTokenList(3) ["text", "hi", "hello", value: "text hi hello"]

У метода classList есть дополнительные методы такие как add, remove и другие, с помощью них
мы модем удалять и добавлять классы 
myElem.classList.add('genius');
console.log('myElem.classList: ', myElem.classList); и получили коллекцию
DOMTokenList(4) ["text", "hi", "hello", "genius", value: "text hi hello genius"]

чтобы удалить класс используеться метод remove
myElem.classList.remove('hi');
console.log('myElem.classList: ', myElem.classList);
DOMTokenList(2) ["text", "hello", value: "text hello"]

// НАУЧИМСЯ УПРАВЛЯТЬ DOM БОЛЕЕ ГЛОБАЛЬНО //
Будем получать сразу коллекцию  
let collect = document.querySelectorAll('.collections');
let elem = document.querySelectorAll('.elem');

console.log(collect);
console.log(elem);

Первая коллекция с тегом ul  
вторая коллекция их элементов с тегом li имеет 6 елемнтов
чтобы удалить элемент 
Обратимся к нашей коллекции и конкретно обратимся с индектом 0
и с помощью метода removeChild удаляем ребёнка указав индекс 2 напрмер
collect[0].removeChild(elem[2]);

метод appendChild добавляет элемент
collect[1].removeChild(elem[2]);
collect[1].appendChild(elem[2]); - это метод добавляет элемент в конец списка

также метод appendChild не добавляет а перемещает задданный эдемент 
этот метод принимает элемент и вставляет внутрь родителя который мы указали
collect[2].appendChild(elem[1]);
collect[2].appendChild(elem[3]);
collect[2].appendChild(elem[5]);

так же мы можем тусовать порядок элементов внутри родителя
collect[1].appendChild(elem[1]);
collect[1].appendChild(elem[0]);
collect[1].appendChild(elem[2]);

если нам надо перенести элемент в конкретное место, то для этого есть метод
insertBefore - этот метод на вход принимает тот элемент который мы хотим переместить и вторым
параметром мы задаём элемент перед которым хотим вставить первый элемент
collect[1].insertBefore(elem[2], elem[1]);
если вторым параметрам указать null то этот элеменет переместиться в конец т.е. он будет
работать также как appenChild.

Следующий метод это replaceChild
1-первым параметром принимает элемент который хотим переместить
2-вторым параметром принимает элемент который мы хотим заменить
collect[1].replaceChild(elem[1], elem[2]); - этот метод такде возвращает удалённый элемент

сохраним в переменной
let removeElem = collect[1].replaceChild(elem[2], elem[1]);
console.log('removeElem: ', removeElem); 
и мы этот элемент можем вставить куда угодно
вставим в другой список
collect[0].appendChild(removeElem);

Ещё мы можем копировать элементы 
выберем элемент 
let elemClone = elem[2].cloneNode(); - таким образом мы склонировали элемент 
collect[0].appendChild(elemClone); - и добавили в коллекцию но без детей без текста
чтобы сколонировать полностью с детьми добавляем параметр true 
let elemClone = elem[2].cloneNode(true) - и мы видем что элемент передался полностью

// Как создавать элементы!! Мы можем с помощью строк и с помощью DOM-дерева //
console.log(collect[1].innerHTML); - возваращет разметку внутри коллекции [1]
 <!--Нумерованный список (Контейнером этого списка обозначаеться Тег <ol>)-->
    <li class="elem elem-0">Изучить html</li>
    <li class="elem elem-1">Изучить css</li> 
    <li class="elem elem-2">Изучить js</li> 

console.log(collect[1].textContent); - возваращет только текст
    Изучить html
    Изучить css 
    Изучить js 

Мы можем менять текст таким образом
collect[1].textContent = 'Новый текст'; - ретурн ввиде текста без стилей
collect[1].innerHTML = '<b>Новый текст</b>'; - может меня и стиль например жирный (но
  такой способ затирает всю предыдущую разметку)

Но у нас есть возможность добавлять элементы с помощью API DOM 
для этого у обьекта DOM есть метод createElement это метод принимает в параметрах 
1. - это название тега который мы хотим создать 

let newElem = document.createElement('li') - создали элемент но на страницу ещё не добавили. 
тут используем метод appendChild 
collect[1].appendChild(newElem); - но он все ещё пустой, нужно добавть текст
newElem.textContent = 'Изучай ВСЁ';
сложив всё это мы получим новый элемент, если потребуеться мы можем добаввить и классы и атрибуты
let newElem = document.createElement('li');
newElem.textContent = 'Изучай ВСЁ';
collect[1].appendChild(newElem);

*/




// ОБЪЕКТЫ, МАССИВЫ //


// обьекты - это коллекция данных, структура которая используеться для хранения любых данных, обьект
// может содержать любой тип данных.

// Обьявим обьект. 
// первый способ
// let car = {};
// Второй способо с помощью конструктора
// let obj = new Object();


// зададим обьекту свойства или ключ в нашем случае (model и year), a 'mazda' и 2006 это значения
// после того как обьект создан можно добавлять и изменять его свойства
// let car = {
//   model: 'mazda', year: 2006
// };
// let obj = new Object();

// car.turbochargint = true;

// obj.color = 'black';

// car.style = obj; // мы получили вложенный обьект в обьекте car
// console.log(car.style === obj); // true т.е эти обьекты ровны, но car.style это не совсем обьект
// это ссылка на обьект, так как копировать обьекты ресурсно затратно JS скопировал сылку на объект data

// к обьекту через точку можно добюавлять новые свойства
// obj.color = 'red';

// console.log(car);

// car.style.color = 'blue';

// console.log(car);

// объекты могут содержать свойства с любым типом данных

// let car = {
//   marka: 'toyota',
//   year: 2017,
//   model: 'Land Cruser',
//   turbochargint: true,
//   specification: [],
//   style: {
//     color: 'blue'
//   }
// };

// // помимо этого объекты могут содеражать функции
// // открываем на обьект, через точку добовляем новое свойство ride и присваиваем функцию
// // function expration
// car.ride = function(speed) { // Такая функция внутри обьекта называеться методом обьекта
//   console.log('Скорость машины: ' + speed + 'км.ч');
// };

// // вызвать метод можно таким образом
// car.ride(60);

// // присвои функцию
// car.stop = stop;
// car.stop();
// console.log(car);

// // Можем записать и function decloration (функция которая не привязана к переменной)
// function stop() {
// console.log('Машина стоит, скорость 0 км/ч');
// }


// let car = {
//   marka: 'toyota',
//   year: 2017,
//   model: 'Land Cruser',
//   turbochargint: true,
//   specification: [],
//   style: {
//     color: 'blue'
//   }
// };

// // обращаться к свойствам и обьектам можно через альтернативный способ Синтаксиса

// console.log(car.model);
// console.log(car['model']);

// // добавлять свойство можно и так образом. Появиться новое свойство Place со значение city
// // так же можно писать свойства с пробелами
// car['Place'] = 'city';
// car['Best palce'] = 'GLO';
// console.log(car);

// // так же эти занчения могут приходить из переменных

// let titleTransmition = 'Коробка передач';
// let bodyTransmition = 'Автоматическая коробка передач';

// // мы присваиваем значение bodyTrans и вместо ключа указываем переменную title 
// car[titleTransmition] = bodyTransmition; // в тком случае ковычки открывать не нужно потому что это 
// // не строка, а переменная и передадим мы сюда уже значения.

// console.log(car);

// ЦИКЛ FOR IN
// иногда нам надо перебрать все свойства в объекте 

// let car = {
// model: 'Toyota',
// year: 2017,
// turbochargint: true,
// specification: [],
//  style: {
//   color: 'blue'
//  }
// };
// спомощью цикла for in переберём все свойства в обьекте car
// задаём for и в нём создаём переменную key, ключ это переменная будет содержать каждое свойство
// или метод обьекта напрмер model, year, style etc
// for(let key in car) {
//   console.log('Ключ: ' + key + ' ', 'Занчение: ' + car[key]);
// }
// Мы получили
// Ключ: model  Занчение: Toyota
//Ключ: year  Занчение: 2017
//Ключ: turbochargint  Занчение: true
//Ключ: specification  Занчение: 
//Ключ: style  Занчение: [object Object]

// иногда нам необходимо узнать сколько всего свойство у обьекта
// если вывесто с помошью length то мы получим ошибку undefined - свойство length у объекта не существует
// for(let key in car) {
//     console.log('Ключ: ' + key + ' ', 'Занчение: ' + car[key]);
//   }
// чтобы получить кол-во значений пишем инструкцию
// конструктор Object к его свойству keys в скобка вписываем наш обьект, после скобок через точку пишем length
// получаем кол-во обьектов (в нашем случае 5)

// console.log(Object.keys(car).length);



// И давайте также переберём массив 
// let Massiv = [1,20,2,43,4,6,98,8,9];

// Первый способо обычный цикл for
// for (let i = 0; i < arrayM.length; i++) {
//   console.log(arrayM[i]);
// }

// Воторой способ метод for each
// берём наш массив через точко обьявляем метод foreach и вскобках пишем функцию callback.
// callback функция запуститься только тогда когда запуститься метод foreach

// это функция принимает три аргумента 
// 1 это - item (перменная к которой при каждей итерации цикла присваивается новое значение массива)
// 2 это - i (Это индекс элемента)
// 3 это - array (сам массив)

// Massiv.forEach(function(item, i, array){
  //выводим элементы в консоль и получаем 
// console.log(item, i, array);
// });
// 1 0 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 2 1 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 3 2 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 4 3 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] 
// 5 4 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 6 5 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 7 6 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 8 7 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 9 8 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Новый цикл который появился в новой спецификации этмо скрипт 2015
// forof он очеень похож на forin отлечаеться только оператором, в место in пишем of
// в консоле выводим сами элементы
// for(let key of Massiv) {
//   console.log(key);
// }
// при операторе in в консоле выведиться индексы
// for(let key in Massiv) {
//   console.log(key);
// }

// иногда нам необходимо удалить элемент из массива
// оператор delete нам поможет
// обявялем delete после пробела указываем наш массив и в квадратных скобках указываем [3] номер индекса
// который хотим удалить
// delete Massiv [3];
// console.log(Massiv); [1, 20, 2, empty, 4, 6, 98, 8, 9] мы получили пустое место и undefined 

// как удалять из объекта 
// let obj = {
  
//   a: 3,
//   b: true,
//   c: 'z'
// };
// delete далее через пробел указываем наш объект. дальше через точку указываем свойство которое хотим удалить
// delete obj.b;
// console.log('obj: ', obj);       obj:  {a: 3, c: "z"}


//МАССИВ


// Массив в JS - это объект в которм ключи заполняються javaScriptom атоматически 
// Массив как и объекты могут солержать любые типы данных и обькты и массивы
// let arr = [1,2,3,4,5];
// отличаются объекты от массиво, тем что ключи заполняються автоматически и присваиваеться 
// порядковый номер - индекс

// console.log(arr); // (5) [1, 2, 3, 4, 5]
// обращаться к элементу можно с помощью квадратных скобок
// console.log(arr[0]);  сейчас мы обратились к элементу с индексом 0 и получили значнеие 1

// По индексу мы можем не только изменять элемент то и изменять его
// arr[0] = 'cat'; 
// console.log(arr); // (5) ["cat", 2, 3, 4, 5]

// У масива есть свойство .length; это свойство хранить количество элементо в массиве
// вот способ как добавить элемент в конец массива
// arr[arr.length] = 'dog';  length длина массива всегда будет на единицу больше чем последний индекс массива
// и таким образом мы указываем что последниму элементу с индексом 5 нам необходимо присвоить значение dog

// так же мы можем добавить элемент с любым индексом
// arr[10] = 'human'; (11) ["cat", 2, 3, 4, 5, "dog", empty × 4, "human"]
// length показывает последний индекс элемент + 1 в данном случае длина будет 10 + 1 (11), и 4 элемента пропущены.
// но на самом деле у нас 7 элементов в массиве
// console.log(arr);

// Массивы в javaScript являются объектами и их можно создавать с помощью конструктора

// но если указать один элемент он станет длинной массива, зачем это нужно так и не понятно 
// let array = new Array(55);
// console.log(array); - log (55) [empty × 55]

// В массиве также мы можем пропускать элементы и оставлять их пустыми
// let massiv = [1,,,,,3,5,5];
// console.log(massiv); (8) [1, empty × 4, 3, 5, 5]

// let massiv = [1,2,3,4,5];
// // ну а если мы присвои length какое число, то такая длинна у массива будет установлина 
// massiv.length = 30;
// console.log('massiv: ', massiv); (30) [1, 2, 3, 4, 5, empty × 25]

// ну а если длинна length будет установлена меньше чем есть у елемнтов массиве
// let massiv = [1,2,3,4,5];
// // тогда лишние элементы будут удалены
// massiv.length = 3;
// console.log('massiv: ', massiv); (3) [1, 2, 3]

// Методы массивов 

// let array = ['Apple', 'Orange', 'Banana' ];
// метод push от добавляет в конец один или несолько элементов
// array.push('Tangerin');
// есть похожий метод unshift, но он добавляет элемент в начало массива
// array.unshift('Sosiges', 'Cookes');
// console.log(array); (6) ["Sosiges", "Cookes", "Apple", "Orange", "Banana", "Tangerin"]

// есть противоположные методы
// метод pop и метод shift эти методы не принимают элементы

// array.pop(); // метод pop удаляет последний элемент 
// console.log(array); //["Sosiges", "Cookes", "Apple", "Orange"]

// этот метод также возвращает удалённый элемент
// console.log(array.pop()); // Banana т.е его можно сохранить в переменную
// console.log(array.shift()); // Sosiges Делает всё тоже самое только с первым элементом массива
// console.log(array); ["Cookes", "Apple", "Orange"]

// метод sort - он сортирует массив по алфавиту
// console.log(array.sort()); ["Apple", "Cookes", "Orange"] и он обязательно учитывает регистр

// метод slice также работает и с массивом, указываем в параметре индекс и всё что дальше 
// от указанного индекса включая его возващает метод slice
// console.log(array.slice(2)); ["Orange"]
// console.log(array.slice(1, 2));  ["Cookes"] через запятую мы указывает от кого до какого индекса 
// нам возвращать элемент
// console.log(array.slice(-2));  ["Cookes", "Orange"] так же мето принимает отрицательные значения, 
// сколько нам необходимо вернуть с конца 
// метод slice не меняет наш массив он возвращает новые
// console.log(array);  ["Apple", "Cookes", "Orange"]

// Следующйи метод splice он удаляет элементы и добавляет новые в массив
// первым аргументом мы передаём индекс элемента с которым мы начинаем удаление
// вторым аргуентом мы передаём количесвво, сколько элементов нам необходимо удалить
// а все последующие элементы это занчения которые мы хотим вставить в массив в то место откуда удалили элементы
// но сам метод splice возвращает нам удалённые элементы

// console.log(array); ["Apple", "Orange", "Banana"] оригинальный массив
// console.log(array.splice(1, 1, 'avocado', 'papaya')); ["Orange"] сохранён в методе, но удалён из массива
// и на его место добавли элементы 
// console.log(array); получилось ["Apple", "avocado", "papaya", "Banana"]

// метод join данный метод нам возвращает строку которая была с конконтенирована из элементов массива
// и по умолчанию проставил между элементам запятую ,
// console.log(array.join()); Apple,Orange,Banana
// но также он принимает аргумент и мы можем любую строку вставить которая будет раздлять наши элементы
// console.log(array.join(' - '));

//метод реверс возваращет нам обратный порядок массива и он изменяет текущий массив
// console.log(array.reverse());

// метод concat складывает исходный массив с другим массивом или элементами, но не изменяет текущий массив
// а возвращает новый
// console.log(array.concat(['avocado', 'papya', 'kiwi']));  ["Apple", "Orange", "Banana", "avocado", "papya", "kiwi"] 

// так же можно добавить отдельно элемент от этого массива
// console.log(array.concat(['avocado', 'papya', 'kiwi'], 'mango')); 
// поулчаем большой массив ["Apple", "Orange", "Banana", "avocado", "papya", "kiwi", "mango"]



// ПСЕВДОМАССИВ

// Псевдомассивы - это обьект похож на массив, т.е у него структура совподает с массивами, есть
// нумерованные свойства и lenght но методов массива у него нет
// например мы изучили псевдомассив arguments 

// function test() {
//   console.log(arguments);
//   console.log(arguments.length); // также мы можем вывести длинну массива (5)
//   console.log(arguments.pop()); // но использовать метод массива не получиться arguments.pop is not a function
// }
//  test(1,2,3,4,5); // мы получим псевдомассив с элементами.




// ВСЁ О ЦИКЛАХ //

// Циклческие операторы

// Циклы имеют условия и выполняються пока эти условия являються истиной
// Первый способ это While

// let n = 0;

// while(n < 5) { //Делай пока n меньше 5 
//   console.log(n);
//   n++; // но чтобы цикл не выполнялся бесконечно, будем увеличивать n на один каждую этерацию цикла на один
// }

// Второй способ это Do While
// Если while выполняет условия пока условия являются истиной, то Do While в любом случае один 
// раз исполнит итерацию цикла а потом только проверит т.е.
// (Do)Сделай что-то а потом проверь (while)

// do {
//   console.log(n);
//   n++;
// }
// while (n < 5);

// Если мы в while запишем условия которые вернут нам false
// то всё равно одна итерация цикла у нас пройдёт
// do {
//   console.log(n);
//   n++;
// }
// while (n ===  5);

// в случае с while то такой код выпониться ни разу
// while (n ===  5) {
//   console.log(n);
//   n++;
// }

// Третий способ это for
// В цикле for существует 3 аргумента
// В начале цикла создаём переменную ;
// Во втором мы пишем условия при котором цикл будет остановлен ;
// В третьем пишем условие что будет происходит каждую итерацию цикла
// Чтобы остановить цикл дострочно, используем команду break; 
// let n = 0;
// for (let i = 0; i < 5; i++) {

//   if (i === 3) {
//     break;
//   }
//   console.log('i: ', i);


//Рекурсия//

// В таком виде вы полняем одно и тоже действия пока колёс не останется 0 
// но код повторяется и очень длинный. А если это число 30, нам же не надо 30 раз дублировать

// function changeTires (snowTires) {
//    /* демонтаж, разбортовка, забортовка, накачать
//   сбалансировать, монтаж */
//   if(snowTires > 0) {
//     snowTires--;
//     console.log(snowTires);
//   }
//   if(snowTires > 0) {
//     snowTires--;
//     console.log(snowTires);
//   }
//   if(snowTires > 0) {
//     snowTires--;
//     console.log(snowTires);
//   }
//   if(snowTires > 0) {
//     snowTires--;
//     console.log(snowTires);
//   } if(snowTires > 0) {
//     snowTires--;
//     console.log(snowTires);
//   }

// }

// changeTires(4);

// Делаем следующее, мы будем выполнять код вне условий if а в условиях вызовим свою же функwb. (себя же)
//changeTires и будем передовать парраметр showTires(кол-во колёс) и + (дикремент--), 
// и так как мы каждый раз отнимаем по одному колесу нам будут приходить только оставшиеся колёса
// и пока это условие выполняеться пока колёс не стало 0 функция будет перезапускаться - это и есть рекурсия
// вызов функции внутри функции

// function changeTires(showTires) {
// showTires--;
// console.log('showTires: ', showTires);

// if (showTires > 0) {
//   changeTires(showTires);
// }
// }

// changeTires(30);




// ФУНКЦИИ //

/* Такое создание функици называеться Function decloration 
// Таким методом можно вызвать функцию до её обьявления. в случае с let var и  function - javaScript проходит по
//коду и обнаруживает вспывающие переменные и функции.Которые написаны в теле программы. интерпритаро 
//заносит функцию и переменные в память и будто всё это находиться в 0 строчке которую не видим.
outputMessage();  //Так вызываеться функция, обязательно оставил круглые скобки()
                              // В круглых скобка заводяться параметры
function outputMessage() {   // Обьявляем функцию. Имя должно быть глаголом т.к. явл тем действием которое оно делает 
console.log('Hello Glo Academy');
}


// Второй метод это function difination expretion
//  функциональное выражение 
// Обьявленную таким образом функцию можно вызвать только после её обьявления
const consoelMessage = function(){  // создаём переменную и вызываем функцию которая в { } выполняет своё действие 
   console.log('hellо friend');
};
consoelMessage();

// Также функицю можно вызвать с помощью конструктора
const alertMessage = new Function('alert("HI!")');   // Функция с большой буквы
alertMessage();

// В функции должно быть одно дейсвие. */

/*
function outputMessage(name, age) { // В круглых скобках передаём параметр функции
console.log('Hello ' + name);  // переменную можем использовать внутри  и видна она только внутри нашей функции
console.log('My age: ' + age); 
}
outputMessage('Max', 18); //в нашу функицю можно передать данные, их называют аргументами

let result = 0;
const sum = function(a, b){ // таким способом мы можем вывести результат из функции, 
  // если переменна result была создана в самой функции то вывести наружу у нас не получилось
  result = a + b;
};
sum(3, 5);
console.log('result: ', result);
*/

// Чистая функция - полностью изолирована от кода, нично на неё не может повлият и она сама кроме входных данных

/*
const sum = function(a, b){
  return a + b; // чтобы вернуть значение используем операто return мы можем передать множество аргументов
};
                // Функция умеет возвращать какойто значение на своё место, 
let result = sum(3, 5, 6, 7, 7, 4, 25); // тоесть туда где она была вызвана и мы можем присвоить её в переменную
console.log('result: ', result); // Результат 8, потому что в параметрах функции указано только а и б
//но что бы просмотреть все переданные аргументы
// Для этого существуте псевдо массив arguments

const sum2 = function(c, d){
  console.log(arguments);
  return c + d; // чтобы вернуть значение используем операто return мы можем передать множество аргументов
};
                // Функция умеет возвращать какойто значение на своё место, 
let res = sum2(3, 5, 6, 7, 7, 4, 25); // тоесть туда где она была вызвана и мы можем присвоить её в переменную
console.log('res: ', res); */

/* 
const sum = function(a, b){
  console.log(a); //3
  console.log(b); // undefined
  return a + b;
};

let result = sum(3);
console.log('result: ', result);*/

/* 
const sum = function(a, b){
  if (!a){ // Для выражения a, унарное выражение !a эквивалентно выражению (a == 0), 
    a = 0; //за исключением случаев, когда используются перегруженные операторы.
  }
  if (!b){
    b = 0;
  }
  return a + b; //функция всегда что-то должна возвращать

  console.log('hi'); // Не работает потому return останавливает код после его исползования
};

let result = sum(3); // result 3 потому что 3 + 0 = 3
console.log('result: ', result);
*/

/* let money = +prompt('Ваш месячный доход'); 
let income = 'js-developer'; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(" ");
console.log('addExpenses в виде массива: ', addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');

console.log('Ваш месячный доход:', money, '$');
console.log('Дополнительный доход:', income);
console.log('Есть ли у вас депозит в банке?', deposit);

let expensesMonth = prompt('Какие обязательные ежемесячные расходы у вас есть?');
console.log('Обязательные ежемесячные расходы:', expensesMonth);
let walletDamage = +prompt('Во сколько это обойдется ?');
console.log('Обходится:', walletDamage, '$');
let expensesMonth2 = prompt('Какие ещё обязательные ежемесячные расходы у вас есть?');
console.log('Обязательные ежемесячные расходы:', expensesMonth2);
let walletDamage2 = +prompt('Во сколько это обойдется ?');
console.log('Обходится:', walletDamage2, '$');
let budgetMonth = money - (walletDamage + walletDamage2);
console.log('Доход за месяц составляет', budgetMonth, '$');
let mission  = 100000;
console.log('Цель: ', mission, '$');
let periоd = mission / budgetMonth; 
console.log('За сколько месяцев будет достигнута цель:', periоd);
console.log('Количесвтво месяцев округ��яя в большую сторону:', Math.ceil(periоd));
let budgetDay = budgetMonth / 30;
console.log('Дневной бюджет:', budgetDay);
console.log('Дневной бюджет округлив в меньшую сторону:', Math.floor(budgetDay));

switch (budgetDay) {
  case 800:
    console.log('switch:', 'Высокий уровень дохода');
    break;
  case 300:
    console.log('switch:', 'Средний уровень дохода');
    break;
  case 0:
    console.log('switch:', 'Низкий уровень дохода');
    break;
}

if (budgetDay >= 800) {
  console.log('Высокий уровень дохода');

} else if (budgetDay >= 300 && budgetDay < 300) {
  console.log('Средний уровень дохода');

} else if (budgetDay >= 0) {
  console.log('Низкий уровень дохода');

} else if (budgetDay < -budgetDay) {
  console.log('Что-то пошло не так');

} else {
  console.log('Некорректный ввод');
}
*/

// АНОНИМНЫЕ ФУНКЦИИ //
// Если после function есть имя то эта функция будет именнованая в любых других случаях аннонимная


// const sum = function (a, b) { // Такая функция являеться анонимной так как после function не никакого имени
// return a + b;
// };

// const sum2 = new Function('a','b', 'return a + b');

// console.log(sum);
// console.log(sum2);
//   |
//   |
// вывела консоль
// ƒ (a, b) {     // первая без имени
//     return a + b;
//     }
//     scriptFunc.js:11 ƒ anonymous(a,b // вторая анонимная, но к ней никак нельзя обратиться
//     ) {
//     return a + b
//     }

// Анониманя функция может иметь имя если мы её присваиваем к какой-то переменной. Т.е
//Функция присваиваться по ссылке в переменную. наша функция будет храниться в памяти без имени

// Есть онониманя функция вызывающая сама себя
// (function() { // такой способ используеться для инкапсуляции когды мы хотим огородит код от окружающих
//     console.log('Hello');
// })();


// CallBack Funcion // MUST HAVE //

 // в качестве параметров функции мы можем принимать не только значения 
 // или перменные но и функции, т.е. передать функцию callback и выполнять её внутри нашей функици.
 // назвают такие функиции - функции обратного вызова и любая функция которая передаётся как аргумент
 // называет функцией обратного вызова и она может быть анонимной

// const doNum = function(a, b, CallBack){
// if (typeof a === 'number' && typeof b === 'number'){ // проверяем какие нам данные пришли
//     CallBack(a, b); //В таком случае буду выполнять CallBack функцию и передвавать туда этиже числа a и b
// }
// };
// // вызываем функцию doNum передаём числа 5 и 10 и передаём анонимную функцию
// doNum(5, 10, function(a, b){  //Работает это так, т.е на место функции callback строчка -(41) у нас будет 
//     // подствалена function(a, b) которую мы передали третьим параметром в фукницю doNum
//     console.log(a + b);
// });


// // Можем передать именнованную функцию
// function mult (a, b) {
//     console.log(a * b);
// }
// doNum(3, 5, mult);

// для чего нужная функция callBack.
// В  нашем случае java исполнил функции по очерёдно сначало one затем two/ 
// Но не всегда мы можем быть уверены что функции сработают в своём порядке, потому может мыть задержка
// в браузере или в других узлах и тогда javaScript не дожидаясь ответа от представленной функции пойдёт
// дальше и так сказать перепрыгнет через нужная для расчётов участок
// Мы с иметировали задержку и получилось что сначало сработал функция two затем one и получилось
// Поел суп ПОТОМ сварил суп, чувствуйте сдесь что-то не то.

// Вписываел callBack
// и выполним её после того как сварим суп
// а передавать я буду туда нашу функцию two

// function one(callBack) {
//     setTimeout(function(){
//         console.log('Сварил суп');
//         callBack();
//     }, 1000);
// }

// function two() {
//  console.log('Поел суп');
// }

// one(two); // получилось что Сварил Суп Поел Суп - теперь всё работает правильно

// function one(callBack) {
//     console.log('Делаем запрос на сервер');
// setTimeout(function(){
//     console.log('Получаем данные от сервера');
//     callBack();
// }, 1500);
// }

// function two() {
//     console.log('Выводим данные на страницу');
// }

// one(two);

// Мы будем использоват очень часто
// callBack функции используються во время обработки события, вызываються только когда событие произошло
// callBack функции использються во время методов перебора foreach
// ПРАВИЛА callback function ВСЕГДА ПЕРЕДАЁТЬСЯ В ДРУГУЮ ФУНКЦИЮ И ВЫПОЛНЯТЬСЯ ПОСЛЕ ВЫПОЛНЕНИЯ ТОЙ ФУНКЦИИ

// ЧИСТЫЕ ФУНКЦИИ //

// Детерминированная функция завист только от входных данных!
// function foo(a, b) {
//     const sum = a + b;
//     return sum;
// }

// console.log(foo(1, 3)); 

//Детерминированная функция + чистая функция
// Чистая функция должная быть детерминированная, а также не должна иметь побочных эффектов
// тоесть эта функция не должная изменять входные данные и не изменять всё что вне этой функции
// побочными эффектами ещё являеться такие действия как вывод в консол, алерт, запись файла, вывод на страницу и тд
// т.е функция должная получить только данные сделать с этими данными операции и вернуть результат причём
// не изменя эти данные.

// Чистые функции проще в понимание и отладки также в тестировании они не зависят от остального кода
// программы и их можно вызывать в любое время при любой погоде, результат будет одинаковый
// чистые функции зависят только от входных данных



// УРОК 3 //

// ВЕТВЛЕНИЯ //

/*Ветвления - это выполнение определённого набора команд в случае true или false логическго выражения.
 Пример:            Что надеть на улицу?
                              |
                       Мы справшиваем
                  true ------ЖАРА?------ false
                    |                     |
              Одеть шорты              Одеть джинсы
Важно понять какое утверждение вы бы спросили у компьютера у него будет только два ответа
пробуем написать на русском языке но с синтаком js
Если (жарко) {          если выражение true то исполнаятся всё что внутри фигурных скобок
  одеваем шорты; 
  одеваем футболку
}иначе {                если выражение false то
  одеваем джинсы;
  одеваем кофту;
}
if (true) console.log('Истина');
if (false) console.log('Это код не выполняется');
Если нужно выпонить более одной команды то оформляем это блоком кода в фигруных скобках
if (true) {  Обрамеление в { } скобки называют, блоком команд, блоком инструкций, состовной командой.
  console.log('Команда 1');
  console.log('Команда 2');
}
If преобразуте значения в скобках в булиновый логическое выражение 
часто мы можем увидеть в скобках операторы сравнения 
let n = 5;
if (n == 5) {
  console.log('Команда 1');
  console.log('Команда 2');
}
Ещё мы можем написать команды в случае ложного выражения это оператор else
let n2 = 6;
if (n2 == 5) {
  console.log('Команда 1');
  console.log('Команда 2');
} else {        После else команды обязательно оборачиваем в фигурные скобки 
console.log('не верно'); 
}
Блок else являеться не обязателен, но в этой ветке мы можем использовать новый if
в случае выполнения какого-то условия после команды if отработает соответствующий блок кода
если if будут ложные то отработает команды else
let n3 = 4; 
if (n3 == 5) {
  console.log('Команда 1');
  console.log('Команда 2');
} else if (n3 == 4) {
console.log('Элсе команда 1'); 
} else {
  console.log('Команда 3');
}
Такая ложность условий бывает очень большой, перебирая значения переменной и выпоняя определённые команды
для конкеретных значений.
Для таких случаем придумали более удобную условную комнаду. */


// КОМАНДА SWITCH //

/* Команда switch заменяет сразу несколько if - в скобочках (n) мы пишем выражение которое будет проверяться на
строгое равенство. Внутри { } мы пишем дериктиву case дальше значение которое будет сравниваться с нашим значением 
в скобках. После : - двоеточия мы пишем команда которые хотим выполнить
Если строгое равенство n и 3 = true 
то оператор switch будет последовательно сравнивать каждый case со значение n и то значение которое будет выдовать 
нам true выполнить команду console.log(3); Но к сожалению если не прописать команду break, то switch продолжит
выполнение всех остальных команд игнорирую case
let n = 1;
switch (n) {
 case 3:
   //сюда пишем конмады которые хотим выполнить если i и 3 = true
  console.log(3);
  break; //если нет необходимости выпонять следующие команды
 case 4: // если равен 4 то выполняй эти комнады под низом
  console.log(4);
  break;
 case 5: // если равен 5 то выполняй эти комнады под низом
  console.log(5);
  break;
 case 6: // если равен 6 то выполняй эти комнады под низом
  console.log(6);
  break;
  //если мы хотим выполнить команду, при том что не одно из условий не выполено, то есть вариант выполнения defolt
  default: 
  console.log('не верно');
} 
Бывают такие случае когда при свопадении с несколькими case нам нужно выполнить одну и туже команду 
в таком случае мы break не пишем, а пишем несколько case подряд 
let i = 4;
switch (i) { 
  case 3: // Это назваеться группировка case
  case 4:
  case 5: 
    console.log('3 + 5');
    break;
 case 6:
    console.log(6);
    break;
  default: 
    console.log('не верно');
} 
Стоит отметить что команды switch проверят строгое равенство если 5 == к '5' то такое равенство не верное 
потому что они не ровны по типу.
// ТЕРНАНЫЙ (УСЛОВНЫЙ) ОПЕРАТОР //
//тернаный т.е. имеет три операнда 
          условие               Также можем написать string, number, function
 возвращает true или false 
             |
             |     В случает если занчение то true то выполниться первая команда
             |            |
let result = i == 3 ? 'Команда1' : 'Команда2' ; console.log('result: ', result);
                    |                  |
                    |               В случает если занчение то false то выполниться вторая команда
                    |
       Тернарный оператор
 С условиями мы сталкиваемся постоянно, это неотъемлемая часть программирование. */


// ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ //

/* Если интерпритарор ожидает увидеть значение определённого типа, то занчение будет автоматически 
 к этому типу. Например если один из операндов оператора + будет string то второй операнд будет
 тоже преоразован в string и будет выполнена операция конкантенация 
console.log(5 + '5'); //данная команда нам вывел 55, а не 10, она сложила два stringa как текст 55
console.log(typeof (5 + '5'));  тип данных string
А операторы '*','-','/' будут пытать перобразовать значение в тип данных number
console.log(5 - '5'); = 0 Получаем результат орефмитических действий
console.log(5 / '5'); = 25
console.log(5 * '5'); = 1
console.log('js' / '5');  если же значение нельзя преобразовать мы получаем ошибку вычесления NaN
console.log(5 == '5'); Преобразование также происходит при исползование оператора сравнения
но попимо автоматического преобразования типа данных мы можем явно преобразовывать значения в другой
ти данных с помощью конструкторов преобрзования и не только 
console.log(Boolean(5)); = true Преобразовавыет значение в булиновый тип
но есть более короткий и удобный способо
console.log(!!5);- это оператор двойного отерцания! Когда мы используем оператор отрицания мы
преобразуем это число в булиновый тип и изменяем его значение в противоположное, оно становиться false,
а что бы вернуть число в прежнее занчение мы снова используем оператор только с двумя !! 
console.log(!!5); и так преобразовали тип в булевый + вернули число его прежнее значение true.
Так мы можем преобразовывать обьекты, функции и так далее
//Преобразование в СТРОКУ
console.log(String(10)); Чтобы преобразовать в строковый тип данных есть конструктор string.
console.log(typeof String(10)); string(строка) 10
console.log(String(true)); Также можешь преобразоваь и булиновый тип и получим строку true
console.log(String([1, 2, 3])); и даже преобразовать массив и получим строку 1,2,3
но также как и булиновым типом данных у нас есть альтернативный способ.
console.log(10 +''); это значение сложить с пустой строкой и получим строку
console.log(typeof (10 .toString())); Есть ещё метод toString но он работает только с числами и булиновыми значениями
Тут есть хитрость, чтоб метод стработал между точкой и числом ставим пробел ((10 .toString). Если этот
пробел убрать (10.toString) то интерпритатор продумает что это число с плавающей точкой и выдасть error.
также можно использовать 10..toString) две точки вместо пробела и это тоже будет работать
//Преобразование в ЧИСЛО
чтобы преобразовать в число можно использовать конструктор number
console.log(typeof Number('33'));это будет число (number)
Также альтернативный способ это использование тернального оператора +
console.log(+'10'); и мы получаем число 
Как нам это может пригодиться в практике? 
Напримпер от пользователья с помощью метода prompt мы получаем число - ответ на ворпос (Сколько тебе лет?)
ответ 18, но мы получаем строку, а нужно число. Либо мы можем завернуть prompt конструктор number или
исползовать тернанрый оператор (+)
Поставив + перед методом prompt мы получаем в ответе число а не строку
let question2 = +prompt('Сколько тебе лет ?');
но есть нюанс, если пользователь введёт слова 'блабал' то мы получим NotaNumber, но это проблема решаема.
Есть ещё интересный способ, возможно лучше использовать тернарный или ещё какой, этот способ не встечаеться 
в учебниках это приобразование строки с помощью умножение на 1
let n = '10'; - String
n *=1; - пеобразование
console.log('n: ', typeof n); - number 
Также у нас есть две глобаные функицц их ещё называют мягкое преобразование. 
Их ещё называют parseIng и parseFloat
Эти две глобаные функции преобразуют строку в число символ за символом пока это возможно
console.log(parseInt('10')); - 10 number
console.log(parseFloat('10.5')); - 10.5 number
Если в строке помимо чисел будут и буквы то
console.log(parseInt('10 px')); parseInt вытащит число 10
(не умеет работать с дробными числами и при случае 10.5 он вытащит только 10 (т.к целое число))
выдаст NaN есть в строка будет начинаться с симфолов которые невозможно преобразвать в число
console.log(parseInt('10 px', 2)); Принимает второй параметр это система исчисления. Допустим если 
мы укажем 2, то это будет двоичная система исчисления, если укажем 8 - восмеричная система исчисления, 
16 - шеснадцатеричая, и всё это будет числом (number)
console.log(parseFloat('10.5 px')); parseFloat вытащит 10.5
// МЕТОДА ВЗАИМОДЕЙСТВИЯ С ПОЛЬЗОВАТЕЛЕМ - confirm, prompt//
confirm(); Вызовет модальное окно с двумя опциями ОК и CANCEL
(confirm возвращает булиновое значение в зависимости на что нажали)
console.log(confirm('Тебе есть 18 лет? ')); в параметрах мы можем задать вопрос или написать любую строку
let question = confirm('Тебе есть 18 лет?'); так же мы можем записать ответ в переменную (Ок - true, Сancel - false)
console.log('question: ', question); question = true эту переменную мы можем использовать в коде 
в зависимости от результата.
Второй метод это метод prompt. Давайте сразу сохраним его в перменную
 let question2 = prompt('Сколько тебе лет ?'); этот метода как и alert и comfirm выдаст нам модальное окно.
Но разница в том что помимо модальноко окна появляется поле для ввода ответа - который ты можешь сохранить в перменную
console.log('question2: ', question2); question:  true, question2:  21 - я ввёл данные и они сохранились в переменную
Хочу заметь всё что мы ВПИСЫВАЕМ В ПОЛЕ ОТВЕТА - ЯВЛЯЕТЬСЯ СТРОКОЙ (string) в нашем случае 21 это string a не number.
let question2 = prompt('Сколько тебе лет ?', '18'); У метода prompt есть воторой пораметр , там указывает дефолтное 
значение, которое будет вписывать уже в ответ сроку, нам лишь нужно подтвердить это значение или изменить его. 
Если методе prompt мы нажимаем не ОК а Cancal (ОТМЕНА) то наша переменная question2 будет имет тип null - т.е 
не содержит никаких данных и это нужно учесть при дальнейшей работе 
// 'USE STRICT'; //
'use strict';
let a = 5;
console.log('a: ', a);
'use strict'; - это дериктива появилась в спецификации ES5 она указывает нашему браузеру, что нужно обрабатывать 
код по современным правилам. 
1. Строгий режим исправляет ошибки
2. Устарняет слабые места в JavaScript 
3. Упращает отладку кода
4. Увеличивает безопасность
Не которые элементы синтаксиса перестают работать в строгом режиме, так это может вызвать ошибки в некоторых браузерах.
Например отключив режим 'use sctrict' мы можем задать переменную a = 5; и вызвать её в консоль. но если 
мы в режиме 'use sctrict' задать прееменную таким образом это вызвет ошибку. Нам нельзя сооздать пременную без
ключевого слово let a = 5; т.е без обьявления. всегда указывать полный синтаксис.
Привыкайте к строгому режиму уже сейчас пока обучаемся. это обучит вас писать более оптимизоравнный и безопасный код */


// УРОК 2 //

// СТРОКИ //

/*
let str = 'apple, kiwi, orange'
console.log(Str.split(' ')); с помощью метода сплит, добавляем стринг в массив стрингов
let myStr = "Hello my Friends"; 
console.log(myStr.indexOf('Friends')); // получаем индекс первой буквы указанного стринга
console.log(myStr.replace('Hello', 'YO')); //заменяем строку
console.log(myStr.split(' ')); //метод который разбивает строку на массив нам нужно указать только 
разделитель в консоле мы получаем массив 
0: "Hello"
1: "my"
2: "Friends"
console.log(myStr.length); // количество симвалов в данном случае 16
console.log(myStr.toUpperCase()); //Возвращает строку в которой символы приведённы в верхиний регистр HELLO MY FRIENDS
console.log(myStr.toLowerCase()); //Возвращает строку в которой символы приведённы в нижний регистр hello my friends
console.log(myStr.charAt(0)); //Указать индекс символа который хотим вернуть
console.log(myStr.charAt(1));
console.log(myStr[3]); //лучше использовать []
console.log(myStr.substring(6)); - метод возвращает все строки от указанного индекса
console.log(myStr.substring(12, 15)); -метод возвращает строку ОТ указанного индекса ДО не включая этот индекс 
console.log(myStr.slice(6));
console.log(myStr.slice(-7)); - тот же медот только можно указывать с конца вернуть 7 строк с конца -7
console.log(myStr.substr(6,9)); - первым параметром указываем индекс с какого символа мы начинаем брать подстрок и 
вторым параметрам указываем сколько символов мы хотим вернуть
*/
/* let myString = 'hello world'; Желательно использовать один вид ковычек. 
Единственный момент когда вы ходите использовать ковычки внутри строки для этого используем разные типо ковычек
console.log("hello 'my' friend");
console.log("\t hello 'my' \n friend"); \t - табуляция, \n - перенос строки
console.log("hello \"my\" friend"); экранируя одинаковые ковички можно увидить что всё работает
console.log(5 + '10'); = 510 string
console.log('hello' + ' ' + 'world');
console.log(myStr + ' ' + myString);
*/

// ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ //
/* let myVar;
myVar = 10; //чисто
myVar = 'Hello friends'; //строк
myVar = true; //Булевое значение
myVar = null;
myVar = undefined;
myVar = Symbol(); 
myVar = {};
let myTrue = true;
let myFalse = false;
*/

// ЧИСЛА //

/*console.log(50); // - целые
console.log(8.5); // дробные числа, или числа с плавающий точкой. JS использует точку вместо запятой
console.log(.5); // Если часть дробного чила = 0, то его можно опустить
console.log(5e6); // Экспоненциальная форма
console.log(0b1111); // Двоичная форма
console.log(0o11); // Восмеричная форма
console.log(0x22aacc); // шестандцаричная форма (буквы b, o, x, можно писать в верхнем регистре B, O, X)
console.log(Infinity); // бесконечность можеть быть как + так и -
console.log(NaN); // not a number */


// ОРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ //

/* console.log(+5); в основном используеться в преобразовании в тип данных чило (тема другого урока)
console.log(-5); Преобразует число в отрицательно */


//УНАРНЫЙ ИНКРЕМЕНТ и ДИКРЕМЕНТ //

// let i = 5;  переменная 
/*Унарный инкремент имеет ++i префиксную форму записии и постфиксную i++
// ++i - она сначала увеличивает значение переменной на единицу а потом возвращает
// i++ - сначала возвращает текущее значение а потом увелечивыет его
console.log(++i);
console.log(i++);
console.log(i); 
console.log(i--);  - сначала возвращает текущее значение а потом уменьшает его
console.log(--i); -  сначала уменьшает значение переменной на единицу а потом возвращает
console.log(i); */


//БИНАРНЫЕ ОПЕРАТОРЫ

/*
console.log(3 + 4);
console.log(4 - 3);
console.log(2 * 3);
console.log(9 / 2);
console.log(9 % 3);
*/


// ПРИСВАЕМЫЙ ТИП ОПЕРАЦИЙ

/* let n = 15;
// n = n + 3;
n += 3;
console.log('n:', n);
// n = n - 6;
n -= 6;
console.log('n:', n);
// n = n / 6;
n /= 6;
console.log('n:', n); */


//ОПЕРАТОРЫ СРАВНЕНИЯ

/*console.log(3 > 2); //больше
console.log(3 < 2); //меньше 
console.log(5 >= 3); //больше или ровно
console.log(10 <= 5); //меньше или ровно
console.log(5 === 5); // равенство без приведения типов
console.log(5 !== 6); // неравенство
console.log(5 == '5'); // равенство с приведения типов, т.е js преобразовал номер в строку или строку в номер = true.
console.log(5 != '5');
*/
// Есть обьект Math котороый содерэит математические методы
/* console.log(Math.sqrt(25)); //метод sqrt извлекает корень
console.log(Math.pow(5, 3)); //возводим в степень (Первое число которые необходимо возвести в степень,
 второй параметро в какую степень)
console.log(Number.isInteger(5)); //метод для проверки являеться ли число целым. true если значение целое
console.log(Number.isInteger(5,6)); // false если значение дробное.
*/


// ОПЕРАТОРЫ //

/* Имееться три логически оператора || - или, && - и, ! - не(опиратор отрицания)
console.log(true || true); = true
console.log(true || false); = true Оператора || - возвращает true когда один из операндов true
console.log(false || false); = false
console.log(true && true); = true - Оператора && - возвращает true если оба операндов true
console.log(true && false); = false
console.log(false && false); = false*/

/* Оператор отрицания логическа не ! - это аунарный оператор. 
он принимает операнд и изменяет его знаение на противоположеное
console.log(! true); = false
console.log(!false); = true*/


// ТИП ДАННЫХ ОБОЗНАЧАЮЩИЕ ОТСУТСТВИЕ ЗАНЧЕНИЙ //

/* null; undefined; - это такой тип данных обозначающий отсутствие значений 
null -  Нужно усвоить, что null это чего не существует в коде пустое или неизвестное значение 
переводиться как пусто или 0 
(иногда в практике к переменной присваиваеться значение null чтобы иметь пустую переменную)
undefined - обознаячает что значение полностью отсутвует
console.log(null > 0); = false
console.log(null == 0); = false
console.log(null >= 0); = true
*/


//ПРЕОБРАЗОВАНИЕ В БУЛЕВЫЙ ТИП //

/*  Логические значение являлються результатом логических выражений 
Любое значение можнно преобразавать в булевый тип с помощью конструктора булеева типа
после данного преоброзования данные могут принимать значения true
console.log(2 == 2);
console.log(2 == 3);
console.log(Boolean(5)); = true
console.log(Boolean('hello')); = true 
console.log(Boolean({})); = true
console.log(Boolean([])); = true
console.log(Boolean(function(){})); = true */

/* Но есть исключений данные типо данных принимают значения false
очень часто при написании программы мы преобразовываем наши значения в булиновый тип для проверки
его на false что исключить такие значения как (0),(undefined),(null),(NaN),('');
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));*/

/* Везде где интерпретатор ожидает получить логические значения любые значение будут 
преобразовываться атвоматически в логические. Например при использование условного оператора if 
if (5){} 5-рка в данном случае автоматически преобразовался в логическое и принимает true*/


//ОБЬЕКТЫ//

/* let myArr = []; // массив
let regExp = /w +/g; //регулярные выражения
let func = function(){}; //Функции
let error = Error('error message'); //Ошибки
let date = new Date(); //Типы дата
*/



// УРОК 1 //
 
// Однострочный комментарий
/* Многострочный
коментарий */
// Горячие клавиши ctrl + "/"
/* alert(''); Метод alert('') выводит модальное окошко и пока мы не нажмём "ОК" 
код JavaScript дальше выполняться не будет */
/* console.log(2); Метод Console.log выводит нам информацию в консоль. Это ещё единственная 
команда которая мы можем записать прямо в редакторе кода. При помощи плагина Code Runner 
выделяем кода, кликаем правой кнопкой мыши и нажимаем Run Code  тогда в 
редакторе кода мы видим что в консоль добавилась цифра 2*/
// Всегда закрываем строку ;
// Переменные
/* Чтобы обьявления переменное мы пишем ключевое слово var после ключевого слова пишет 
индефикатор который являеться именем переменной. */

 /* В JavaScript привыкли писать типо camelCase, смысл в том, что начало пременное мишества
  с маленькой а все последующие слова с большой.*/

// В современном стандарте появилось два новых слова var let const.
// var myHeight = 175;
/* let myAge = 31; let очень похожа на var, но прокачанней которая избавляет нас от ошибок 
которые могли возникнуть при использовании var */
// const pi = 3,14; const обьявляет константу, т.е. пременная которую нельзя менять

/* var такой типо переменной ведна везде. Она занимает место в памяти сразу даже если ещё нет в 
ней данных и его можно распечать если заключить его в { } кудрявые скобки. */

/* Git команда git init инициализирует новый пустой репозеторий и создал папку git
Git команда git status показывает статус и отслеживаемые файлы
Git команда git add index.html добавляет файл в отлеживаемые 
Git команда git add "." ставим точку и таким образом добавляем все папки и всё содержимое в отлеживаемые 
Git команда git commit -m комментим измения и сохраняем проект, по хэшу можно вернутся
Git команда git diff используеться чтобы посмотерть что поменялось до и после сохранения
Git команда git log показывает историю коммитов, мы можем увидеть автора, описание и специальный 
хэш с помощью которого можно возвращаться к старым комитам
Git команда git show "номер хэша" показывает что именно мы сделали в данным период
Git команда git chekout откатывает до нужной версии проекта или если ввести наствание файла то до предыдущей коммиту этого файла
Git команда git chekout 5f7bd23257677ebf7f3f5603f2ec8f228f91d2db style/testcss.css откатывает нужный файл до указанного коммита
Git команда git chekout 966dea3 откатывает проект до указанного коммита (хэш нашли через комманду git log --oneline)
Git команда git log --oneline показывает коммиты в виде списка
Git команда git log --oneline --all видно все коммиты из всех веток(сортировка по дате)
Git команда git log --oneline --all --graph рисует нам график где мы можем увидеть отдельные ветки
Git команда git checkout -b html_css (создание новой ветки) переходим и называем нашу ветку по типу разработчика, 
это веткой будет заведовать новый верстальщик например
Git команда git push -u origin "название ветки(master)" отправляет вашу ветку на GitHub.com
Git команда git pull lesson01 можем вытягивать файл из нашего проекта находясь на другом компьютере 
*/