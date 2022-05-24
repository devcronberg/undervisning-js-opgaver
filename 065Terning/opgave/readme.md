# Terninger

I denne opgave skal du skabe to moduler (husk - .mjs) der repræsenterer en terning (terning.mjs) og et bæger (bæger.mjs) med fem terninger. Du kan teste modulerne gennem en fil kaldet app.mjs.

Terningen skal være en klasse med en værdi mellem 1 og 6. Hvis der ikke angives noget eller værdien er forkert skal der smides en fejl. Terningen skal indeholde en skriv som returnerer [værdi] (eksempelvis [3]), samt en ryst som finder en ny tilfældig værdi. Brug evt:

```javascript
Math.floor(Math.random() * 6) + 1;
```

Importer klassen i app.mjs og test den - evt

```javascript
let t = new Terning(5);
console.log(t.print()); // [5]
t.ryst();
console.log(t.print()); // [tilfældig værdi]
```

Skab en klasse Bæger som består af et array af fem terninger der initialiseres til værdien 1. Klassen skal også kunne skrive (skriv()) og ryste (ryst()) samtlige terninger Du skal kunne:

```javascript
let b = new Bæger();
console.log(b.print()); // [1] [1] [1] [1] [1]
b.ryst();
console.log(b.print()); // [.] [.] [.] [.] [.] (. er tilfældig værdi)
```

Se eventuelt

- [app.mjs](../app.mjs)
- [terning.mjs](../Terning.mjs)
- [bæger.mjs](../bæger.mjs)

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
