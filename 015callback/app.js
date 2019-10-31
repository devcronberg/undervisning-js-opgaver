function job(func) {
  console.log("start");
  // tåbelig måde at vente et stykke tid,
  // men for at gøre koden synkron er
  // det nemmest (og til at forstå)
  for (var i = 0; i < 1000000000; i++) {}
  func();
  console.log("slut");
}

function skriv() {
  console.log("*");
}

job(skriv);
job(function() {
  console.log("*");
});
job(() => console.log("*"));
