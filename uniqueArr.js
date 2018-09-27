function diffArray(arr1, arr2) {
  var newArr = [];
  
  for (let i = 0; i < arr1.length; i++){
      if(arr2.includes(arr1[i]) != true){
        newArr.push(arr1[i]);
      }
  }

  for (let i = 0; i < arr2.length; i++){
      if(arr1.includes(arr2[i]) != true){
        newArr.push(arr2[i]);
      }
  }

  return newArr;
}

//test cases:
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);