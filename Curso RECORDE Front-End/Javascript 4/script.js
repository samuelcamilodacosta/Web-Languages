function imprimeHoraFormatada() {
  let data = new Date();

  let hora = data.getHours();
  let min = data.getMinutes();
  let seg = data.getSeconds();
  let hora_formatada = hora + ':' + min + ':' + seg;
  console.log(hora_formatada);
}
imprimeHoraFormatada();
