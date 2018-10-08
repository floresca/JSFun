function smallestCommons(arr) {

  if (arr[0] > arr[1]){
    arr.push(arr[0]);
    arr.shift();
  }

  let hold = arr[0];
  let newArr = [];
  let newNum = arr[1];

  newArr.push(arr[0]);

  for (let i = 0; i < (arr[1] - arr[0]); i++){
    hold++;
    newArr.push(hold);
  }

    for (let i = 0; i < newArr.length; i++){
      if (newNum % newArr[i] != 0){
        newNum++;
        i = 0;
      } else {
        continue;
      }
    }

  return newNum;
}


smallestCommons([1,5]);