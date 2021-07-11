RepeatedNumberArr = [];
let i = 10;
let result;
for (; i < 100; i++) {

  let onesDigit = i % 10;
  let tensDigit = (i - onesDigit) / 10;
  result = (onesDigit == tensDigit) ? RepeatedNumberArr.push(i) : RepeatedNumberArr + "Do it again" 
   
}