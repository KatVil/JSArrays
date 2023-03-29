//Given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x){
    return x.reduce((acc,val) => acc*val);
}
//the same:
const grow = (nums) => nums.reduce((product, num) => product * num, 1);