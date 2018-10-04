function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  for(let i = 0; i < str.length; i++){
    if(str[i] == " "){
      str.replace(" ", "-");
    }
  }
  return str;
}

spinalCase('This Is Spinal Tap');