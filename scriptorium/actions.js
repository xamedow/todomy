
//тренировка JS 
//модальные окна
	/*var userLogin = prompt('Введите логин','');
	if(userLogin == undefined){
		alert('Вход отменен');
	}else if (userLogin == 'Админ'){
		var userPass = prompt('Введите пароль','');
		if(userPass == '0696'){
			alert('Добро пожаловать!');
		}else if(userPass == undefined){
			alert('Вход отменен');
		}else{
			alert('Пароль неверен');
		}
	}else{
		alert('Я Вас не знаю');
	}*/
	
//тернарный оператор
	/*var result = (26 < 27)?alert('ага'):alert('а как же так?');
	var login = prompt('Введите логин','');
	var message = (login == 'Вася')?'Привет!':
	(login == 'Директор')?'Здраствуйте!':
	(login == '')?'нет логина':'';
	alert(message);*/
	
//логика
	/*var userAge = prompt('Введите возраст','');
	if(!(userAge >= 14) || !(userAge <= 90)){
		alert('Access granted');
	}else{
		alert('Access denied');
	}*/
//switch
	// конструкция с if
	/*
	var userBrowser = 'Firefox';
	if(userBrowser ==='Firefox'||userBrowser ==='Chrome'||userBrowser ==='Opera'||userBrowser ==='Safari'){
		alert('Да, и эти браузеры мы поддерживаем');
	}else if(userBrowser === 'IE'){
		alert('О, да у вас IE!');
	}else{
		alert('Мы надеемся, что и в вашем браузере все ок!');
	}
	//та же конструкция с switch
	switch (userBrowser){
		case 'Firefox':
		case 'Chrome':
		case 'Safari':
		case 'Opera':
			alert('Да, и эти браузеры мы поддерживаем');
		break;
		case 'IE':
			alert('О, да у Вас IE!');
		break;
		default:
			alert('Мы надеемся, что и в вашем браузере все ок!');
		break;
	}
	//
	var a = prompt('a?','');
	switch(a){
		case '0':
			alert(0);
		break;
		case '1':
			alert(1);
		break;
		case '2':
		case '3':
			alert('2 или 3');
		break;
	}*/
//функции
	//функция получения минимума
	function getMin(a,b) {
		if(a < b){
			return a;
		}else if(a > b){
			return b;
		}else{
			return 'equal';
		}
	}
//console.log(getMin(0,0));
	//функция возведения в степень
	function pow(x, n) {
		//проверка на ошибки вызова
		if(x === undefined||n === undefined){
			return 'Рабочие данные отсутствуют';
		}
		//проверка на соответствие данных
		else if(isNaN(x)||isNaN(n)){
			return 'Проверьте данные: число = ' + x + ', степень = ' + n;
		//проверка на отмену ввода
		}else if(x === null||n === null){
			return 'Ввод отменен';
		//собственно работа функции
		}else{
			var text = "Число "+x+" в степени "+n+" равно "; //рыба
			//проверка используемого числа на ноль, результат 0
			if(+x === 0){
				return text+0;
			//проверка степени на ноль, результат 1
			}else if(+n === 0){
				return text+1;
			}else{
			//переменная nAbs - модуль степени числа
				var result = x, nAbs = Math.abs(n);
				for(var i=1; i<n; ++i){
					result *= x;
				}
				/*if(n > 0){
					return text + result;
				}else{
					return text + 1/result;
				}*/
				return result;
			}
		}
	}
//var x = prompt('Введите число',''), n = prompt('Введите степень числа','');
//console.log(pow(x,n));
//функция суммирования с 1 по n
	function sumToLoop(n) {
		for(var i=1; i<=n; ++i){
			result += i;
		}
		return result;
	}
//то же с рекурсией
	function sumToRec(n) {
		if(n == 1){
			return 1;
		}
		return n + sumToRec(n-1);
	}
//то же используя формулу суммы арифметической прогрессии
	function sumToProgression(n) {
		return n * (1 + n) / 2;
	}
/*var n = +prompt('Введите число');
var fish = 'Сумма чисел с 1 по ' + n + ' равна ';
console.log(fish + sumToRec(n));*/
// функция определения факториала с помощью рекурсии
	function factorial(n) {
		if(n === 1){
			return 1;
		}
		return n * factorial(n-1);
	}
/*var n = +prompt('Введите число','');
var fish = 'факториал введенного числа равен ';
console.log(fish + factorial(n));*/
//функци вычисления чисел Фибоначчи
	function fib(n) {
		if(n >=2){
			return fib(n-1)+fib(n-2);
		}else if(n === 1){
			return 1;
		}else{
			return 0;
		}
	}
//то же с использованием идеи динамического программирования
//комментарии в стиле JSDocs
/*
*	Возвращает число Фибоначчи j с индексом n
*
	* @param {number} n Индекс числа Фибоначчи
	* @return {number} j Число Фибоначчи с индексом n
* */
	function fibDynamics(n) {
		var a = 0, b = 1, j;
		for (var i=1; i<n; ++i) {
			j = a + b;
			a = b;
			b = j;
		}
		return j;
	}
/*var userInput = prompt('Введите индекс числа Фибоначчи','');
console.log('число Фибоначчи с индексом ' + userInput + ' равно ' + fibDynamics(userInput) );*/
/*
* 	Возвращает исходную строку, с первым символом в верхнем регистре
* 	@params {string} inString вводимая строка
*	@return {string} outString форматированная строка
* */
/*var userString = prompt('Введите строку','');
var userNeedle = prompt('Введите строку поиска','');
console.log('позиция строки поиска ' + userString.indexOf(userNeedle) );
console.log( firstSymbolUp(userString) );*/

	function firstSymbolUp(inString) {
		if( !isEmpty(inString) ) {
			var outString = '';

			for (var i = 1; i <= inString.length; ++i) {
				 outString += inString.charAt(i);
			}

			return inString.charAt(0).toUpperCase()+outString;
		}
		return '';
	}
	function isEmpty(inString) {
		return (inString === null || inString === undefined || inString === '');
	}
