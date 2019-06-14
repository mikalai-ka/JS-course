"use strict";

var calculate = function (sign){
	var operator = sign;
	return function(x1){
		var a = x1;
		return function (x2){
			return eval(x1 + sign + x2);

		}
	}
}
console.log(calculate("+")(1)(2) === 3);
console.log(calculate("*")(4)(2) === 8);
console.log(calculate("/")(9)(3) === 3);
console.log(calculate("-")(8)(7) === 1);
