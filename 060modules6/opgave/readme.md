# Brug af et eksternt modul (i browser)

Dette er et simpelt eksempel på brug af et separat eksternt modul fra [Lodash](https://lodash.com) i en JS fil tilgået i en browser. 

Det kræver lidt forberedelse:

- Opret en tom mappe
- Åbn en konsol i roden og skriv "npm init -f"
  - Så oprettes package.json
- Skriv "npm i lodash-es --save"
  - Så hentes lodash (ES6 moduler) fra NPM

Nu burde du være klar!

Opret index.html med følgende indhold:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="app.js" type="module"></script>
  </body>
</html>
```

og herefter app.js med følgende indhold

```javascript
import upperFirst from "./node_modules/lodash-es/upperFirst.js";
```

Det vil importere upperFirst-metoder og tilhørende moduler til brug i modulet. Prøv eksempelvis at oprette en streng med værdien "mikkel", og brug upperFirst() til at logge "Mikkel" til konsollen. Se dokumentation på https://lodash.com/docs/4.17.15#upperFirst, og alle de andre metoder som Lodash stiller til rådighed. Du kan se resultatet ved at åbne index.html gennem live-server (kræver Live Server extension i VS Code).

Se eventuelt [min løsning](../app.js).

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
