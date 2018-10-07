function fearNotLetter(str) {

  const hold = "abcdefghijklmnopqrstuvwxyz";

  let newStr = hold.indexOf(str[0]);

  for(let i = 0; i <= str.length; i++){
    if(str[i] == hold[newStr]){
      newStr++;
    } else if (str[i] != hold[newStr]){
      newStr = hold[newStr];
      return newStr;
      break;
    } else {
      return undefined;
    }
  }
}

fearNotLetter("abce");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
fearNotLetter("bcdf");