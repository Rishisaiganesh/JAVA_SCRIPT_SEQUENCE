let i = 0;
let numArr = new Array(10);
for ( ; i < numArr.length; i++ ){
    numArr[i] = Math.floor(Math.random() * 900) + 100;
}
let sortingArr = numArr.sort();
console.log("sorting array:" + sortingArr);
