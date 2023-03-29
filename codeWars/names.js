function abbrevName(name){
  let s = name.slice(0,1);
  let arr = name.split(' ');
  let n = arr.slice(1);
  let s1 = n.join();
  let s2 = s1.split('');
  let s3 = s2.shift();
  let s4 = s.toUpperCase()+'.'+s3.toUpperCase();
  return s4;
}
//OR
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
//OR
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }