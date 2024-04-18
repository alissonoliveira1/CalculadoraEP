class Calculadora {

    constructor() {
        this.nrVisor = '0';
        this.ptDecimal = false;
        this.estadoErro = false;
        this.memTemp = '';
        this.memoria = 0;
        this.mensagemErro = '';
        this.iniciouSegundo = false;
        this.op = {
            NOP: 0,
            SUM: 1,
            SUB: 2,
            MULT: 3,
            DIV: 4
        };
    
        this.ligada = true;
        this.opAtual = this.op.NOP;
    }
  
    ligar() {
      this.nrVisor = '0';
        this.ligada = true;
    }
    desligar() {
      this.ligada = false;
      this.nrVisor = '0'; 
  }
  teclaPorcentagem() {
    if (this.estadoErro) return;
    let num = parseFloat(this.nrVisor);
    this.nrVisor = String(num / 100);
  }
    teclaQuadrado() {
      if (this.estadoErro) return;
      let num = parseFloat(this.nrVisor);
      this.nrVisor = String(num * num);
  }
  definirErro(mensagem) {
    this.estadoErro = true;
    this.nrVisor = 'ERRO!';
    this.mensagemErro = mensagem;
  }
  emErro() {
    return this.estadoErro;
  }
  limparErro() {
    this.estadoErro = false;
    this.mensagemErro = '';
  }
  
    teclaRaizQuadrada() {
      if (this.estadoErro) return;
      let num = parseFloat(this.nrVisor);
      if (num < 0) {
          this.estadoErro = true;
          this.nrVisor = 'ERRO!';
          return;
      }
      this.nrVisor = String(Math.sqrt(num));
  }
  teclaInverso() {
    if (this.estadoErro) return;
    let num = parseFloat(this.nrVisor);
    if (num === 0) {
        this.estadoErro = true;
        this.nrVisor = 'ERRO!';
        return;
    }
    this.nrVisor = String(1 / num);
  }
}  