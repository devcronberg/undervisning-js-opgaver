# Brug af AJAX

I denne opgave skal du hente en liste over samtlige landsdele fra DAWA og
 vise disse på en liste. Fra adressen https://dawa.aws.dk/landsdele/ returneres en JSON struktur ala

 ```
[{
  "ændret": "2019-08-27T14:05:49.915Z",
  "geo_version": 1,
  "geo_ændret": "2019-08-27T14:05:49.915Z",
  "bbox": [
    12.43954691,
    55.54795594,
    12.83469809,
    55.73587822
  ],
  "visueltcenter": [
    12.59840382,
    55.61111592
  ],
  "href": "https://dawa.aws.dk/landsdele/DK011",
  "dagi_id": "218528",
  "navn": "Byen København",
  "nuts3": "DK011",
  "region": {
    "href": "https://dawa.aws.dk/regioner/1084",
    "kode": "1084",
    "navn": "Region Hovedstaden"
  },
  ...
 ```

bestående af en array af objekter. Du skal skabe en liste med landsdelens kode (nuts3) og navn (DK014 Bornholm ...).

Du kan benytte følgende HTML som udgangspunkt:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AJAX</title>
  </head>
  <body>
    <button id="knap">Klik på mig</button>
    <ul id="lst"></ul>
    <script src="app.js"></script>
  </body>
</html>
```

og følgende js

```js
(async function(){

// kode

})();
```

Når der klikkes på knappen skal data hentes og vises, og du kan blot benytte fetch-metoden. Husk, at for at benytte await skal det ske i en async metoden (onclick metoden skal være async). Fetch returnerer et request, og json data kan findes ved at kalde json-metoden (som også kræver await).

Se evt min [løsning](../../070Ajax/app.js)

