function sumFibs(num) {
  let first = 1;
  let second = 1;
  let oddFibSum;
  
  if (num < 3){
    oddFibSum = num;
  } else {
    oddFibSum = first + second;
    
    do
    {
      second += first;
      first = second - first;

      if (second <= num && second % 2 != 0) {
        oddFibSum += second;
      }
    }
    while (second < num)
  }
  return oddFibSum;
}

sumFibs(5);