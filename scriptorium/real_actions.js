/**
 * Created with JetBrains WebStorm.
 * User: itsme
 * Date: 11.11.12
 * Time: 16:38
 */

/*
 * 	Добавляет элементы
 * 	@params {string} parentId 	-id родительского элемента
 * 	@params {string} sourceClass	-класс клонируемого элемента
 * 	@params {string} wrapElem	-обертывающий элемент
 * */
var formFieldCounter = 0;

function cloneElem(parentId, sourceClass, wrapElem, addDelButton){
	//находим родительские элементы
	var parent = document.getElementById(parentId),
		source = document.getElementsByClassName(sourceClass)[0],
		addButton = document.getElementsByClassName('add_field')[formFieldCounter],
	//создаем новые элементы
		clone = document.createElement(source.tagName),
		newAddButton = document.createElement('input');

	//увеличеваем глобальный счетчик
	++formFieldCounter;

	//клонируем свойства элемента
	clone.className = source.className;
	clone.type = source.type;
	clone.value = '';
	//удаляем индекс в имени источника
	source.name = source.name.slice(0, source.name.length - 1);
	clone.name = source.name + formFieldCounter;//todo пофиксить мешанину с именами
	//возвращаем индекс источнику
	source.name = source.name + (formFieldCounter - 1);

	//клонируем кнопку клонирования))
	newAddButton.type = addButton.type;
	newAddButton.className = addButton.className;
	newAddButton.value = addButton.value;
	newAddButton.title = addButton.title;

	//добавляем событие на новую кнопку
	newAddButton.addEventListener('click', function() { cloneElem(parentId, sourceClass, wrapElem, addDelButton) }, false);

	//действия с первоначальным объектом
	if(addDelButton) {
		createDelButton(addButton, 'x', wrapElem);
	}else {
		addButton.style.display = 'none';
	}

	//добавляем элементы в документ
	if(wrapElem) {
		var wrapper = document.createElement(wrapElem);
		parent.appendChild(wrapper);
		wrapper.appendChild(clone);
		wrapper.appendChild(newAddButton);
	}else {
		parent.appendChild(clone);
		parent.appendChild(newAddButton);
	}
}

/*
* 	создает кнопку, удалящую указанные элементы
* 	@params {object} 	elemToBeReplaced - элемент под замену
* 	@params {string} 	buttonValue - значение кнопки
* 	@params {object} 	hasWrapper - удалять ли wrapper
* */
	function createDelButton(elemToBeReplaced, buttonValue, hasWrapper) {
		//создаем кнопку
		var delButton = document.createElement(elemToBeReplaced.tagName),
			delButtonParent = elemToBeReplaced.parentNode,
			delButtonTarget = delButtonParent.firstChild;
			//удаляем из target всякий мусор, вроде text node и comments
			while(true) {
				if(delButtonTarget.nodeType !== 1){
					delButtonTarget = delButtonTarget.nextSibling;
				}else if(delButtonTarget === null) {
					console.log('нечего удалять');
				}else {
					break;
				}
			}
			//копируем параметры
			delButton.type = elemToBeReplaced.type;
			delButton.className = elemToBeReplaced.className;
			delButton.value = buttonValue;
			delButton.title = 'удалить поле';
			delButton.addEventListener('click', function() {if(hasWrapper) { deleteElem(delButtonParent); }else { deleteElem(delButtonTarget, 0.5); deleteElem(delButton, 0.5); } }, false);

			//удаляем заменяемый элемент и вставляем кнопку
			delButtonParent.removeChild(elemToBeReplaced);
			delButtonParent.appendChild(delButton);

			while(currentElem !== delButtonParent.lastChild) {
				var currentElem = delButtonParent.firstChild;
				if(currentElem.nodeType === 3) {
					delButtonParent.removeChild(currentElem);

				}else {
					currentElem = currentElem.nextSibling;
				}
			}
	}
/*
* 	удаляет указанный элемент и родителя, при необходимости
* 	@params {object} - target удаляемый элемент
* 	@params {number} - innerDelCount внутренний счетчик удалений, нужен для случая без wrapper
* */

	function deleteElem(target, innerDelCount) {
		if( confirm('действительно удалить?') ) {
			target.parentNode.removeChild(target);
			if(innerDelCount) {
				formFieldCounter -= innerDelCount * 2;
			}else {
				--formFieldCounter;
			}
		}
	}