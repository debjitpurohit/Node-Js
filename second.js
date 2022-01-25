/////////////////////module wraper function ....nodejs automatically wraps 
//(function(exports, require , module , __filename , __dirname){



//object-------second.js is called common js module
debjit = {
    name: "debjit",
    favNum: 3,
    developer :true

}
//to access the second.js file on index.js (exports here)
console.log(exports, require , module , __filename , __dirname)
module.exports = debjit;

//})
