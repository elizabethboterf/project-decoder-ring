// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // make an array of the letters of the alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if(shift == 0 || shift>25 || shift<-25){
      return false;
    }
    input = input.toLowerCase();
    let message =[];
    for(let i=0; i<input.length; i++){
      const char = input[i];
      if(alphabet.includes(char)){
        const index = alphabet.indexOf(char);
        let shiftIndex = encode? index+shift: index-shift;
        if(shiftIndex>25){
          shiftIndex += -26;
        }
        else if(shiftIndex<0){
          shiftIndex += 26;
        }
        message.push(alphabet[shiftIndex]);
      }
      else message.push(char);
    }
    return (message.join(""));
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
//module.exports= caesarModule.caesar;