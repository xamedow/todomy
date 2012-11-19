//main.js ver. 0.0.1

	var field = document.getElementById('search_field');
function searchClear(){
	var check = /^название организации, адрес или вид деятельности$/g;
	if(check.test(field.value)){
		field.value = '';
	}
}
function searchFill(){
	var check = /^$/g;
	if(check.test(field.value)){
		field.value = 'название организации, адрес или вид деятельности';
	}
}