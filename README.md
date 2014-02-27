domoPiJs
========

Domotics system based on RaspBerryPI and NodeJS

#### Installation  on Rasperry PI

- [Download Raspbian](http://www.raspberrypi.org/downloads)
- Install the image into SD Card. ([Click here for more info](http://elinux.org/RPi_Easy_SD_Card_Setup))
- Once installed, execute this to install nodejs:

``` bash
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
node -v

```



## Setup and Assemble Arduino

- Download [Arduino IDE](http://arduino.cc/en/main/software)
- Plug in your Arduino or Arduino compatible microcontroller via USB
- Open the Arduino IDE, select: File > Examples > Firmata > StandardFirmata
- Click the "Upload" button.

If the upload was successful, the board is now prepared and you can close the Arduino IDE.


#### Running the project:

First of all, we have to configure the Arduino for work with Raspberry using firmata. Follow this instructions

``` bash
git clone git://github.com/sbennel/domoPiJs.git && cd domoPiJs

npm install

bower install

npm start

```

### Enjoy!!

[http://localhost:3000](http://localhost:3000)


