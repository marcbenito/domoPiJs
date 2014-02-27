'use strict';
var five = require('johnny-five');


var Light = function(pin, label) {
	this.pin = pin;
	this.value = false;
	this.name = label;
	this.hard = new five.Led(pin);
	this.type = 'light';
	return this;
	
};

Light.prototype.set =function(value) {
	this.value = value;
	if(value){
		this.hard.on();
	}
	else{
		this.hard.off();
	}
};


module.exports = Light;