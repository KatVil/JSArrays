//Напишите функцию, которая убирает повторяющиеся значения.
let arr = [1, 2, 3, 1, 2];
arr1 = arr.filter(function(item, pos) {return arr.indexOf(item) == pos;})
console.log(arr1);
//OR
/*const result = items.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc; // если значение уже есть, то просто возвращаем аккумулятор
    }
    return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
  }, []);
  console.log(result); */