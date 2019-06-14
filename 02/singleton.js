"use strict";

var Singleton = new function(){
    var instance = this;
    return function inner(){
		instance.__proto__ = inner.prototype;
		return instance}
}
console.log(new Singleton === new Singleton);
console.log(typeof new Singleton() === "object");
console.log(new Singleton() instanceof Singleton === true);
console.log(new Singleton() === new Singleton());

//https://github.com/paveleroshkinweb/JS_LAB_TouchSoft