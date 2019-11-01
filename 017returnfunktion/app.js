function findBeregner() {
  
    let rnd = Math.ceil(Math.random() * 4);
    switch (rnd) {
      case 1:
        return (a, b) => a + b;
      case 2:
        return (a, b) => a - b;
      case 3:
        return (a, b) => a * b;
      case 4:
        return (a, b) => a / b;
    }
  
}

const beregn = findBeregner();
console.log(beregn(6, 2));