/*
* 	Возвращает 'true' в случае, если найдены подстроки 'xxx' или 'viagra'
* 	@params {string} inString вводимая строка
*/
/*var userInput = prompt('Введите строку','');
console.log( checkSpam(userInput) );*/
	function checkSpam(inString) {
		instring.toLowerCase();
		return !!( ~inString.indexOf('xxx') || ~inString.indexOf('viagra') );
	}
/*
* 	Возвращает усеченную строку, если исходная строка больше, чем максимально заданная длина
	* 	@params {string} inString вводимая строка
	*	@params {string} maxLength максимальная длина
* */
/*var userInput = prompt('Введите строку','');
console.log( truncate(userInput, 20) );*/
 	function truncate (inString, maxLength) {
		if( !isEmpty(inString) ) {
			if( inString.length > maxLength) {
				return inString.slice(0, maxLength - 3) + '...';
			}
			return inString;
		}
	}
/*
* 	Возвращает сумму аргументов
* 	@params {number} firstNum
* 	@params {number} secondNum
	@return {number} sum
* */
	function getSum (firstNum, secondNum) {
		var sum = 0;
		if( !isEmpty(firstNum) || !isEmpty(secondNum) ) {
			return ( !isNaN(firstNum) || !isNaN(secondNum) ) ? sum = firstNum + secondNum : NaN;
		}
		return 0;
	}
/*var userNum1 = +prompt('введите первое число','');
var userNum2 = +prompt('введите второе число','');
console.log('сумма введенных чисел равна ' + getSum(userNum1, userNum2) );*/

/*
* 	Возвращает дробную часть переданного числа
* 	@params {number) fullNum
	@return {number} десятичная часть
* */
	function getDecimal () {
		var n = 12.34;
		alert( (n - n.toFixed(0)).toFixed(6) );
	}
//getDecimal();

	function getFibBine (n) {
		var fi =  ((1 + Math.sqrt(5) ) / 2);
		return Math.pow(fi, 77);
	}
//console.log( getFibBine(77) );
//console.log( 5527939700884757 );//эталонный результат
/*	Возвращает случайно сгенерированное число от 0 до max
*	@params {number} max верхний диапазон
*	@return {number) result случайное число
* */
	function randomRoundMinMax (max, min) {
		return Math.round( ( Math.random() * (max-min + 1) + min-0.5) ); //прибавляем по 0,5 к max  отнимаем 0,5 для min, чтобы учесть работу Math.round @fork делаем через Math.floor
	}
//var userInput = prompt('Введите максимум','');
//console.log( randomRoundMinMax(670, 590) );


//*-*-*-*-*-*-*-*-* объекты

var newObj ={};
var user = {}; //создание пустого объекта user
user.name = 'Вася'; // создание свойства name со значением Вася через точечную нотацию
user['secondName'] = 'Петров'; //создание свойства secondName со значением Петров через квадратные скобки
user['name'] = 'Сергей'; //смена значения свойства name на 'Сергей'
user.dimensions = {
	width: '120px',
	height: '220px',
	depth: '50px'
};
//delete user.name; //удаление свойства name
//console.log('name' in user); // проверка существования свойства name, объекта user

/*for(var key in user) {
	console.log(key + ': ' + user[key] );
}*/

/*
* 	Считает элементы в массиве
* 	@params {string} inObject - входящий массив/объект
* 	@return {number} counter количество объектов
* */
	function objCounter(inObject) {
		var counter = 0;
		for(var key in inObject) {
			counter++;
		}
		return counter;
	}
//console.log( objCounter(newObj) );
/*	multiplyProps()
* 	умножает числовые свойства в объекте
* 	@params {object} inObj входящий объект
 	@params {number} n коэффициент умножения
 	@return {object} inObj измененный объект
* */

	function multiplyProps(inObj, n) {
		for(var key in inObj) {
			if ( isNumeric(inObj[key]) ) {
				inObj[key] *= n;
			}
		}
		return inObj;
	}
var newObj1 = {
	width: 160,
	height: 100,
	depth: '50px'
};
//console.log( multiplyProps(newObj1, 3) );
var newArr =[1234, 'item1', 'item2', {name: 'Андрей'} ];
newArr[newArr.length] = 'item3';
//alert ( newArr[newArr.length-1] );

var styles = ['Блюз', 'Джаз'];
styles.push('Рок-н-ролл');
styles[styles.length-2] = 'Классика';
styles.unshift('Реп','Рэгги');
//alert( styles.shift() );

//alert (styles);
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor( Math.random() * arr.length );
//alert (arr[rand]);


/*
* 	Возвращает массив уникальных элементов, входящего массива
* 	@params {array} inArr входящий массив
*	@return {array} outArr массив уникальных элементов
* */

//вариант с перебром
	function unique(inArr) {
		var outArr = [];
		outArr[0] = inArr[0];

		for(var i = 1; i < inArr.length; ++i) {
			if(outArr[i-1] !== inArr[i]) {
				outArr.push(inArr[i]);
			}
		}
		return outArr;
	}

var prey = ['хари', 'хари', 'кришна', 'хари', 'хари', 'кришна'];
//console.log( unique(prey) );