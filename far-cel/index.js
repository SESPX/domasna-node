function c2f(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Primer povik na funkcijata
const celzijus = 25;
const farenhajt = c2f(celzijus);
console.log(`${celzijus} stepeni Celzijus se ednakvi na ${farenhajt} stepeni Farenhajt.`);

const f2c = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * (5/9);
  
    if (celsius < 0) {
      console.log("Temperaturata e niska");
    } else if (celsius >= 0 && celsius <= 22) {
      console.log("Temperaturata e normalna");
    } else {
      console.log("Temperaturata e povekje od 22 stepeni");
    }
  
  };
  f2c(40)
  
  const obj = {
    num1: 10,
    num2: 20,
    sum: function() {
      return this.num1 + this.num2;
    }
  };
  
  console.log(obj.sum()); 
  
  
