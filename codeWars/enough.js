let arr = [1,1,3,3,7,2,2,2,2];
let n = 2;
function deleteNth(arr,n){
  // ...
  let newArr = [];
  for(let i  of arr){
    let temp = newArr.filter(item => item === i).length;
    console.log(temp);
    if (temp && temp === n){
      continue;
    }
    else{
      newArr.push(i);
    }
  }  
  return newArr;
}

console.log(deleteNth(arr,n));
//or
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }
//or
const deleteNth = (a, x) => {
    let m = {};
    return a.filter( v => (m[v] = m[v]+1||1) <= x );
  }
  //or
  const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f== e).length < x );
  //or
  const deleteNth = (arr,n) => {
    let obj={};
    return arr.filter(num => (
      obj[num] = (obj[num] || 0) + 1,
      obj[num] <= n
    ));
  }