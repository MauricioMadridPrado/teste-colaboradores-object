const totalProducao = 10000;

const bonificacoes = [
  {
    cargo: "auxiliar",
    bonus: 1,
  },
  {
    cargo: "producao",
    bonus: 1.3,
  },
  {
    cargo: "logistica",
    bonus: 1.2,
  },
  {
    cargo: "manutencao",
    bonus: 1.6,
  },
  {
    cargo: "gestor",
    bonus: 3,
  },
];
const bonusPorProducao = {
  calculaBonus(){
    console.log(totalProducao * 0.01)
  }
}

const pisoSalarial = 1000;
const colaborador = {
  nome(nome){
    this.nome = nome;
    return this
  },
  cargo(cargo){
    this.cargo = cargo;
    return this
  },
  salario: this.salarioFinal,
  calculaSalario() {
    const valorDaBonificacao = verificaBonificacao(this.cargo);
    const salarioFinal = pisoSalarial * valorDaBonificacao;
    return salarioFinal;
  },

}

;
const mauricio = Object.create(colaborador).nome('Mauricio').cargo('producao')
Object.assign(mauricio, bonusPorProducao)
console.log(mauricio)
console.log(mauricio.calculaSalario())
console.log(mauricio.calculaBonus())

// const tiago = Object.create(colaborador).nome('Tiago').cargo('manutencao')
// console.log(tiago)
// console.log(tiago.calculaSalario())

function verificaBonificacao(posicao) {
  bonificacoes.find((bonus) => {
    if (bonus.cargo === posicao) {
      return (bonusDoCargo = bonus.bonus);
    }
  });
  return bonusDoCargo;
}
