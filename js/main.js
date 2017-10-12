//The 'Is Palindrome' algorithm. A Palindrome is a word that can we spelled
//foward and backwards.

function isPalindrome(string){
  string = string.toLowerCase();
  var charactersArr = string.split('');//every chararcter including spaces
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');//determines what characters to use to determine if our string is an Pailndrome

  var lettersArr = [];
  characterArr.forEach(char =>{
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

isPalindrome('Madam I"m adam');
