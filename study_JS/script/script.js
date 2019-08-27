'use strict';

let money = +prompt('Ваш месячный доход'); 
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
console.log('Количесвтво месяцев округляя в большую сторону:', Math.ceil(periоd));
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
console.log(myStr.substr(6,9)); - первым параметром указываем индекс с какого символа мы начинаем брать подстрок и вторым параметрам указываем сколько символов мы хотим вернуть
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
console.log(Math.pow(5, 3)); //возводим в степень (Первое число которые необходимо возвести в степень, второй параметро в какую степень)
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
Git команда git pull lesson01 можем вытягивать файл из нашего проекта находясь на другом компьютере */