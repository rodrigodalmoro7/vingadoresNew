class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(
    nome,
    altura,
    peso,
    poderes,
    temArmadura,
    temArma,
    isMembroFundador,
    isImortal
  ) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }

  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[3]}`);
  }
}

// const thor = new Vingador(
//   "Thor",
//   "1.85",
//   "100kg",
//   ["Deus do Trovão", "Super força", "Vôo", "Longevidade"],
//   true,
//   true,
//   false
// );

const ironMan = new Vingador(
  "Homem de Ferro",
  "1.78",
  "83kg",
  ["Dinheiro a dar com pau", "Inteligência", "Vôo", "Armadura inteligente"],
  true,
  true,
  false
);

// document.getElementById("lutar").onclick = function () {
//   thor.lutar();
// };

document.getElementById("lutar").onclick = function () {
  ironMan.lutar();
};
