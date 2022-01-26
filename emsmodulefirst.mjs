//to use ES(ecma scripts) module ........add{ "type":"module", } in package.json 


// import {simple} from "./emsmodulesecond.mjs"

// import {simple2} from "./emsmodulesecond.mjs"

// import {simple2 as simple} from "./emsmodulesecond.mjs"
// simple2()
// simple()

import * as a3 from "./emsmodulesecond.mjs" //use star to print both simple and somple2

console.log(a3)
console.log(a3.simple())
// a3()