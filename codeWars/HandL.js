//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    // ...
    let arr = numbers.split(' ');  
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let res = `${max} ${min}`;
    return res;
    }
    //OR
    function highAndLow(numbers){
        numbers = numbers.split(' ').map(Number);
        return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
      }
      //OR
      function highAndLow(numbers){
        numbers = numbers.split(' ');
        return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
      }