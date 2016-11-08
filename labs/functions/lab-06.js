//function goes here
function compareStringLab(stringA,stringB,stringC){
  console.log('comparing ' + stringA + ' to ' + stringB + ' to ' + stringC);

  lengthA = stringA.length;
  lengthB = stringB.length;
  lengthC = stringC.length;

  if(lengthA < lengthB && (lengthA < lengthC)){
    return stringA;
  }else if(lengthB < lengthA && (lengthB < lengthC)){
    return stringB;
  }else if(lengthC < lengthA && (lengthC < lengthB)){
    return stringC;
  }else if(lengthA == lengthB && (lengthC < lengthA)){
    return stringC;
  }else if(lengthA == lengthC && (lengthB < lengthA)){
    return stringB;
  }else if(lengthB == lengthC && lengthA < lengthB){
    return stringA;
  }else if(lengthA == lengthB && (lengthC > lengthA)){
    return stringA;
  }else if(lengthA == lengthC && (lengthB > lengthA)){
    return stringA;
  }else if(lengthB == lengthC && lengthA > lengthB){
    return stringA;
  }else if(lengthA === lengthB && lengthB === lengthC && lengthA == lengthC){
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
var ninthString = "Parpo";

console.log(compareStringLab(firstString,secondString,sixthString));
console.log(compareStringLab(thirdString,fourthString,fifthString));
console.log(compareStringLab(firstString,fifthString,thirdString));
console.log(compareStringLab(fifthString,seventhString,eigthString));

console.log(compareStringLab(seventhString, sixthString, eigthString));
console.log(compareStringLab(seventhString, eigthString, ninthString));

/*
Write a function that takes three strings and returns the shortest. If two of the same length are passed in, it can return either.
*/
