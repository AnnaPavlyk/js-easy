function replaceVowels(str) {
  return str.replace(/[aeiou]/gi, '*');
}

console.log(replaceVowels("hello world"));
console.log(replaceVowels("Javascript"));

module.exports = replaceVowels;