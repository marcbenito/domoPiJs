'use strict';

var _ = require('underscore');

module.exports = function(app, home) {

	//LISTADO DE DEVICES
	app.get('/', function(req, res) {

		var elems = home.getList();
		
		var transformed = _.map(elems, function(elem) {
			
			var obj = {
				name:elem.name,
			};
			if(elem.type === 'light'){
				obj.path = '/light/';
			}
			else if (elem.type === 'percentage') {
				obj.path = '/percentage/';
			}
			else{
				obj.path = '/sensor/';
			}
			obj.path = obj.path + elem.pin;
			return obj;
		});

		res.render('list.html', {elements:transformed});
	});

	app.get('/light/:lightId', function(req, res) {
		var dev = home.get(req.params.lightId);
		var obj = {
			id: dev.pin,
			name: dev.name,
			value: ''+ dev.value
		};
		res.render('light.html', obj);
	});
	app.get('/light/:lightId/value', function(req, res) {
		var dev = home.get(req.params.lightId);
		var obj = {
			id: dev.pin,
			name: dev.name,
			value: ''+ dev.value
		};
		res.send(obj);
	});
	app.post('/light/:buttonId', function(req, res) {

		
		home.get(req.params.buttonId).set(req.body.value === 'true');
		res.send(201);
	});
	app.get('/percentage/:buttonId', function(req, res) {
		var dev = home.get(req.params.buttonId);
		
		var obj = {
			id: dev.pin,
			name: dev.name,
			value: dev.value
		};
		res.render('percentage.html', obj);
	});
	app.get('/percentage/:buttonId/value', function(req, res) {
		var dev = home.get(req.params.buttonId);
		
		var obj = {
			id: dev.pin,
			name: dev.name,
			value: dev.value
		};
		res.send(obj);
	});

	app.post('/percentage/:percentageId', function(req, res) {
		
		var sensor = home.get(req.params.percentageId);
		if(sensor !== undefined){
			sensor.set(req.body.value);
		}
		res.send(201);
	});

	app.get('/sensor/:sensorId', function(req, res) {
		var dev = home.get(req.params.sensorId);
		var obj = {
			id: dev.pin,
			name: dev.name,
			value: dev.value
		};
		res.render('sensor.html', obj);
	});
	app.get('/sensor/:sensorId/value', function(req, res) {
		var sensor = home.get(req.params.sensorId);
		
		if(sensor !== undefined){

			res.send(200, {val:sensor.value});
		}
		else{
			res.send(200, {val:0});
		}

		
	});
};