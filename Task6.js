function curry(a) {
  return function (b) {
    return a + b;
  };
}
const result = curry(3)(4);
console.log(result);
