// Question 1

function selectElementsStartingWithE(array) {
  let newArr = array.filter(element => element.startsWith("e"));
  return newArr;
  
  // var array = $.grep(array, function(item) {
  //   return item.charAt(0) === 'e';
  // })
  // return array;
};



// Question 2 

function selectElementsStartingWithVowel(array) {
  var array = array.filter(str => /^[aeiou]/i.test(str));
  return array;
  
};

// Question 3

function removeNullsFromArray(array) {
  let filteredArray = array.filter(element => element != null)
  return filteredArray;

};

// Question 4

function removeNullsAndFalseFromArray(array) {
  let newArr = array.filter(element => element)
  return newArr;

};

// Question 5

function reverseEveryElementInArray(array) {
  let newArr = array.map(element => element.split("").reverse().join(""))
  return newArr;
};

// Question 6

function dropFirstThreeElements(array) {
  let newArr = array.slice(3);
  return newArr;

};

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array; 
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
  array.sort((a, b) => {
    let aLastLetter = a.charAt(a.length - 1);
    let bLastLetter = b.charAt(b.length - 1)
    return aLastLetter < bLastLetter ? -1 : aLastLetter > bLastLetter ? 1 : 0;
  })
  return array;
};

// Question 9

function returnFirstHalfOfString(string) {

};

// Question 10

function makeNumberNegative(number) {
  
};
