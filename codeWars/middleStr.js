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
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
//OR
function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}