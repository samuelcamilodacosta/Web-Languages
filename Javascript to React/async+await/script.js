async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
const produtos = fetchProdutos('https://httpbin.org/get');
