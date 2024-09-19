function reverseWithoutNumbers(str) {
  let filteredStr = '';

  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= '0' && str[i] <= '9')) {
      filteredStr += str[i];
    }
  }
  
  let reversedStr = '';
  for (let i = filteredStr.length - 1; i >= 0; i--) {
    reversedStr += filteredStr[i];
  }
  
  return reversedStr;
}

console.log(reverseWithoutNumbers("hello123world456"));  // dlrowolleh
console.log(reverseWithoutNumbers("abc123xyz"));         // zyxcba

module.exports = reverseWithoutNumbers;
