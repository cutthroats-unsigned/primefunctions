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
function maxPrimeSum(number) {
  let maxSum = 0;
  let maxRun = -1;
  let finalSum = 0;
  let run = 0;

  const primeSum = primeGen(number);

  const finalArray = [];
  let flag = true;
  for (let i = 0; i < primeSum.length; i++) {
    maxSum = 0;
    run = 0;
    for (let j = i; j < primeSum.length; j++) {
      maxSum += primeSum[j];
      run++;
      if (maxSum >= number) {
        break;
      }
      for (let mod = 2; mod < maxSum; mod++) {
        if (maxSum % mod === 0) { // not prime
          flag = false;
        }
      }
      if (maxSum > finalSum && run >= maxRun && flag !== false) {
        maxRun = run;
        finalSum = maxSum;
      }

      flag = true;
    }
  }

  finalArray.push(finalSum);
  finalArray.push(maxRun);
  return finalArray;
}
console.log(primeGen(10));
console.log('---------------------');
console.log(cumulativeSum([1, 2, 3, 4]));
console.log('---------------------');
console.log(maxPrimeSum(1000));
