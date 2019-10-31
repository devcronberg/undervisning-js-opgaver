# Funktion der returnerer en funktion

Opret en tom mappe, og i denne filen app.js. 

Din opgave er, at skabe en funktion kaldet findBeregner som har til formål at returnerer en funktion er **enten** lægger to tal sammen, trækker to tal fra hinanden, gange to tal med hinanden eller dividere to tal med hinanden. Det skal være tilfældigt hvilken funktion som findBeregner returnerer.

Du kan evt bruge dette

```javascript
let rnd = Math.ceil(Math.random() * 4);
```
til at finde et tilfældigt tal med 1 og 4.

Metoden skal kunne benyttes således:

```javascript
const beregn = findBeregner();
console.log(beregn(6, 2));
```
og resultatet skal enten blive 8, 4, 12 eller 3.

Se eventuelt [min løsning](../app.js).

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
