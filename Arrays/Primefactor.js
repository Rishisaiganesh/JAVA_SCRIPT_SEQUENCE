const Num1 = require('Num1')();
let number = Number(Num1("enter any Number:"));

let primefactorArr = [];

while (number%2 === 0){
    primefactorArr.push(2);
    number = number/2;

}
for (let i = 3; i*i <= number; i=i+2)
{
    while(number%i === 0)
    {
        primefactorArr.push(i);
        number = number/i;
    }
}
if (number > 2)
primefactorArr.push(number);
console.log("prime factor:" + primefactorArr);