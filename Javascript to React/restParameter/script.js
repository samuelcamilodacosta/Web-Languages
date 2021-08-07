function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Facebook', 'Bruno', 'Diego', 'Samuel');
