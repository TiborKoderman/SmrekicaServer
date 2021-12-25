const WebSocket = require('ws');
const mqttlib = require('mqtt');


const ws = new WebSocket.Server({port:3003});

ws.on('connection', function connection(wsConnection) {

  let mqtt = mqttlib.connect('mqtt:koderman.net');

  wsConnection.on('message', (message) => {
    message = message.toString();
    console.log(message);
    if(message.includes('#')){
      mqtt.publish('treeColor',message.slice(1));
    }
    else
      mqtt.publish('treeMode',message);
  });

});