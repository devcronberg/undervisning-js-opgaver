const skrivStjerne = ms =>
  new Promise(resolve => {
    console.log("Venter " + ms + " ms med at skrive stjerne...");
    setTimeout(() => {
      console.log("*");
      resolve();
    }, ms);
  });

// fejl - * kommer efter "Slut"
// console.log("Start");
// skrivStjerne(2000);
// console.log("Slut");

// Løsning 1: brug af then
// skrivStjerne(2000).then(() => console.log("Slut"));

// Løsning 2: brug af await
async function kør() {
  await skrivStjerne(2000);
  console.log("Slut");
}

kør();
