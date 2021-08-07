let p = Promise.resolve(5 + 1);
console.log('Outros Códigos');
console.log(p);

p.then((value) => {
  return value + 5;
}).then((value) => {
  console.log(value);
});
