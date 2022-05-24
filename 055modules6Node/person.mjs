// extra
import { env } from "./environment.mjs";

export class Person {
  constructor(navn, alder) {
    this._navn = navn;
    this._alder = alder;
  }
  skriv() {
    let t = `Jeg hedder ${this._navn} og er ${this._alder} år gammel`;
    // ekstra
    if (env === "debug") console.log("DEBUG " + t);
    else console.log(t);
  }
}
