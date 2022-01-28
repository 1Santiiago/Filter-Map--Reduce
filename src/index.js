import "./styles.css";

const precos = [
  "Credito",
  "R$ 200",
  "R$ 400",
  "R$ 600",
  "R$ 9000",
  "Meus Dados"
];

const precosfiltros = precos.filter((e) => {
  return e.includes("R$");
});

const precoEmNumeros = precosfiltros.map((e) => {
  console.log(e);
  return Number(e.replace("R$ ", ""));
});

const total = precoEmNumeros.reduce((anterior, atual) => anterior + atual);

console.log(total);
// A saida foi a soma dos meus numeros.

const fuits = ["banana", "maça", "pera", "uva", "abacate"];

const frutasSelecionadas = fuits.filter((e) => {
  return e.includes("era");
});
console.log(frutasSelecionadas);

const Numeros = [100, 200, 150, 31, 5, 15, 88, 3, 7];
const numerosAltos = Numeros.filter((e) => {
  {
    return e > 100;
  }
});

console.log(numerosAltos);

console.log(fuits.length);
