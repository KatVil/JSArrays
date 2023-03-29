function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
//OR
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x);
//or
const countBy = (x, n) =>
  [...Array(n)].map((_, idx) => ++idx * x);