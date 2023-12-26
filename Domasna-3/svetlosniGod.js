// sunceviGodini.js

const svetlosniGodini = {
    kmToAU: function(kilometri) {
      return kilometri / 149.6; 
    },
    AToKm: function(astronomskaEdinica) {
      return astronomskaEdinica * 149.6; 
    }
  };
  
  module.exports = svetlosniGodini;

console.log(svetlosniGodini.kmToAU(149600000)); 
console.log(svetlosniGodiniGodini.AToKm(1)); 

  