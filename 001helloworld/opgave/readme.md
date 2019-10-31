# Hello world

I denne meget simple opgave skal du oprette en tom mappe, og i denne skabe en javascript-fil (app.js), der blot indeholder kode til at udskrive strengen "Hello world" til consolen.

```javascript
let s = "Hello world";
console.log(s);
```

Opret samtidig en html-side (index.html) i samme mappe, med følgende indhold:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>Test</h1>
    <script src="app.js"></script>
  </body>
</html>
```

Opgaven har mest til formål at sikre, at node, udviklingsmiljø og browser virker som det skal.

Sørg for at

- Koden kan afvikles gennem VS Code ved at trykke F5
  - skriver den ud på konsol?
  - Hvis du sætter et breakpoint på linje 1 og trykker F5 (vælg Node som environment) - breaker VSC så ud?
- Koden kan afvikles gennem node (kommandovindue) med "node app.js"
  - skriver den ud på konsol?
- Koden kan afvikles gennem en browser ved at åbne index.html (brug gerne Live Server-extension i VS Code)
  - skriver den ud på konsol?

Se eventuelt [min løsning](../app.js)

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
