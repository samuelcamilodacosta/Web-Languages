let num = 17;
let div = 0;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    div++;
  }
}
if (div == 2) {
  console.log(`O númereo ${num} é primo.`);
} else {
  console.log(`O número ${num} não é primo.`);
}
