import { Bæger } from "./bæger.mjs";
import { Terning } from "./Terning.mjs";

let t = new Terning(5);
console.log(t.print());
t.ryst();
console.log(t.print());

let b = new Bæger();
console.log(b.print());
b.ryst();
console.log(b.print());
