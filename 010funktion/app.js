"use strict";

function prisMedMoms1(pris, moms) {
  return pris * (1 + moms);
}

function prisUdenMoms1(pris, moms) {
  return pris / (1 + moms);
}

const prisMedMoms2 = function(pris, moms) {
  return pris * (1 + moms);
};

const prisUdenMoms2 = function(pris, moms) {
  return pris / (1 + moms);
};

const prisMedMoms3 = (pris, moms) => pris * (1 + moms);
const prisUdenMoms3 = (pris, moms) => pris / (1 + moms);

console.log(prisMedMoms1(100, 0.25));
console.log(prisUdenMoms1(100, 0.25));
console.log(prisMedMoms2(100, 0.25));
console.log(prisUdenMoms2(100, 0.25));
console.log(prisMedMoms3(100, 0.25));
console.log(prisUdenMoms3(100, 0.25));
