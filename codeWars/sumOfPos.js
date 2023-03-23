function positiveSum(arr) {
    return arr.filter(i => i>0).reduce((a,b)=>a+b,0); 
  }
  //or
  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }