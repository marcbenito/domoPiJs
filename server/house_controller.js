'use strict';

var _ = require('underscore');
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


var TempSensor = function(pin, label) {
	var self = this;
	this.pin = pin;
	this.value = 0;
	this.name = label;
	this.hard = new five.Sensor({
		pin: pin,
		freq: 250
	});
	this.type = 'tempsensor';

	this.hard.on('data', function() {
		var voltage = this.value * 0.004882814;
		var celsius = (voltage - 0.5) * 10;
		self.value = celsius.toFixed(1);
	});
	return this;

};

var houseController = function(cb) {
	
	
	this.board = new five.Board();
	this.devices = {};

	this.board.on('ready', function() {
		console.log('BOARD READY');
		
		cb();
	});

	this.board.on('error', function(err) {
		console.log('La placa ha petado', err);
		console.trace(err);
	});

	return this;

};

houseController.prototype.getList=  function() {
	
	return this.devices;
};
houseController.prototype.append = function(device) {
	
	this.devices[''+device.pin] = device;
	this.board.repl.inject({
		pin: device.hard
	});
};
houseController.prototype.get = function(pin) {
	
	return this.devices[''+pin];
};


houseController.Light = Light;
houseController.TempSensor = TempSensor;
houseController.Percentage = Percentage;



module.exports = houseController;