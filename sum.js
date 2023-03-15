let sum = 0;
for (i = 1; i <= 10; i++) {
  result = sum + i;
  console.log(sum + '+' + i + "=" + result);
  sum += i; // sum = sum + 1
}
console.log(sum);
