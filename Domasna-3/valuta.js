// valuta.js

const valuta = {
    evroToDenar: function(evro) {
      return evro * 61.5; 
    },
    evroToDolar: function(evro) {
      return evro * 1.12; 
    },
    denarToDolar: function(denar) {
      return denar / 55.5; 
    },
    dolarToEvro: function(dolar) {
      return dolar / 1.12; 
    }
  };
  
  module.exports = valuta;

console.log(valuta.evroToDenar(100)); 
console.log(valuta.evroToDolar(100)); 
console.log(valuta.denarToDolar(1000)); 
console.log(valuta.dolarToEvro(100)); 
