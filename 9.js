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