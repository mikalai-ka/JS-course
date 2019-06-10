"use strict";

var calculator = {
	'+': function(){
		return +this.a + +this.b;
	},
	'-': function(){
		return this.a - this.b;
	},
	'*': function(){
		return this.a * this.b;
	},
	'/': function(){
		return this.a / this.b;
	},
	'read': function(){
		this.a = prompt('a?',0);
		this.operation = prompt('operation: + - * /',"");
        this.b = prompt('b?',0);
        return this.operation;
	}
}
var action = calculator.read();
alert( 'Ressult is: ' + calculator[action]() );
//console.log( calculator.minus() );
//console.log( calculator.mult() );
//console.log( calculator.divide() );
