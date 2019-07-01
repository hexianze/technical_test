function fib(num) {
  let arr = [];
  if (num == 1) {
    return (arr = [1]);
  } else if (num == 2) {
    return (arr = [1, 1]);
  } else {
    arr = [1, 1];
    let a = 1;
    let b = 1;
    let c = 2;

    for (let i = 2; i < num; i++) {
      arr.push(c);
      a = b;
      b = c;
      c = a + b;
    }
    let finalResult = arr.filter(item => {
      return item < num;
    });
    return finalResult;
  }
}

console.log(fib(8));
