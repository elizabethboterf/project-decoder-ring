// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let i=1;
  alphabetKey = {a:11, b:21, c:31, d:41, e:51,
                 f:12, g:22, h:32, i:42, j:42, k:52,
                 l:13, m:23, n:33, o:43, p:53,
                 q:14, r:24, s:34, t:44, u:54,
                 v:15, w:25, x:35, y:45, z:55};
  

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  function polybius(input, encode = true) {
    const words= input.split(" ");
    for(let i=0; i<words.length; i++){
      const odd = words[i].length%2;
      if((odd!=0) && (encode ==false)){
        console.log("here");
        return false;
      }
    }
    //error handling
    if(encode){
      input = input.toLowerCase();
      const encoded = [];
      for(let i=0; i<input.length; i++){
        const char = input[i];
        const add= alphabet.includes(char) ? alphabetKey[char] :  char;
        encoded.push(add);
      }
      return encoded.join("");
     }//if encode
     
     else{
      const decoded=[];
      const checkNum= "123456789";
      for(let i=0; i<input.length; i++){
        if(checkNum.includes(input[i])){
          const numstr= input.slice(i, i+2);
          const num = parseInt(numstr);
          if(num==42){
            const char = "(i/j)";
            decoded.push(char);
            i++;
          }
          else{
            const char = getKeyByValue(alphabetKey, num);
            decoded.push(char);
            i++;
          }
        }
        else{
          decoded.push(input[i]);
        }
      }
      return decoded.join("");
     }  
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
