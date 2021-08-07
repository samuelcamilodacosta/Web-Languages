let a = 10;
let b = 20;
let c = 30;

if (c > a) {
  a = b;
  debugger; //Para o código e vai para o depurador para verificação de código, famoso "breakpoint"
}
a = a + c + b;
console.log(a);
console.log(b);
console.log(c);
