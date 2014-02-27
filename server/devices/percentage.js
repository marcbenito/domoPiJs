'use strict';
var five = require('johnny-five');


var Percentage = function(pin, label) {
	this.pin = pin;
	this.name = label;
	this.hard = new five.Servo({
		pin:pin
	});
	this.value = 0;
	this.type = 'percentage';

	return this;
	
};
Percentage.prototype.set = function(value) {
	this.value = value;
	var angle  = value * 180/100;
	this.hard.to(angle);
};

module.exports = Percentage;