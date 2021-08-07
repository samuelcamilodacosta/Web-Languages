//desestruturação
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];
const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(15));
