//function declaration
function getData() {
return ['Minh', 22]
}

//function expression
const getData = function(){
	return ['Minh', 22]
}
getData()

let [name, age] = getData()


function plus(a, b){
	function multiply(c, d){
		return c*d;
	}
	return a+b+multiply(2, 3);
}

//Arrow function
const plus = (a, b)=>{
	const multiply = (c, d)=>{
		return c*d;
	}
	return a+b+multiply(2, 3);
}