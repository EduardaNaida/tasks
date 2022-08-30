function positiveSum(arr) {
    let sum = 0;
    for(i=0; i < arr.length; i++){
      if (Math.sign(arr[i]) === 1){
        sum = sum + arr[i];
      }
    }
   return sum;
 }