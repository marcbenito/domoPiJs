'use strict';


//THIS CLAS IS FOR TESTING WEB-COMPONENTS

var _ = require('underscore');



var Light = function(pin, label) {
	this.pin = pin;
	this.value = false;
	this.name = label;
	this.hard = {}
	this.type = 'light';
	return this;
	
};
Light.prototype.set =function(value) {
	this.value = value;
	
};


var Percentage = function(pin, label) {
	this.pin = pin;
	this.name = label;
	this.hard ={}
	this.value = 0;
	this.type = 'percentage';

	return this;
	
};
Percentage.prototype.set = function(value) {
	this.value = value;
	var angle  = value * 180/100;
	
};


var TempSensor = function(pin, label) {
	var self = this;
	this.pin = pin;
	this.value = 0;
	this.name = label;
	this.hard = {}
	this.type = 'tempsensor';

	setInterval(function() {
		self.value = _.random(10,25);
	},1000);
	return this;

};

var houseController = function(cb) {
	
	
	this.board ={}
	this.devices = {};

	setTimeout(cb,1)


	return this;

};

houseController.prototype.getList=  function() {
	
	return this.devices;
};
houseController.prototype.append = function(device) {
	
	this.devices[''+device.pin] = device;
	
};
houseController.prototype.get = function(pin) {
	
	return this.devices[''+pin];
};


houseController.Light = Light;
houseController.TempSensor = TempSensor;
houseController.Percentage = Percentage;



module.exports = houseController;