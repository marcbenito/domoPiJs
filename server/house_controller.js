'use strict';

var _ = require('underscore');
var five = require('johnny-five');





var houseController = function(cb) {
	
	
	this.board = new five.Board();
	this.devices = {};

	this.board.on('ready', function() {
		console.log('BOARD READY');
		
		cb();
	});

	this.board.on('error', function(err) {
		console.log('Board is down!!', err);
		console.log(trace);
		
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


houseController.Light = require('./devices/light');
houseController.TempSensorLm35 = require('./devices/templm35');
houseController.Percentage = require('./devices/percentage');
houseController.distanceSharp = require('./devices/distance_sharp');
houseController.TempSensorL36Gz = require('./devices/templ36gz');
houseController.Potentiometer = require('./devices/potentiometer');
houseController.LightSensor = require('./devices/light_sensor');



module.exports = houseController;