// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {
  let resultArray = [];

  let evenArray = array.filter(element => element % 2 === 0);
  let oddArray = array.filter(element =>  element % 2 !== 0); 
    
    resultArray.push(evenArray, oddArray);
    return resultArray;
};

// Question 12

function numberOfElementsThatArePalindromes(array) {
  let result = array.filter(element => element === element.split("").reverse().join(""))
  return result.length;

};

// Question 13

function shortestWordInArray(array) {
  array.sort((a, b) => {
    // return a.length < b.length ? -1 : a.length > b.length ? 1 : 0;
    return a.length - b.length;
  })
  return array[0];

};

// Question 14

function longestWordInArray(array) {
  array.sort((a, b) => {
    // return a.length < b.length ? -1 : a.length > b.length ? 1 : 0;
    return b.length - a.length;
  })
  return array[0];

};

// Question 15

function arrayTotal(array) {
  let total = array.reduce((sum, number) => {
    return sum += number;
  })
  return total;
};

// Question 16

function doubleArray(array) {

};

// Question 17

function averageOfArray(array) {

};

// Question 18

function removeElementsGreaterThanFive(array) {

};

function isLessThanFive(element) {

};

// Question 19

function convertArrayToObject(array) {

};

// Question 20

function getLettersInArrayOfWords(array) {

};
