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