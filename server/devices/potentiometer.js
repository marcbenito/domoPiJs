'use strict';
var five = require('johnny-five');

var TempSensor = function(pin, label) {
	var self = this;
	this.pin = pin;
	this.value = 0;
	this.name = label;
	this.hard = new five.Sensor({
		pin: pin,
		freq: 250
	});
	this.type = 'sensor';
	this.unit = ' %';

	this.hard.scale([0, 100]).on('change', function() {

		self.value = parseInt(this.value);
	});
	return this;

};

module.exports = TempSensor;