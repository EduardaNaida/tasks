function reverseWords(str){
    var newString = str.split(" ");
    newString.reverse();
    newString = newString.join(" ");
    return newString;
  }