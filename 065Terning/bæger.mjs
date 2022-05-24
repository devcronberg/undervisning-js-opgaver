import { Terning } from "./Terning.mjs";

export class Bæger {
  constructor() {
    this._terninger = [];
    for (let index = 0; index < 6; index++) {
      this._terninger.push(new Terning(1));
    }
  }

  print() {
    let t = "";
    for (let i = 0; i < 6; i++) {
      t += this._terninger[i].print();
    }
    return t;
  }

  ryst() {
    for (let i = 0; i < 6; i++) {
      this._terninger[i].ryst();
    }
  }
}
