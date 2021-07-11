let readline = require("readlines");
let num = readline.question("Enter the number:");
function Factorial(num)
{
  if (num == 1)
  {
      return 1;
  }
  else{
      return n * Factorial(num -1);
  }
}
console.log(Factorial(num));