const vaga = {
    gramToKilogram: function (grams) {
      return grams / 1000;
    },
    kilogramToGram: function (kilograms) {
      return kilograms * 1000;
    }
  };
  
  module.exports = vaga;
  
console.log(vaga.gramToKilogram(1500)); 
console.log(vaga.kilogramToGram(2.5)); 
