// Definindo a classe Heroi
class Heroi {
  // Construtor com propriedades nome, idade e tipo
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  // Método para atacar
  atacar() {
      let ataque;

      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo.toLowerCase()) {
          case "mago":
              ataque = "usou magia";
              break;
          case "guerreiro":
              ataque = "usou espada";
              break;
          case "monge":
              ataque = "usou artes marciais";
              break;
          case "ninja":
              ataque = "usou shuriken";
              break;
          default:
              ataque = "usou um ataque indefinido";
      }

      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando uma instância da classe Heroi
const meuHeroi = new Heroi("Guerreiro1", 25, "guerreiro");

// Chamando o método de ataque
meuHeroi.atacar(); // Saída: O guerreiro atacou usando espada

