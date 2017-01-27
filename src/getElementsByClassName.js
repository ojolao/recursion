// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/* You should use document.body, element.childNodes, and element.classList */

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //define output
  //search through the document.body.childNodes
  var output = [];
  function search(node){
  	if(node.classList){
  		if(node.classList.contains(className)){
  		output.push(node);
  	}
  }
  	node.childNodes.forEach(function(child){
  		search(child);
  	});
  }
  search(document.body);
  return output; 
};
