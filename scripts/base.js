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

function reduce(callback, initialValue, source) {

	let result;
	let previousValue;

  	previousValue = initialValue || previousValue = source[0];	

  
  for (let i = 0; i < source.length; i++) {
 		previousValue = callback(previousValue, source[i], i, source);
  	result = previousValue;
  }
	
  return result;
}