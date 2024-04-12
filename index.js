function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.split("").reverse().join("")){
    return true;
  }
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
  input: radar
  output: true
  input: motherboard
  output: false
*/

/*
  Add written explanation of your solution here
  the string will be splited using split, reverse and join methods to evaluate the condition given
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
