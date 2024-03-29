# Brug af et eksternt modul (i Node)

Dette er et simpelt eksempel på brug af et eksternt modul ([Lodash](https://lodash.com)) i en JS fil afviklet gennem Node, men det kræver lidt forberedelse.

- Opret en tom mappe
- Åbn en konsol i roden af mappen og skriv "npm init -f"
  - Så oprettes package.json
- Skriv "npm i lodash --save"
  - Så hentes lodash fra NPM
- For at få intellicense så tilføj jsconfig.json til roden af mappen med følgende

```javascript
{
  "compilerOptions": {
    "target": "es2018",
    "allowSyntheticDefaultImports": true
  }
}
```

Nu burde du være klar!

Opret filen app.js. I toppen af filen skriver du

```javascript
const _ = require("lodash");
```

Det vil importere lodash til brug i filen gennem variablen _. Prøv eksempelvis at oprette en streng med værdien "mikkel", og brug _.upperFirst() til at logge "Mikkel" til konsollen. Se dokumentation på https://lodash.com/docs/4.17.15#upperFirst, og alle de andre metoder som Lodash stiller til rådighed.

Se eventuelt [min løsning](../app.js).

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
