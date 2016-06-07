var names = ['Chris', 'Michael', 'Jim Bo', 'James', 'Erica', 'Jeremiah', 'Bob'];

//...given this array, implement the following:

function allStringsContainingLetterI() {
  var names = ['Chris', 'Michael', 'Jim Bo', 'James', 'Erica', 'Jeremiah', 'Bob'];
  var namesWithI = [];
  for (var value of names) {
    if (value.indexOf('i') !== -1) {
      namesWithI.push(value);
    }
  }
  return namesWithI;
}
console.log(allStringsContainingLetterI(names));

//result: ['Chris', 'Michael', 'Jim Bo', 'Erica', 'Jeremiah']


function firstStringOverFiveInLength() {
  var names = ['Chris', 'Michael', 'Jim Bo', 'James', 'Erica', 'Jeremiah', 'Bob'];
  for (var idx = 0; idx < names.length; idx++) {
    if (names[idx].length > 5) {
      return names[idx];
    }
  }
}
console.log(firstStringOverFiveInLength(names));
//result: 'Michael'


function allItemsOverFiveInLength() {
  "use strict";
  var names = ['Chris', 'Michael', 'Jim Bo', 'James', 'Erica', 'Jeremiah', 'Bob'];
  var newArr = [];
  for (var idx = 0; idx < names.length; idx++) {
    if (names[idx].length > 5) {
      newArr.push(names[idx]);
    }
  }
  return newArr;
}
console.log(allItemsOverFiveInLength(names));
//result: ['Michael', 'Jim Bo', 'Jeremiah']


function reverseItems() {
  var names = ['Chris', 'Michael', 'Jim Bo', 'James', 'Erica', 'Jeremiah', 'Bob'];
  return names.reverse();
}
console.log(reverseItems(names));
//result: ['Bob', 'Jeremiah', 'Erica', 'James', 'Jim Bo', 'Michael', 'Chris']



function commaDelimitValues(names) {
  var names = ['Chris', 'Michael', 'Jim Bo', 'James', 'Erica', 'Jeremiah', 'Bob'];
  return names.join();
}
console.log(commaDelimitValues(names));
//result: 'Chris,Michael,Jim Bo,James,Erica,Jeremiah,Bob'
