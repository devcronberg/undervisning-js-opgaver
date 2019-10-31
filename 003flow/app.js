"use strict";

for (let i = 1; i < 11; i++) {
  let txt = "";
  for (let x = 1; x < 11; x++) {
    txt += (x * i).toString().padStart(5);
  }
  console.log(txt);
}
