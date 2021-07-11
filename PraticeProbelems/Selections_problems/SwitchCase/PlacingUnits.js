let readline = require("readline");
let num = readline.question("Enter the numbers as 1,10,100,1000: ");
let check = parseInt(num);
switch(check)
{
    case 1:
        console.log("unit's");
        break;
    case 10:
        console.log("Ten's");
        break;
    case 100:
        console.log("Hundred's");
        break;
    case 1000:
        console.log("Thousand's");
        break;
    default:
        console.log("Its Invalid");
}