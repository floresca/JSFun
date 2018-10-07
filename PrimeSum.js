function sumPrimes(num) {

  let primeArr = [];
  let hold = 0;
  let total = 0;
  let isItTrue = 0;

  if (num > 2){
    primeArr.push(2);
    hold = 2;
    total = 2;
  }

  do
  {
    hold++;
    isItTrue = 0;

    for (let i = 0; i < primeArr.length; i++){
      if(hold % primeArr[i] == 0){
        isItTrue = 1;
        break;
      } else {
        continue;
      }
    }

    if(isItTrue == 0){
      total += hold;
      primeArr.push(hold);
    }

  }
  while (hold < num);

  return total;
}

sumPrimes(10);
