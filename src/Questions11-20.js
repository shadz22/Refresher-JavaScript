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

};

// Question 14

function longestWordInArray(array) {

};

// Question 15

function arrayTotal(array) {

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
