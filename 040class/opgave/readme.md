# Simpel klasse

Opret en app.js og

- Opret klassen Bil
- Tilføj en contructor hvor der skal angives mærke, model og årgang. Disse værdier gemmes som felter
- Tilføj metoden skriv() som udskriver (console.log) info om bilen.
- Brug følgende som test:

```javascript
let bil = new Bil("VW", "Golf", 2022);
bil.skriv(); // VW Golf fra 2022
```

## Ekstra

- Opret klassen Lastbil som arver fra bil
- Tilføj en contructor hvor der skal angives mærke, model, årgang samt totalVægt. Disse værdier gemmes som felter
  - Bruger "super" til at kalde mors constructor
- TIlføj en skriv() som udskriver info om lastbilen-
- Brug følgende som test:

```javascript
let lastbil = new Lastbil("Volve", "X1", 2000, 10000000);
lastbil.skriv(); // Volve X1 fra 2000 som har en total vægt på 10000000
```

Se eventuelt [min løsning](../app.js).

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
