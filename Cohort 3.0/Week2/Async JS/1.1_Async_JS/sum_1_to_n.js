// use typescript or parse the arguments as number

function sum(n) {
  ans = 0;
  for (let i = 1; i <= n; i++) ans += i;
  return parseInt(ans); // Parsing as integer
}

const n = 50;
console.log(sum(n));
