function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reversedString(word)
  if (word === reversedWord){
    return true;
  }
  else {
    return false;
  }
}

function reversedString(word){
  const wordArray = word.split('')
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("=>", isPalindrome('robot'));

  console.log("=>", isPalindrome("ab"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("")
}

module.exports = isPalindrome;
