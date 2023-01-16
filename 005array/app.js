"use strict";

var a = [1, 5, 7, 15, 2, 6, 4];
console.log(a);
// console.log(a.join(" "));
a.push(5);
console.log(a);
var b = a.pop();
console.log("b=" + b);

a.forEach(function(v,i,a){
  console.log(v);
});

console.log(a);
a.sort();
console.log(a);

// ekstra

a.sort(function(a,b){
  if(a<b)
    return -1;
  if(a>b)
    return 1;
  return 0;
});


a.sort((a,b)=>{
  if(a<b)
    return -1;
  if(a>b)
    return 1;
  return 0;
});
console.log(a);
