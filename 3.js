let arr = [0, 1, false, 2, undefined, '', 3, null];
const func = (arr) => {
  return arr.filter(Boolean);
}
console.log(func(arr));