//function goes here
function compareStringLab(stringA,stringB){
  console.log('comparing ' + stringA + ' to ' + stringB);
  lengthA = stringA.length;
  lengthB = stringB.length;
  if(lengthA < lengthB){
    return stringA;
  }else if(lengthB < lengthA){
    return stringB;
  }else if(lengthA === lengthB){
    return (stringA+' '+stringB+ ' are the same length');
  }
  else{
    return('Cannot compare');
  }
}

var firstString = "What";
var secondString = "Assignment";
var thirdString = "Borgward";
var fourthString = "Torbforb";
var fifthString = 1024;
console.log(compareStringLab(firstString,secondString));
console.log(compareStringLab(thirdString,fourthString));
console.log(compareStringLab(firstString,fifthString));



/*
Write a function that takes three strings and returns the shortest. If two of the same length are passed in, it can return either.
*/
