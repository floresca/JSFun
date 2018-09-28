function dropElements(arr, func) {
  
  let newArr = 
  [];
  for(let i = 0; i < arr.length; i++){
    func(arr[i]);

    if(func == true){
      arr.shift();
    } 
    else {
      for(let i = 0; i < arr.length; i++){
        arr.push(arr[i]);
      }
    }
  }
  return newArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });