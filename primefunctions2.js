// Optimized the primeGen to calculate maxPrimeSum faster by utilizing the Sieve of Eratosthenes algorithm
function primeGen(number) {
  const flagArray = [];// array which will help determine if the number in primes array of a specific index is prime
  const limit = Math.sqrt(number);
  const primes = []; // array which will hold all the primes
  for (let i = 0; i < number; i++) {
    flagArray.push(1);// 1 will mean prime in that current index
  }
  for (let i = 2; i <= limit; i++) {
    if (flagArray[i] === 1) {
      for (let j = i * i; j < number; j += i) {
        flagArray[j] = 0;// 0 will mean not prime in that index
      }
    }
  }
  for (let i = 2; i < number; i++) {
    if (flagArray[i] === 1) { // checks for ones
      primes.push(i);// pushes the prime number into the array of primes
    }
  }
  return primes; // returns the full prime array
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
      } else if (maxSum % 2 === 0) { // gets mod 2 out of the way right away for efficiency
        flag = false;
      } else {
        for (let mod = 3; mod < Math.sqrt(maxSum); mod += 2) {
          if (maxSum % mod === 0) { // not a prime
            flag = false;
            break;
          }
        }
      }
      if (maxSum > finalSum && run >= maxRun && flag !== false) {
        maxRun = run;
        finalSum = maxSum;
      }

      flag = true;
    }
  }
  if (maxRun === -1) { // edge case for smaller numbers
    maxRun++;
  }
  finalArray.push(finalSum);
  finalArray.push(maxRun);
  return finalArray;
}
console.log(primeGen(10));
console.log('---------------------');
console.log(cumulativeSum([1, 2, 3, 4]));
console.log('---------------------');
console.log(maxPrimeSum(10000));
