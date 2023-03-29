/*
Напишите функцию, которая преобразует глубокий массив в одномерный.
Задачу нужно решить двумя способами!
Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5] */
let arr1 = [1, 2, [3, 4, [5]]];
const func1 = (arr1) => {
    return arr1.flat(2);}
console.log(func1(arr1));
//2-nd case
function one(arr) {
    return arr.join().split(',').map(el => Number(el));
  }
  console.log(one([1, 2, [3, 4, [5]]]))
  //or:
const func2 = (arr1, d = 1) =>{
    return d > 0 ? arr1.reduce((acc, val) => acc.concat(Array.isArray(val) ? func2(val, d - 1) : val), [])
                : arr1.slice();
    //return arr1.reduce((acc, val) => acc.concat(val),[]); 1 level
}
console.log(func2(arr1, Infinity));