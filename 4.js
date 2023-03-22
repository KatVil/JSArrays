const func = array => {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
      obj[array[i][0]] = array[i][1];
    }
    return obj;
  };
  console.log(func([['a', 1], ['b', 2]])); // { 'a': 1, 'b': 2 }
  
  // or
  
  const func2 = array => {
    return array.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc[item[0]] = item[1];
      }
      return acc;
    }, {});
  };
  console.log(func2([['a', 1], ['b', 2]])); 