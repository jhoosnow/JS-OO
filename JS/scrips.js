// ESTA É A CLASSE MAIS ABSTRATA QUE TEMOS
class ContaBancaria {
  // SEMPRE QUE FORMOS COLOCAR OS PARAMETROS DO QUE FOR COLOCADO NA CLASSE, USAMOS O CONSTRUCTOR
  constructor(agencia, numero, tipo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0
  }

  // SEMPRE QUE UM VALOR TIVER UM GET E UM SET A GENTE COLOCA UM "_" NA FRENTE PARA QUE A GENTE POSSA UTILIZAR O NOME NO GET E NO SET
  get saldo() {
    return this._saldo
  }
  set saldo(valor) {
    this._saldo = valor
  }
  //MÉTODO SACAR
  sacar(valor) {
    //VERIFICAR SE O USUÁRIO NÃO VAI TENTAR SACAR ACIMA DO QUE TEM NO SALDO
    if (valor > this._saldo) {
      return (
        'Operação negada, saldo insuficiente!' + 'Saldo atual: ' + this._saldo
      )
    }
    this._saldo = this._saldo - valor
    return this._saldo
  }

  depositar(valor) {
    this._saldo = this._saldo + valor
    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero)
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'poupança'
  }
}

class ContaUnicersitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero, saldo)
    this.tipo = 'universitária'
  }

  sacar(valor) {
    if (valor > 500) {
      return 'Operação negada!, Limite de saque acima do permitido!'
    }
    this._saldo = this._saldo - valor
  }
}
