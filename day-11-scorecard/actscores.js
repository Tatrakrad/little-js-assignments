//Write a JS file that will read the CSV file
//and console log the name and the 75th percentile of the ACT
//cumulative score for each school.

//line ending /r
//institution name is INSTNM
//act cumulative is ACTCM75

var fs = require('fs');
var contents = fs.readFileSync('Most+Recent+Cohorts+(Scorecard+Elements).csv', 'utf-8');
var actScorces = '';

var lines = contents.split('\n');
//var indivArray = 'lines.split(',');
var headers = lines[0].split(',');
// console.log(headers);
var nameIndex = headers.indexOf('INSTNM');
var actIndex = headers.indexOf('ACTCM75');

var output = '';
// console.log(nameIndex);
// console.log(actIndex);


for (var i = 1; i < lines.length - 1; i++){
  var indivArray = lines[i].split(',');
  var tempName = indivArray[nameIndex];
  var tempAct = indivArray[actIndex];
  if(tempAct != 'NULL'){
    var tempString = ("\n"+ tempName + ' : ' + tempAct);
    output = output.concat(tempString);
  }
}

console.log(output);
