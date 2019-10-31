# Async programmering

Opret en tom mappe, og i denne filen app.js, og kopier denne funktion til filen.

```javascript
const skrivStjerne = ms =>
  new Promise(resolve => {
    console.log("Venter " + ms + " ms med at skrive stjerne...");
    setTimeout(() => {
      console.log("*");
      resolve();
    }, ms);
  });
```

Funktionen skal kaldes med et antal ms, og starter med at skrive "Venter [x] ms med at skrive stjerne...", og herefter går der [x] ms til der kommer en stjerne på konsol.

Tilføj nu følgende kode efter funktionen:

```javascript
console.log("Start");
skrivStjerne(2000);
console.log("Slut");
```
og kør. Bemærk, at konsol viser:

```
Start
Venter 2000 ms med at skrive stjerne...
Slut
*
```

Stjernen kommer **efter** "slut" hvilket ikke er meningen. Den skal komme før "slut". Problemet opstår fordi metoden er asynkron - stjernen skrives på en tråd for sig selv efter 2 sekunder, og "slut" skrives umiddelbart efter metodekald.

Din opgave er at rette kaldet således, at konsol viser:

```
Start
Venter 2000 ms med at skrive stjerne...
*
Slut
```

Bemærk, at metoden returnerer et promise-objekt, og at dette har en then-metode. Denne metode tager som argument en metode der afvikles når promise-objekter har ændret status til "kørt". Prøv at omskrive kaldet til metoden således, at du benytter then-metoden.

Alternativt kan du omskrive koden således, at du benytter await. Men husk at await skal placeres i en async funktion.

Se eventuelt [min løsning](../app.js).

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
