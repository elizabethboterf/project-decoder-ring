// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const realAlpha = "abcdefghijklmnopqrstuvwxyz";

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  function isUnique(string){
    let check ={};
    for(let i=0; i<string.length; i++){
      const char = string[i];
      if(check[char])return false;
      check[char]=true;
    }
    return true;
  }

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length!= 26) return false;
    if(!isUnique(alphabet)) return false;

    //creates an array of objects for each letter to map to its substitution
    let i =0;
    const alphabetKey = {};
    for(let i=0; i<alphabet.length; i++){
      const letter= realAlpha[i];
      alphabetKey[letter]=alphabet[i];
    }
    input=input.toLowerCase();
      let message = [];
      for(let i=0; i<input.length; i++){
        const char = input[i];
        if(char!=" "){
          const add= encode ? alphabetKey[char] : getKeyByValue(alphabetKey, char);
          message.push(add);
        }
        else message.push(char);
      }
      return message.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
