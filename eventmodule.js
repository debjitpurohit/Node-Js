const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn off motor!');

  setTimeout(() =>{
             console.log("Please turn off motor! its gentle reminder")
  },3000);
});

console.log("the scripts is running")
myEmitter.emit('WaterFull'); //node is is a non blocking ......jehetu 3 seccond time lagche {for Please turn off motor! its gentle reminder} taiii scripts is still running print hbe then reminder
console.log("the scripts is still running")