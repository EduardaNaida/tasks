function sumMix(x){
    let sum = 0;
    for(let i = 0; i < x.length; i++){
      let n = parseInt(x[i]);
      sum = sum + n;
    }
    return sum;
  }