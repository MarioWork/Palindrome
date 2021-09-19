function palindrome(word){
    var finalPoisition = word.length-1;
    var startPosition = 0;


    while(startPosition !== finalPoisition){
      if(word.charAt(startPosition).toUpperCase()!==word.charAt(finalPoisition).toUpperCase()){
        return false;
      }

      finalPoisition-=1;
      startPosition+=1;
    }
    return true;
}

console.log(palindrome("Ana"));
console.log(palindrome("mario"));