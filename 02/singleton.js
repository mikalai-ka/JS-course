"use strict";

var Singleton = new function(){
    var instance = this;
    return function(){return instance}
}
console.log(new Singleton === new Singleton);