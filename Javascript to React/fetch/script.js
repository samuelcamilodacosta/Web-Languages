fetch('https://httpbin.org/get')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
