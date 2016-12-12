//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var apiResult = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consort: 'Apama'
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consort: 'Stratonice of Syria'
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consort: 'Laodice I'
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consort: 'Laodice'
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consort: ''
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consort: 'Laodice III'
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consort: 'Laodice IV'
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consort: 'Laodice IV'
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consort: ''
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consort: 'Apama'
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consort: 'Cleopatra Thea'
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consort: 'Cleopatra Thea'
    }
  ]
};

function kingsNamedSeleucus(data){
  var output = [];

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i];
    console.log(ruler.name);
    if (ruler.name.indexOf('Seleucus') != -1){
      output.push(ruler);
    }
  }
  return output;

}
// var result = kingsNamedSeleucus(apiResult);
// console.log(result);


//write a function that returns all kings named "Seleucus"

function kingsNamedAntiochus(data){
  var output = [];

  for (var i=0; i < data.rulers.length; i++){
    var ruler = data.rulers[i];
    console.log(ruler.name);
    if (ruler.name.indexOf('Antiochus') != -1){
      output.push(ruler);
    }

  }
  return output;
}
// var result = kingsNamedAntiochus(apiResult);
// console.log(result);

//write a function that returns all kings named "Antiochus"

function kingsNamedSelection(data,nameSelected){
  var output = [];
  console.log("Kings Name of... ",nameSelected);
  for (var i=0; i < data.rulers.length; i++){
    var ruler = data.rulers[i];
    if (ruler.name.indexOf(nameSelected) != -1){
      output.push(ruler);
    }
  }
  return output;
}
var result = kingsNamedSelection(apiResult,"Antiochus");
console.log(result);
var result = kingsNamedSelection(apiResult,"Alexander");
console.log(result);
var result = kingsNamedSelection(apiResult,"Demetrius");
console.log(result);
//Once those two are complete, refactor so that they can both use the same function

//-------------------------

//write a function that counts the rulers with a consort named "Laodice"
function consortNamedLaodice(data){
  var count = 0;
  for (var i=0; i<data.rulers.length;i++){
    var ruler = data.rulers[i];
    if(ruler.consort.indexOf("Laodice") != -1){
      count ++;
    }
  }
  var output = count + " ... Rulers had a consort named 'Ladodice'";
  return output;
}
// var result = consortNamedLaodice(apiResult);
// console.log(result);

//write a function that counts the rulers with a consort named "Apama"
function consortNamedApama(data){
  var count = 0;
  for (var i=0; i<data.rulers.length;i++){
    var ruler = data.rulers[i];
    if (ruler.consort.indexOf("Apama") != -1){
      count ++;
    }
  }
  var output = count + " ... Rulers had a consort named 'Apama'";
  return output;
}
// var result = consortNamedApama(apiResult);
// console.log(result);

//Once those two are complete, refactor so that they can both use the same function

function consortCountNamed(data,consortSelected){
  var count = 0;
  for (var i=0; i<data.rulers.length;i++){
    var ruler = data.rulers[i];
    if (ruler.consort.indexOf(consortSelected) != -1){
      count ++;
    }
  }
  var output = count + " ... Rulers had a consort named " + consortSelected;
  return output;
}
var result = consortCountNamed(apiResult,"Cleopatra");
console.log(result);

//-------------------------

//write a function that returns the rulers who reigned more than five years
function fiveYearRule(data){
  var output = [];
  for (var i=0; i<data.rulers.length;i++){
    var ruler = data.rulers[i];
    var totalReign = ruler.startReign - ruler.endReign;
    if (totalReign > 5){
      output.push(ruler);
    }
  }
  return output;
}
var result = fiveYearRule(apiResult);
console.log("Rulers with > 5 year rule ",result);

//write a function that returns the rulers who reigned more than twenty years

function twentyYearRule(data){
  var output = [];
  for (var i=0;i<data.rulers.length;i++){
    var ruler = data.rulers[i];
    var totalReign = ruler.startReign - ruler.endReign;
    if(totalReign > 20){
      output.push(ruler);
    }
  }
  return output;
}
var result = twentyYearRule(apiResult);
console.log("Rulers with > 20 year rule ",result);

//Once those two are complete, refactor so that they can both use the same function

function rulersReignLength(data,reignLengthMin){
  var output = [];
  for (var i=0; i<data.rulers.length;i++){
    var ruler = data.rulers[i];
    var totalReign = ruler.startReign - ruler.endReign;
    if(totalReign > reignLengthMin){
      output.push(ruler);
    }
  }
  return output;
}
var result = rulersReignLength(apiResult,35);
console.log("Rulers with a rule longer than 35 years ",result);
