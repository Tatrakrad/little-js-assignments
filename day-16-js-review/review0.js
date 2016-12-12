var args = process.argv;
var arg = args[2];
console.log('the arg', arg);



var a = 'hello';
var b = a + ' ' + arg;
//console.log(b);


var c = 7;
var e = c + arg;
//console.log('e', e);

e = arg < 6;
//console.log('e', e);

/*
if (arg.length >= 8) {
  console.log('long enough');
}
else {
  console.log('too short');
}
*/

//A name is passed in. If the name is Bob or Fred, log 'security clearance granted'. Otherwise, log 'security clearance denied'

/*
if (arg == 'Bob'|| arg == 'Fred') {
  console.log('security clearance granted');
}
else {
  console.log('security clearance denied');
}
*/

//A name is passed in. If the name is Bob and it is daytime, log 'security clearance granted'. Othewise, log 'security clearance denied'.

/*
var isDaytime = true;

if (arg == 'Bob' && isDaytime) {
  console.log('security clearance granted');
}
else {
  console.log('security clearance denied');
}
*/


//A name is passed in. If you have a list of names, check to see if the name is on the list and it is daytime.

var clearedPeople = ['Bob', 'Fred', 'Wilma', 'BamBam'];
var isDaytime = true;

/*
if (clearedPeople.indexOf(arg) > -1 && isDaytime) {
  console.log('security clearance granted');
}
else {
  console.log('security clearance denied');
}
*/

//More readable example
var validPerson = clearedPeople.indexOf(arg) > -1;
if (validPerson && isDaytime) {
  console.log('security clearance granted');
}
else {
  console.log('security clearance denied');
}




// For loops do things a specified number of times
/*
for (var i = 0; i < 100; i++) {
  console.log('I will not talk in class anymore.');
}
*/


// While loops do things until something is false

// Sum the values, starting at the beginning, until the sum is over 20.

/*
var values = [1, 2, 7, 5, 10, 8, 5, 3, 4, 6, 10];
var sum = 0;
var i = 0;

while (sum < 20) {
  //do stuff
  sum += values[i];
  console.log('happening', sum);

  i += 1;
}
*/

var totalMoney = 100.00;
var prices = [5.70, 15.98, 2.89, 17.14, 30.87, 19.50, 3.16, 24.21, 14.50];

//how many things can you buy?
//use a while loop
/*
while (total money is enough) {
  buy it
  decrement cash
  add to my count of things
}

log count of things
*/

var i = 0;

while (totalMoney - prices[i] > 0) {
  totalMoney -= prices[i];
  i++;
  console.log('bought', i, 'things, cash left: ', totalMoney);
}
