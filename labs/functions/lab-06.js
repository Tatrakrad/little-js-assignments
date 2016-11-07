//function goes here
function compareStringLab(stringA,stringB,stringC){
  console.log('comparing ' + stringA + ' to ' + stringB + ' to ' + stringC);
  lengthA = stringA.length;
  lengthB = stringB.length;
  lengthC = stringC.length;
  if(lengthA < lengthB && lengthC){
    return stringA;
  }else if(lengthB < lengthA && lengthC){
    return stringB;
  }else if(lengthC < lengthA && lengthC){
    return stringC;
  }
  else if(lengthA === lengthB && lengthB === lengthC && lengthA == lengthC){
    return (stringA+' '+stringB+ ' and ' + stringC + ' are the same length');
  }
  else{
    return('Cannot compare');
  }
}

var firstString = "What";
var secondString = "Assignment";
var thirdString = "Borgward";
var fourthString = "Torbforb";
var fifthString = "Six";
var sixthString = "Arachnaphobia";
var seventhString = "Bob";
var eigthString = "Ten";
console.log(compareStringLab(firstString,secondString,sixthString));
console.log(compareStringLab(thirdString,fourthString,fifthString));
console.log(compareStringLab(firstString,fifthString,thirdString));
console.log(compareStringLab(fifthString,seventhString,eigthString));


/*
Write a function that takes three strings and returns the shortest. If two of the same length are passed in, it can return either.
*/
