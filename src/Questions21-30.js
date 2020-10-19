// Question 21

function swapKeysAndValuesInObject(object) {
  let result = {};
  for(let key in object) {
    result[object[key]] = parseInt(key)
  };
  return result;
};

// Question 22

function addKeysAndValues(object) {
  let result = 0;
  for(let key in object) {
    result += parseInt(key) + parseInt(object[key]);
  }
  return result;

};

// Question 23

function removeCapitalLettersFromString(string) {
  let newArr = string.split(' ');
  let tempArr = [];
  newArr.forEach(word => {
    let noUppercase = word.replace( /[A-Z]/g, '');
    tempArr.push(noUppercase);
  })
 return tempArr.join(' ');
};

// Question 24

function everyPossiblePairing(array) {

};

// Question 25

function roundUpNumber(number) {

};

// Question 26

function roundDownNumber(number) {

};

// Question 27

function formatDateNicely(date) {

  };

// Question 28

function getDomainNameFromEmailAddress(email) {

};

// Question 29

function titleizeString(string) {

};

// Question 30

function checkStringForSpecialCharacters(string) {

};
