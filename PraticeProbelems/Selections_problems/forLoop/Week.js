var data = new Date();
var week_Day = new Array(7);
week_Day[0] = "Sunday";
week_Day[1] = "Monday";
week_Day[2] = "Tuesday";
week_Day[3] = "Wednesday";
week_Day[4] = "Thursday";
week_Day[5] = "Friday";
week_Day[6] = "Saturday";

var num = week_Day[data.getDay()];
console.log(num);