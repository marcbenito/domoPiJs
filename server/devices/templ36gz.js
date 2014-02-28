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
	this.unit = 'º';

	this.hard.on('data', function() {
		var voltage = this.value * 5.0;
		voltage /= 1024.0;
		var celsius = (voltage - 0.5) * 100;

		self.value = celsius.toFixed(1);
	});
	return this;

};

module.exports = TempSensor;