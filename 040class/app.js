"use strict";

class Bil {
  constructor(mærke, model, årgang) {
    this._mærke = mærke;
    this._model = model;
    this._årgang = årgang;
  }
  skriv() {
    console.log(`${this._mærke} ${this._model} fra ${this._årgang}`);
  }
}

class Lastbil extends Bil {
  constructor(mærke, model, årgang, totalVægt) {
    super(mærke, model, årgang);
    this._totalVægt = totalVægt;
  }

  skriv() {
    console.log(
      `${this._mærke} ${this._model} fra ${this._årgang} som har en total vægt på ${this._totalVægt}`
    );
  }
}

let bil = new Bil("VW", "Golf", 2022);
bil.skriv();

let lastbil = new Lastbil("Volve", "X1", 2000, 10000000);
lastbil.skriv();
