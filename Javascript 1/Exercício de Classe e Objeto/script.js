class Conta {
  constructor(saldoCC, saldoCP, juros) {
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }
  deposito(valor) {
    this.saldoCC += valor;
  }
  saque(valor) {
    this.saldoCC -= valor;
  }
  transferenciaCP(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }
  transferenciaCC(valor) {
    this.saldoCP -= valor;
    this.saldoCC += valor;
  }
}

let conta = new Conta(1000, 5000, 1);
console.log(conta);
conta.saque(600);
console.log(conta);
conta.deposito(8000);
console.log(conta);
conta.transferenciaCP(5000);
console.log(conta);
