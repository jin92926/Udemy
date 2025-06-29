// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fib = (num) => {
  let result = 0;
  if (num === 1 || num === 2) return 1;

  result = fib(num - 2) + fib(num - 1);

  return result;
};
