// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //return typeOf and process, holding out for arrays and objects
  var toType = function(x) {
  	return ({}).toString.call(x).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

/* - Number-return obj
- String- " + obj + "
- Boolean
- Array
- Object
- Function- null
- Null- null
- Undefined - null */
  if(toType(obj) === 'boolean'){
  	return obj + '';
  } 
  if(toType(obj) === 'null' || toType(obj) === 'function' || toType(obj) === 'undefined'){
  	return null + '';
  }
  if(toType(obj) === 'string'){
  	return '"' + obj + '"';
  }
  if(toType(obj) === 'number'){
  	return obj + '';
  }
  if(toType(obj) === 'array'){
  	return '[' + obj.map(function(item){
  		return stringifyJSON(item);
  	}).join(',') + ']';
  }
  if(toType(obj) === 'object'){
  	var output = [];
  	Object.keys(obj).forEach(function(key){
  		var stringed = stringifyJSON(obj[key]);
  		if(typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function'){
  			output.push('"' + key + '":' + stringed);
  		}
  	});
  	return '{' + output.join(',') + '}';
  }
};
