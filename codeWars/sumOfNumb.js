// Sum Numbers
function sum (numbers) {
    "use strict";
    if(numbers===[]){
      return 0;
    }
    return numbers.reduce((a,b)=>a+b, 0);        
  };
  //OR
  const sum = (a) => a.reduce((s,e) => s += e, 0);
  //OR
  const sum = num => num.reduce((acc, curr)=> acc+curr, 0);