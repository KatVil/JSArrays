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