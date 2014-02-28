'use strict';
var five = require('johnny-five');

var sharpSensor = function(pin, label) {
	var self = this;
	this.pin = pin;
	this.value = 0;
	this.name = label;
	this.hard = new five.Sensor({
		pin: pin,
		freq: 250
	});
	this.type = 'sensor';
	this.unit = 'cm';

	this.hard.on('data', function() {
		var i = this.value;
		var  val=(6762/(i-9))-4;
		//var celsius = (voltage - 0.5) * 10;
		self.value = val.toFixed(1);
	});
	return this;

};

module.exports = sharpSensor;