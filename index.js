function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let reverseWord = word.split('').reverse().join('');
  if (reverseWord === word) {
    return true;
  }
  return false;    
  }


/* 
  Add your pseudocode here
  first we need to reverse the word
  after that we need to compare the reversed word with the original word
  if they are the same then it is a palindrome
  if not then it is not a palindrome
*/

/*
  Add written explanation of your solution here
  first we need to reverse the word
  after that we need to compare the reversed word with the original word
  if they are the same then it is a palindrome
  if not then it is not a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log(isPalindrome("mom"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
