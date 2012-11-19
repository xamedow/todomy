/*	Библиотека часто используемых функций
	Создание: 05-11-2012
	Редактирование: 05-11-2012
	Последняя функция: isNumeric()
* */

/*	isNumeriс
	логика - являеться ли числом
	@params {number} inNum входящий примитив
* 	@return {boolean} true/false
* */
	function isNumeric(inNum) {
		return  !isNaN( parseFloat(inNum) ) && isFinite(inNum) ;
	}

/*	countProps
	считает количество элементов в объекте/массиве
* 	@params {object} inObj входящий объект
* 	@return {number} counter количество элементов
* */
	function countProps(inObj) {
		var counter = 0;
		for(var key in inObj) {
			counter++;
		}
		return counter;
	}
