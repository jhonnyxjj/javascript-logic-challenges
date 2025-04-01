function fightPokemon(pokemons, oponente) {
  let resultadoBatalha = {
    Ganham: [],
    Empatam: [],
    Perdem: [],
  };

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].attack > oponente) {
      resultadoBatalha.Ganham.push(pokemons[i].name);
    } else if (pokemons[i].attack === oponente) {
      resultadoBatalha.Empatam.push(pokemons[i].name);
    } else {
      resultadoBatalha.Perdem.push(pokemons[i].name);
    }
  }
  return resultadoBatalha;
}
const pokemons = [
  { name: "Blastoise", attack: 90 },
  { name: "Iron Leaves", attack: 80 },
  { name: "Lucario", attack: 70 },
];
const oponente = 80;

const resultadoBatalha = fightPokemon(pokemons, oponente);
/*
console.log("Ganham:", resultadoBatalha.Ganham);
console.log("Perdem:", resultadoBatalha.Empatam);
console.log("Ëmpatam", resultadoBatalha.Perdem);
*/
