'use strict';

console.log('LOADING...');


var CONFIG = require('./config.json');


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
    require('./router')(app, house);
    app.listen(CONFIG.serverPort);
    console.log('Server listening on port: %d', CONFIG.serverPort);
    //house.append( new HouseController.Percentage(6,'Percentage Dev')); //For PWM usage
    house.append( new HouseController.Light(2,'Light 2')); //For swhitch lights on pin 3
    house.append( new HouseController.Light(5,'Light 5'));
    house.append( new HouseController.Light(7,'Light 7'));
    house.append( new HouseController.TempSensorLm35('A0','Temperature sensor lm35')); 
    //house.append( new HouseController.distanceSharp('A1','Distancia'));
    //house.append( new HouseController.TempSensorL36Gz('A1','Temperature sensor l36GM')); 
    //house.append( new HouseController.Potentiometer('A1','Potentiometer')); 
    //house.append( new HouseController.LightSensor('A1','Light sensor')); 

   
});
