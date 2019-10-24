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

console.log(primeGen(10));
console.log('---------------------');
