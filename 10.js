/*-10
Напишите функцию, которая создаст массив из уникальных значений, 
которые есть в каждом из предоставленных массивов.
Ожидаемый результат: 
([1, 2], [2, 3]) => [2]
(['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']*/
//let arrays = ([1, 2], [2, 3]);

//
/*const func = (...arrays) =>{                           доработать внешний цикл
  const result = arrays[0].filter((element) => {
    //for (let i = 1; i<arrays.length; i++){
      //let indexOfElement = arrays[1].indexOf(element);
      let indexOfElement = arrays[1].includes(element);
       if (indexOfElement >= 0) {
   return element;}
  });
return result;
};

console.log(func(['a', 'b'], ['b', 'c'], ['b', 'e', 'c']));
/*const func = (...arrays) => {
    const result = arrays[0].filter((element) => {
      let indexOfElement = arrays[1].indexOf(element);
      if (indexOfElement >= 0) {
        return element;
      }
    });
    if (arrays.length > 2) {
      func(result, ...arrays.slice(2, arrays.length));
    }
    return Array.from(new Set(result));
  };

  console.log(func(([1, 2], [2, 3])));*/

  //OR

  const task10 = (...arrays) => {
        return arrays.reduce((acc,elem) => acc.filter(el => elem.includes(el)), arrays.shift())
            .filter((el, index,a)=>a.indexOf(el) === index);
  }
  console.log(task10(['a', 'b'], ['b', 'c'], ['b', 'e', 'c']));
  /*const t10 = (...arrays) => arrays
      .reduce(
            (a, e) => a.filter(i => e.includes(i)),
             arrays.pop()
      );*/