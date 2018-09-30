function sumFibs(num) {
  let prev;
  let newNum;
  let oddFibSum;

  if (num > 1) {
    prev = 1;
    newNum = 1;
    oddFibSum = 1;

    for (let i = 0; i < num; i++) {
      newNum += prev;
      prev -= newNum;

      if (newNum % 2 != 0 && newNum <= num) {
        oddFibSum += newNum
      }
    }
  } else {
    oddFibSum = 1;
  }
  
  return oddFibSum;
}

sumFibs(4);