function fib(n) {
  if (n <= 0) {
    return "This is not valid fibonacci number";
  } else if (n === 1) {
    return [0];
  } else if (n === 3) {
    return [1, 1, 2];
  }
  var result = [0, 1];
  for (var i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  result.shift();
  var finalResult = result.filter(item => {
    return item < n;
  });
  return finalResult;
}
console.log(fib(9));
