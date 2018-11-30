function permAlone(str) {
  let arrayOfLetters = str.split('');
  let stringLength = arrayOfLetters.length;
  let permutations = stringLength;
  let factorial = stringLength;

  if (stringLength > 1){
    while (factorial > 1){
      permutations = permutations * (factorial - 1);
      factorial--;
    }
  }
  
  console.log(permutations);

  let repeats = 0;

  for (let i = 0; i < permutations; i++){
    
    let floatingArray = [];

    for (let k = 0; k < stringLength; k++){
      floatingArray.push(arrayOfLetters[k]);
    }
    
    let letterToCompare = floatingArray.splice(i, 1);

    let floatArrayLength = floatingArray.length;

    for (let j = 0; j < floatArrayLength; j++){
      if (letterToCompare[0] == floatingArray[j]){
        repeats++;
      }
    }
  }
  
  if(repeats > 0){
    permutations -= repeats * 2;
  } else if (repeats <= 0){
    permutations = 0;
  }

  return permutations;
}

permAlone('aab');
