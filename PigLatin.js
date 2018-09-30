function translatePigLatin(str) {
  let newStr;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if(vowels.includes(str[0])){
    newStr = str + "way";
  } else {
    let arr = str.split('');
    for(let i = 0; i < str.length; i++){
      if(!vowels.includes(arr[0])){
        arr.push(arr[0]);
        arr.shift();
      } 
    }
    newStr = arr.join('');
    newStr = newStr + "ay";
  }

  return newStr;
}

translatePigLatin("consonant");