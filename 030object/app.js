let o1 = {};
o1["fornavn"] = "a";
o1["efternavn"] = "b";
o1["fuldtNavn"] = function() {
  return this["fornavn"] + " " + this["efternavn"];
};

let o2 = {};
o2.fornavn = "a";
o2.efternavn = "b";
o2.fuldtNavn = function() {
  return this["fornavn"] + " " + this["efternavn"];
};

let o3 = {
  fornavn: "a",
  efternavn: "b",
  fuldtNavn: function() {
    return this["fornavn"] + " " + this["efternavn"];
  }
};

console.log(o1.fuldtNavn());
console.log(o2.fuldtNavn());
console.log(o3.fuldtNavn());
