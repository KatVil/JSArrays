function XO(str) {
    // return str.match(/o/ig).length == str.match(/x/ig).length;//doesn't pass tests without /i flag for insensitiveness
   let s = Array.from(str.toLowerCase());
   return s.filter(x => x==='x').length===s.filter(x => x==='o').length;
   
 }
 //OR
 function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
