//Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
let arr = []
for (let i = 1; i < 10; i++) {
   // arr.push( `${i}`.repeat(i) ) ;
   arr.push(String(i).repeat(i)) ;
}
console.log(arr);

//or
/*function addArr(){
    let arr1 = []
    for (let i =1; i<5; i++) {
      let a = ''
      for (let j=0; j<i; j++) {
        a = a+i
      }
    arr.push(a)
   }
     return arr;
   }
   console.log(addArr());
   //or
function getArr(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(String(i))
    }
    const newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i].repeat(i))
    }
    return newArr
}*/