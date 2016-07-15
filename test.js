"use strict";
let a = function () {

};

let b = ()=>{};

console.log(a,b);
//[Function] [Function]

console.log(a.prototype,b.prototype);
//{} undefined
