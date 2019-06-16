//"use strict";


function sleep(sec){
    var exitTime = new Date().getTime() + sec*1000;
    while (new Date().getTime() < exitTime){}
}

console.log(new Date()); // Sun Oct 08 2017 10:44:34 GMT+0300 (+03)
sleep(9);
console.log(new Date()); // Sun Oct 08 2017 10:44:43 GMT+0300 (+03)

