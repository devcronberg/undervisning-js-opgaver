export class Terning {
  constructor(værdi) {
    if (værdi === undefined || værdi < 1 || værdi > 6)
      throw new Error("Forkert værdi");

    this._værdi = værdi;
  }

  get Værdi() {
    return this._værdi;
  }

  ryst() {
    this._værdi = Math.floor(Math.random() * 6) + 1;
  }

  print() {
    return "[" + this._værdi + "]";
  }
}
