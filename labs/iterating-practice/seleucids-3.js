//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var dataset = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consort: ['Apama']
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consort: ['Stratonice of Syria']
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consort: ['Laodice I', 'Berenice']
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consort: ['Laodice II']
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consort: []
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consort: ['Laodice III', 'Euboea of Chalcis']
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consort: []
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consort: ['Apama', 'Laodice V']
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Antiochus VI Dionysus',
      startReign: 145,
      endReign: 140,
      consort: []
    },
    {
      name: 'Diodotus Tryphon',
      startReign: 140,
      endReign: 138,
      consort: []
    },
    {
      name: 'Antiochus VII Sidetes',
      startReign: 138,
      endReign: 129,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 129,
      endReign: 126,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Alexander II Zabinas',
      startReign: 129,
      endReign: 123,
      consort: []
    },
    {
      name: 'Cleopatra Thea',
      startReign: 126,
      endReign: 121,
      consort: []
    },
    {
      name: 'Seleucus V Philometor',
      startReign: 126,
      endReign: 125,
      consort: []
    },
    {
      name: 'Antiochus VIII Grypus',
      startReign: 125,
      endReign: 96,
      consort: ['Tryphaena of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Antiochus IX Cyzicenus',
      startReign: 114,
      endReign: 96,
      consort: ['Cleopatra IV of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Seleucus VI Epiphanes Nicator',
      startReign: 96,
      endReign: 95,
      consort: []
    },
    {
      name: 'Antiochus X Eusebes Philopator',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Demetrius III Eucaerus',
      startReign: 95,
      endReign: 87,
      consort: []
    },
    {
      name: 'Antiochus XI Epiphanes Philadelphus',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Philip I Philadelphus',
      startReign: 95,
      endReign: 84,
      consort: []
    },
    {
      name: 'Antiochus XII Dionysus',
      startReign: 87,
      endReign: 84,
      consort: []
    },
    {
      name: 'Tigranes I of Armenia',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Seleucus VII Kybiosaktes',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Antiochus XIII Asiaticus',
      startReign: 69,
      endReign: 64,
      consort: []
    },
    {
      name: 'Philip II Philoromaeus',
      startReign: 65,
      endReign: 63,
      consort: []
    }
  ]
}



//-------------------------
// Reducing practice
//-------------------------

var result;

// Create a function that calculates the total consorts. Requirement: you must use reduce

function sumTotalConsorts(data){
  var totalConsorts = 0;

  var consorts = data.rulers.map(function(ruler){
    return ruler.consort;
  });
  // console.log(rulers);

  totalConsorts = consorts.reduce(function(sum,val){

    return sum + val.length;

  },0);
  return totalConsorts;
}
result = sumTotalConsorts(dataset);
console.log("total consorts", result);

// Use the function you just created to calculate the average number of consorts

function avgConsorts(data){
  var avgConsorts = 0;

  var consorts = data.rulers.map(function(ruler){
    return ruler.consort;
  });

  totalConsorts = consorts.reduce(function(sum,val){
      return sum + val.length;
  },0);

  avgConsorts = totalConsorts/data.rulers.length;
  return avgConsorts;
}
result = avgConsorts(dataset);
console.log("average consorts",result);

//-------------------------

// Create a function that counts how many rulers are the second ruler with that name in the dynasty. Requirement: use reduce

function secondOfName(data){
  var output = [];

  var rulers = data.rulers.map(function(rulers){
    return rulers.name;
  });

  var output = rulers.reduce(function(sum,val,i,arr){

    if(val.indexOf(' II ')!==-1){
      return sum + 1;
    }else{
      return sum;
    }

  },0);
  // output = output.length;

  return output;
}
result = secondOfName(dataset);
console.log(result, "Rulers are the second of their name");

// Create a function that counts how many rulers are the third ruler with that name in the dynasty. Requirement: use reduce

function thirdOfName(data){
  var output = [];

  var rulers = data.rulers.map(function(rulers){
    return rulers.name;
  });

  var output = rulers.reduce(function(sum,val,i,arr){

    if(val.indexOf(' III ')!==-1){
      return sum + 1;
    }else{
      return sum;
    }

  },0);
  // output = output.length;

  return output;
}
result = thirdOfName(dataset);
console.log(result, "Rulers are the third of their name");

//-------------------------

// Create a function that calculates the total years that all the rulers ruled. Requirement: you must use reduce.

function totalYearsRuled(data){
  var output = [];

  var reigns = data.rulers.map(function(rulers){
    var obj = {start:rulers.startReign,end:rulers.endReign}
    // console.log(obj);
    return obj;
  });
  // console.log(reigns);
  var output = reigns.reduce(function(sum,val){
    var length = val.start - val.end
    return sum+=length;
  },0);
  return output;

}

result = totalYearsRuled(dataset);
console.log("Total years ruled", result);

// Use the function you just created to calculate the average length of the all the rulers' reign

function avgYearsRuled(data){
  var output;
  // var reigns = data.rulers.map(function(rulers){
  //   var arr = rulers.startReign - rulers.endReign;
  //   return arr;
  // });
  output = totalYearsRuled(data)/(data.rulers.length);
  return output;
}
result = avgYearsRuled(dataset);
console.log("average years ruled", result);

//-------------------------
// Mapping practice
//-------------------------

// Write a function that will take this data and return just an array of the ruler's names. Requirement: use map.
function rulerNames(data){

  var names = data.rulers.map(function(rulers){
    return rulers.name;
  });
  return names;
}
result = rulerNames(dataset);
console.log("Ruler Names",result);

// Write a function that will take this data and return just an array of the lengths of each ruler's rule. Requirement: use map.
function reignLengths(data){

  var reigns = data.rulers.map(function(rulers){
    var obj = {ruler:rulers.name,lengthOfReign:(rulers.startReign-rulers.endReign)};
    return obj;
  });
  return reigns;

}
result = reignLengths(dataset);
console.log("Reign Lengths: ",result);

// Write a function that will take this data and return a new array of objects that has all the same data, plus each object needs to have a new property called "lengthOfReign" which should have the length of the ruler's reign in years. Requirement: use map.
function dataWithReignLength(data){

  var rulers = data.rulers.map(function(rulers){
    var reignLength = rulers.startReign - rulers.endReign;
    var obj = {ruler:rulers.name,
      startReign:rulers.startReign,
      endReign:rulers.endReign,
      yearsOfReign:reignLength,
      consort:rulers.consort}
    return obj;
  });
  return rulers;
}
result = dataWithReignLength(dataset);
console.log("Seleucids data with reign lengths :\n",result);

// Write a function that will take this data and return a new array of objects that has the name of the ruler and a property called "numberOfConsorts", which should have the total number of consorts that the ruler had. Requirement: use map.

function rulersCountConsorts(data){

  var output = data.rulers.map(function(rulers){
    var numConsorts = rulers.consort.length;
    var obj = {
      ruler:rulers.name,
      numberOfConsorts:numConsorts
    }
    return obj;
  });
  return output;
}
result = rulersCountConsorts(dataset);
console.log("Kings and a count of their consorts\n",result);

// Write a function that will take this data and return an array of strings in this format: "{name} ({startReign}-{endReign} BCE)" (e.g. "Seleucus I Nicator (305-281 BCE)"). Requirement: use map.

function reignsFormatString(data){

  var output = data.rulers.map(function(ruler){
    var aString = ruler.name + " (" + ruler.startReign + " - " + ruler.endReign + " BCE) ";
    return aString;
  });
  return output;
}
result = reignsFormatString(dataset);
console.log("Formatted Seleucids :\n",result);
