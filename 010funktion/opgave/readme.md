# Brug af funktioner

Opret en tom mappe, og i denne filen app.js. I denne skal du skabe to simple funktioner på tre forskellige måder.

Funktionerne skal begge som argument tage pris og momsPct, og returnerer pris med moms - pris \* (1 + momsPct), og pris uden moms - pris / (1 + momsPct).

- Opret prisMedMoms1 og prisUdenMoms1 som ganske almindelige funktioner (function navn(..){})
- Opret prisMedMoms2 og prisUdenMoms2 som funktioner hvor referencen gemmes i en const (const x = function(..){})
- Opret prisMedMoms3 og prisUdenMoms3 som lambda funktioner hvor referencen gemmes i en const (const x = (..) => ..)

Kald alle funktioner og skriv resultat til konsol for at checke om de virker. Hvis prisMedMoms kaldes med 100, og prisUdenMoms med 100 burde der skrives:

```
125
80
125
80
125
80
```

Se eventuelt [min løsning](../app.js).

> Denne opgave må ikke benyttes uden tilladelse fra Michell Cronberg (michell@cronberg.dk)
