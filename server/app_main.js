'use strict';

console.log('LOADING...');


var CONFIG = require('../config.json');


var express = require('express'),
    app = express();


var HouseController = require('./house_controller.js');
    



app.configure(function() {

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.compress());
    app.use(express.cookieParser());
    app.use(express.static(__dirname + '/../public'));
    app.set('view engine', 'html');
    app.set('views', __dirname + '/../templates');
    app.engine('html', require('hbs').__express);



});



var house = new HouseController(function() {
    console.log('Ready.....');
    console.log('Server listening on port: %d', CONFIG.serverPort);
    require('./router')(app, house);
    app.listen(CONFIG.serverPort);
    house.append( new HouseController.Percentage(6,'Persiana'));
    house.append( new HouseController.Light(3,'Luz Comedor'));
    house.append( new HouseController.TempSensor(4,'Temperatura comedor'));
    house.append( new HouseController.TempSensor(5,'Temperatura Artificial'));
});
