const os = require('os'); // we dont use ./ bcz os is a built in module

console.log(os.freemem()) //freememory of my operating system
console.log(os.homedir()) // home directory of my operating system
console.log(os.hostname()) //host name of my os
console.log(os.platform())
console.log(os.release())
console.log(os.type())