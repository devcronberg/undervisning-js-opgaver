"use strict";

function lægSammen(a, b) {
  return a + b;
}

function skriv(a) {
  console.log(a);
}

let res = lægSammen(5, 5);
skriv(res);

// eller blot på samme linje

skriv(lægSammen(15, 25));
