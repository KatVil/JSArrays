function DNAStrand(dna) {
    return dna.replace(/A|T|C|G/g, function(x) {
        return (x=="A") ? "T" : (x=="T") ? "A" : (x=="C") ? "G" : "C";
    });
}
//OR
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }
  //OR
let pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}
//OR
let pair = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pair[c]);