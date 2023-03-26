let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3,4,5,45453,5];
const equalArr = function (arr1, arr2) {
    let len = arr1.length;
    if (len !== arr2.length) {
        return false;
    }
    for (i = 0; i < len; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};
console.log(equalArr(arr1,arr2));
//or
function getArr(arr1, arr2) {
    if (arr1.join()==arr2.join()){
      return true
    } else{
      return false
    }
    }
  
  console.log (getArr([1, 2, 33], [1, 2, 3, 3]))
  //''???
  const func = (arr1, arr2) => {
    if (arr1.join() === arr2.join()){
      return true;
    }
    else{
    return false;
    }
  }
  console.log(func([1,2,3], [1,2,4]));