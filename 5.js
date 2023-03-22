export const func = (arr, ...args) => {
    let filteredArr = [...arr];
  
    for (let i = 0; i < args.length; i += 1) {
      filteredArr = filteredArr.filter((el) => el !== args[i]);
    }
  
    return filteredArr;
  };