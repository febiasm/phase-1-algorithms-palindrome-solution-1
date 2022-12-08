function reverse(word){ 
const WordArray = word.split("");
const reversedWordArray= WordArray.reverse("");
const reversedWord =reversedWordArray.join("");
return reversedWord
} 
function isPalindrome(word) {
  const reversedWord = reverse(word)
  if (word ===reversedWord){
    return true
  } else {
    return false;
  }

  // Write your algorithm here
  //should take in a word (palindrome)
  // if the word is a palindrome, (is the same spelt backwords)
  // return true 
  // else returnfalse .
}

/* 
  Add your pseudocode here
  word === word 
  return true 
  else return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
