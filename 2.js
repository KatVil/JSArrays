let arr = [1,2,35,46];
let arr1=[];
let sum = 0;
num = 10;
const func = (arr, num) =>{
  for(let i=0;i<arr.length; i++){
    sum+=arr[i];   
    if(sum<=num){ 
      arr1.push(arr[i]);
    }
  }
  return arr1.length+1; 
}
console.log(func(arr,num));
//or
const sum2 = (arr, num) => arr.reduce((acc, el, i) => ({sum2: acc.sum2 + el,answer: acc.sum2 + el >10 && acc.sum2 <=10 ? i+1 : acc.answer,}),{sum2: 0, answer: Infinity }).answer;
console.log(sum2([1, 2, 12, 2, 6, 8],10));