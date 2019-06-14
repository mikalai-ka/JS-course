//"use strict";

var o = {};
Object.defineProperty(o, 'magicProperty',{
	get: function() {
		return ++this.property;
	  },
	
	set: function(value) {
			this.property = value;
			console.log(new Date() + " --- " + this.property);
		}
})
o.magicProperty = 5; // Sat Nov 17 2018 21:51:51 GMT+0300 (Moscow Standard Time) --- 5
console.log(o.magicProperty); // 6
console.log(o.magicProperty); // 7
console.log(o.magicProperty); // 8
o.magicProperty = 7; // Sat Nov 17 2018 21:51:51 GMT+0300 (Moscow Standard Time) --- 7