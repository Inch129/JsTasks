/**@depricated since date*/
function map(source, callback) {

	let result = [];
	for (let i = 0; i < source.length; i++) {
		result.push(callback(source[i], i));
	}

	return result;
}

function filter(source, callback) {

	let result = [];
	for (let i = 0; i < source.length; i++) {
		if (callback(source[i], i)) {
			result.push(source[i]);
  		}
	}
  
  return result;
}

function reduce(source, callback, initialValue) {

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

    for (i; i < source.length; i++) {
 		previousValue = callback(previousValue, source[i], i, source);
  		result = previousValue;
  	}
	
  return result;
}
