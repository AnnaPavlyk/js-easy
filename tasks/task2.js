function reverseWithoutNumbers(str) {
  const filteredStr = str.replace(/[0-9]/g, '');
  return filteredStr.split('').reverse().join('');
}

console.log(reverseWithoutNumbers("hello123world456"));
console.log(reverseWithoutNumbers("abc123xyz"));       

module.exports = reverseWithoutNumbers;
