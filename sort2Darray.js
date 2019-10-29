//We will receive a list of names for each department, so at the end we will have a 2D array with different length
//We will return a normal array with all the names in the correct order
//The sequence will be to add all the names sorted by the length of the name (ASC). In case there are more than one with the same length, sort them alphabetically.

function namesSorter(departmentsArray) {
  var order = [];
  departmentsArray.forEach(function(e) {
    e.forEach(function(name) {
      order.push(name);
    });
  });
  order.sort(function(a, b) {
    return a.length - b.length || a.localeCompare(b);
  });
  return order;
}
var arrToConvert = [
  ["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"],
  ["Michael", "Alexander", "Mikel", "Ariel"],
  ["John", "Julia", "Brad", "George", "George"]
];
namesSorter(arrToConvert);
