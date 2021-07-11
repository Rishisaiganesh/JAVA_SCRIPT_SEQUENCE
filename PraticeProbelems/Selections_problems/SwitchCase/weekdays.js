let readline = require("readline");
let num = readline.question("Enter the single digit number: ");
let check = parseInt(num);
switch(check)
{    
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;    
    default:
        console.log("Invalid Number");
}