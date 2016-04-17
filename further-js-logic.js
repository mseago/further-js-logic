var names = ['Chris', 'Michael', 'Jim Bo', 'James', 'Erica', 'Jeremiah', 'Bob'];

//...given this array, implement the following:

function allStringsContainingLetterI() {
  var newArr = [];
  for (var idx = 0; idx < names.length; idx++) {
    if (names[idx] === "i") {
      newArr.push(idx);
    }
  }
  return newArr;
}
//result: ['Chris', 'Michael', 'Jim Bo', 'Erica', 'Jeremiah']


function firstStringOverFiveInLength() {
  for (var idx = 0; idx < names.length; idx++) {
    if (names[idx] > 5) {
      return names[idx];
    }
  }
}
//result: 'Michael'

function allItemsOverFiveInLength() {
  var newArr = [];
  for (var idx = 0; idx < names.length; idx++) {
    if (names[idx] > 5) {
      newArr.push(idx);
    }
  }
  return newArr;
}
//result: ['Michael', 'Jim Bo', 'Jeremiah']


function reverseItems() {
  return names.reverse();
}
//result: ['Bob', 'Jeremiah', 'Erica', 'James', 'Jim Bo', 'Michael', 'Chris']



function commaDelimitValues() {
  return names.split(",");
}

//result: 'Chris,Michael,Jim Bo,James,Erica,Jeremiah,Bob'
