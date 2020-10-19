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
  let result = [];
  for(let i = 0; i < array.length -1; i++) {
    for(let j = 1; j < array.length; j++) {
      if(array[i] !== array[j]) {
        result.push([array[i], array[j]]);
      }
    }
  }
  return result;
};

// Question 25

function roundUpNumber(number) {
  let result = Math.ceil(number);
  return result;
};

// Question 26

function roundDownNumber(number) {
  return Math.floor(number);

};

// Question 27

function formatDateNicely(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let currentMonth = months[date.getMonth()];
  let niceDate = date.getDate() + "-" + currentMonth + "-" + date.getFullYear();
  return niceDate;
  };

// Question 28

function getDomainNameFromEmailAddress(email) {
  return email.split('@')[1].split('.')[0];
};

// Question 29

function titleizeString(string) {
 return string.toLowerCase().replace(/^.|\s\S/g, (a) => a.toUpperCase());
  
};

// Question 30

function checkStringForSpecialCharacters(string) {

};
