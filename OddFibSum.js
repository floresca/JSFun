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

function sumFibs(num) {
  let first = 2;
  let hold;
  let secondHold;
  let OddFibSum;
  
  if (num < 3){
    OddFibSum = num;
  } else {
    OddFibSum = first;
    for(let i = 2; i <= num; i++){
      hold += first;
      first = 1;
      
      if (hold == 1 || hold % 2 != 0) {
        OddFibSum += hold;
      }
    }
  }
  return OddFibSum;
}

sumFibs(4);