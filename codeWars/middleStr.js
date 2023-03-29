function getMiddle(s)
{
  if(s.length%2==0){
    return s.charAt(s.length/2 - 1)+ s.charAt(s.length/2);
  }else if(s.length%2!=0){
    return s.charAt(s.length/2);
  }
}
//OR
function getMiddle(s)
{
    /*let temp = s.length / 2 - 1;              to ubderstand how it works
    let temp2 = Math.ceil(s.length / 2 - 1);
    let temp3 = s.substr(2);
    let temp0 = s.substr(1);
    let temp1 = s.substr(Math.ceil(s.length / 2 - 1),1);
    console.log(temp, temp2, temp3, temp0, temp1);*/
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
//OR
function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}