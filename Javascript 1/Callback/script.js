console.log('Ainda não chamou o callback.');
setTimeout(function () {
  console.log('Chamou o callback!');
}, 2000); //2 seg
console.log('Ainda não chamou o callback.');
