// Number of anagrams in an array of words
// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".
// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.
// Some examples:
// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

function anagramCounter (wordsArray) {
  var counter = 0;
  for (var i = 0; i < wordsArray.length; i++) {
    for (var k = i + 1; k < wordsArray.length; k++) {
            if(wordsArray[i].split('').sort().join('').trim() === wordsArray[k].split('').sort().join('').trim()) {
              counter ++;
            }
    }
}
  return counter;
}

//split= El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
//sort= El método sort() ordena los elementos de un array localmente y devuelve el array ordenado.
//join= El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
//trim= El método trim( ) elimina los espacios en blanco en ambos extremos del string.

var wordsArray = ["dell", "ledl", "abc", "cba"];
var output = anagramCounter(wordsArray);
var expected = 10;
anagramCounter(wordsArray);
console.log("Expected output: " + expected);
console.log("My output: " + output);
