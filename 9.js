/*Напишите функцию, которая разделяет массив на части заданного размера.
Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]*/
const func = (arr, size) => {
    const arrNew = [];
    let index = 0;
    while (index < arr.length) {
      arrNew.push(arr.slice(index, size + index));
      index += size;
    }
    return arrNew;
  };
  console.log(func([1, 2, 3, 4, 5],3));
  //OR
  function sliceInto(arr, size) {
    let res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sliceInto(arr, 5));

//OR
const t9 = (arr, n) => new Array(Math.ceil(arr.length / n)).fill(null).map((e, i) => arr.slice(i * n, i * n + n));