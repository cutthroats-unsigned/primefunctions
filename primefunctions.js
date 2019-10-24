function primeGen(number) {
  const primeArray = [];
  let i = 2;

  let flag = true;

  while (i < number) {
    flag = true;
    for (let mod = 2; mod < i; mod++) {
      if (i % mod === 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      primeArray.push(i);
    }
    ++i;
  }
  return primeArray;
}
function cumulativeSum(number) {
  const tempArray = [];
  let tempArray2 = [];
  let tempNum;

  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j <= i; j++) {
      tempArray2.push(number[j]);
    }
    tempNum = tempArray2.reduce((a, b) => a + b, 0);
    tempArray.push(tempNum);

    tempArray2 = [];
  }
  return tempArray;
}

console.log(primeGen(10));
console.log('---------------------');
console.log(cumulativeSum([1, 2, 3, 4, 5, 6]));
console.log('---------------------');
