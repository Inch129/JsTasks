//написать функцию, которая принимает массив(используя мои функции), умножать каждый элемент на три,
// рассчитывать сумму всех элементов возведенного в куб и возвращать.

//объявляю функцию, передаю массив
function task1 (arr) {
	//создаю временный массив, содержащий элементы, умноженные на три, используя мою функцию.
	//первым параметром передаю исходный массив.Вторым колбек, в который передаю текущий элемент.
	//к каждому переданному элементу будет применяться этот колбек.
	let coubs = map(arr, function (item) {
	//тело колбека, каждый элемент умножается на 3, возвращается в функцию task1, и помещается в конечный массив
	//который будет выведен и помещен в coubs.
		return item * item * item;
});

	//объявляю конечный массив, который будет возвращаться функцией task1.
	//функция reduce принимает 3 параметра: первый это колбек, второй - некоторое значение, с которого будет начинаться массив
	//и третий, исходный массив
	let result = reduce(coubs, function (temp, item){
	//суммирую последний вызов и текущий элемент, и возвращаю	
		return temp + item;
	}, 0);

	return result;
}

let test = [0, 2, 4, 5, 7];
console.log(task1(test));

Array.prototype.map = function(callback) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(callback(this[i], i));
	}

	return result;
};

Array.prototype.reduce = function(callback, initialValue) {
	let result;
	let previousValue;
	let i;
  	if (typeof initialValue !== "undefined") {
  		previousValue = initialValue;
  		i = 1;
  	} else {
  		previousValue = source[0];
  		i = 0;
  	}

    for (i; i < this.length; i++) {
 		previousValue = callback(previousValue, this[i], i, this);
  		result = previousValue;
  	}
	
  return result;
};

function task2 (arr) {

	return arr.map(function(item){
		return item * item * item;
	}).reduce(function(sum, currentItem){
		return sum + currentItem;
	}, 0);

/*	let coubs = arr.map(function(item) {
		return item * item * item;
	});

	let result = coubs.reduce(function(sum, currentItem) {
		return sum + currentItem;
	}, 0);

	return result;*/
}

let test2 = [0, 2, 4, 5, 7];
console.log(task2(test2));