
console.log("write a function that takes two numbers and returns a sum");
  //inputs - two integers
  //process - add two numbers
  //output - sum of addition process
  var firstNumber = 5;
  var secondNumber = 7;
  var numC = 0;
  function twoSum(numA,numB){
    numC = numA+numB;
    return numC;
  }
  console.log(twoSum(firstNumber,secondNumber));
console.log("write a function that takes a password and returns if it is equal to 'p@55w0rd'");
  //input-a string
  //process- check our string against p@55w0rd
  //output-a boolean
  var userString = 'p@55w0rd';

  function passwordString(stringA){
    var checkString = 'p@55w0rd';
    if (checkString === stringA){
      return true;
    }else{
      return false;
    }
  }
  console.log(passwordString(userString));

console.log("write a function that takes a string and returns whether or not it is longer than 10 characters long.");
//input- a string
//process- check if string longer than 10 characters
//output- boolean true if process is true, otherwise false
  var userString = 'abacustown';
  function longerThanTen(stringA){
    if(stringA.length > 10){
      return true;
    }else{
      return false;
    }
  };
  console.log(longerThanTen(userString));
console.log('write a function that takes a string and returns whether or not it is longer than 10 characters long and contains an exclamation point.');
//same as above, but also checks for '!'
var userString = 'abacustown!';
function longerThanTenBang(stringA){
  if(stringA.length > 10 && stringA.includes('!')){
    return true;
  }else{
    return false;
  }
};
console.log(longerThanTenBang(userString));

console.log('write a function that takes an array of strings and returns the number of things in the array');
//input- an array of strings
//process- count array items
//output- return number of array items
var userStringArr = ['bob','tim','quincy','hackensack'];
function countArrayItems(arrA){
  arrCount = arrA.length;
  return arrCount;
}
console.log(countArrayItems(userStringArr));

console.log("write a function that takes an array of numbers and returns the sum");
//input- an array of numbers
//process - iterate through array, add all numbers
//return - sum of all numbers
var userNumArr = [1,2,3,4,5,6];
function sumOfArr(arrA){
  var sum = 0;
  for(var i=0;i<arrA.length;i++){
    sum += arrA[i];
  }
  return sum;
}
console.log(sumOfArr(userNumArr));

console.log("write a function that takes an array and return `true` if the array contains more than 20 items.");
//input- any one array
//process- check length of array, true if more than 20
//output- boolean
function isArr20(arrA){
  console.log(arrA);
  if(arrA.length > 20){
    return true;
  }else{
    return false;
  }
}
console.log(isArr20(['quincy',2,3,4,5,6,7,8,9,10,11,12,13,14,15,'banana',17,20,'popsicle']));

console.log("write a function that takes an array of strings and returns all the strings that contain the letter 'e'");
function eStrings(arrA){
  var stringsWithE = [];
  for (var i=0;i<arrA.length;i++){
    if(arrA[i].indexOf('e')!== -1){
      stringsWithE.push(arrA[i]);
    }else{
      continue;
    }
  }
  return stringsWithE;
}
console.log(eStrings(['bob','tim','temmy','gustavus adolphus','elope']));

console.log("write a function that takes an array of words and returns a new array with all the words uppercase");
//input- array of words(strings)
//process- iterate through array, uppercase each string
//return uppercased array
function makeUppercased(arrA){
  var uppercased = [];
  for(var i = 0;i<arrA.length;i++){
    uppercased.push(arrA[i].toUpperCase());
  }
  return uppercased;
}
console.log(makeUppercased(['wiggle','strumpet','troposphere','timber','timbre']));

console.log("write a function that takes an array of strings and returns a count of the strings that do not contain vowels");
//input - array of strings
//process - iterate array, uhhh... shit... regex match? count up when true
//process - iterate array, in each iteration, take an array item, iterate through and check for presence of vowels
//output - counted number
function countVowelless(arrA) {
  var vowels = ['a','e','i','o','u'];
  var count = 0;
  for (var i = 0; i<arrA.length; i++) {
    testWord = arrA[i];
    for(var j = 0; j<vowels.length; i++){
      console.log(testWord);
      console.log(count);
      if(testWord.indexOf(vowels[j]) === -1){
        count ++;
        break;
      }
    }
  }
  return count;
}

console.log(countVowelless(['tgg','thh','ave','dmr','dnr','phosgene','amicord','xxxpl','klktlx']));

console.log("write a function that takes an array of strings and returns a new string that contains only the words with vowels");

//write a function that takes an array of booleans and returns the number of true values
