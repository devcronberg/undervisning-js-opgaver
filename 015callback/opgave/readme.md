# Brug af callback metoder

Opret en tom mappe, og i denne filen app.js. 

## Opgave 1
Kopier følgende funktion til app.js.

```javascript
function job(func) {
  console.log("start");
  // tåbelig måde at vente et stykke tid,
  // men for at gøre koden synkron er
  // det nemmest (og til at forstå)
  for (var i = 0; i < 1000000000; i++) {}
  func();
  console.log("slut");
}
```

Funktionen kan kaldes med en funktion, der skal afvikles efter et kort stykke tid (ca 2 sek). Du skal sørge for at kalde funktionen således, at der efter 2 sekunder skrives en * til konsollen. Sørg for at kalde job med

- en reference til en funktion
- en anonym funktion
- en lambda

Se eventuelt [min løsning](../app.js).

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
