function findMissingLetter(array) {
  let stringArray = array.join("");
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray.charCodeAt(i + 1) - stringArray.charCodeAt(i) != 1) {
      return String.fromCharCode(stringArray.charCodeAt(i) + 1);
    }
  }
} 