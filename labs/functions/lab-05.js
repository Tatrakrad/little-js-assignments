//function goes here
function compareStringLab(stringA,stringB){
  console.log('comparing ' + stringA + ' to ' + stringB);
  lengthA = stringA.length;
  lengthB = stringB.length;
  if(lengthA > lengthB){
    return stringA;
  }else if(lengthB > lengthA){
    return stringB;
  }else if(lengthA === lengthB){
    return (stringA+' '+stringB+ ' are the same length');
  }
  else{
    return('Cannot compare');
  }
}

var firstString = "Hey";
var secondString = "I'm Words";
var thirdString = "Nope";
var fourthString = "Dude";
var fifthString = 256;
console.log(compareStringLab(firstString,secondString));
console.log(compareStringLab(thirdString,fourthString));
console.log(compareStringLab(firstString,fifthString));


/*
Write a function that takes two strings and returns the longest. If the two are of the same length, it can return either.
*/
