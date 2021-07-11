let maxValue = 0;
let minValue = 100;
for (i= 1; i<= 5; i++)
{
    num = Math.floor(Math.random() * 99);
    console.log(num);
    if(maxValue < num)
    {
        maxValue = num;

    }
    if(minValue > num)
    {
        minValue = num;
    }
}
console.log("maximum value" + maxValue);
console.log("MinValue:" + minValue);