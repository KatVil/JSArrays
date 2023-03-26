//Напишите функцию, возвращает новый массив без предоставленных значений.
const func = (arr, ...args) => {
    let filteredArr = [...arr];  
    for (let i = 0; i < args.length; i += 1) {
      filteredArr = filteredArr.filter((el) => el !== args[i]);
    }  
    return filteredArr;
  };
  //or
  function cutOutNum(arr, a, b) {

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === a || arr[i] === b)
            arr.splice(i, 1)
    }
    return arr
}

console.log(cutOutNum([1, 2, 3, 1, 2], 1, 2))