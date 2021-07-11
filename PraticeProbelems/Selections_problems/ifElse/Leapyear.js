
var readline = require("readline");
var year = readline.question("enter the Number");
if(year % 400 === 0 || (year % 4 === 0 && year % 100 != 0))
console.log("its is a leapyear");
else
console.log("its not a leap year");

