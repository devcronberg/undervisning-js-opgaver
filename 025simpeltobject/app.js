"use strict";

let person = {};
person.navn = "abc";
person.alder = 10;
skrivPerson(person);

function skrivPerson(p) {
  let t = `Jeg hedder ${p.navn} og er ${p.alder} år gammel`;
  console.log(t);
}
