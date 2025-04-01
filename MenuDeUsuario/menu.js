const prompt = require('prompt-sync')({ sigint: true });

let usuarios = [];


function Menu() {
  console.log("=============================================================================");
  console.log("MENU:");
  console.log(`1 - Adicionar usuarios`);
  console.log(`2 - Listar usuarios`);
  console.log(`3 - Buscar usuario`);
  console.log(`4 - Deletar usuario`);
  console.log(`5 - Sair`);
}


function lerEntrada(entrada) {
  switch (entrada) {
    case "1":
      adicionarUsuario();
      break;
    case "2":
      listarUsuario();
      break;
    case "3":
      buscarUsuario();
      break;
    case "4":
      deletarUsuario();
      break;
    case "5":
      return false; //Sair do programa
    default:
      console.log("Opção inválida. Tente novamente.");
  }
  return true; //Continuar no programa
}

function adicionarUsuario() {
  let entrada = true;
  while (entrada) {
    console.log("=============================================================================\n");
    const name = prompt("Insira seu nome: ");
    if (name === "") {
      console.log("Nome não pode ser vazio.");
      return;
    }
    const idade = prompt("Insira sua idade: ");
    if (idade < 0 || isNaN(idade)) {
      console.log("\n Idade Inválida ")
      return;
    }
    usuarios.push({ name, idade });
    console.log("\n Usuário cadastrado com sucesso!");
    entrada = false;
  }
}

function listarUsuario() {
  while (true) {
    if (usuarios.length === 0) {
      console.log("\n Não há usuários cadastrados");
      return;
    }
    for (let i = 0; i < usuarios.length; i++) {
      console.log(`${i} - Nome: ${usuarios[i].name}, Idade: ${usuarios[i].idade}`);
    }
    return;
  }
}

function buscarUsuario() {
  while (true) {
    console.log("=============================================================================\n");
    const index = prompt("Insira o index do usuário: ");

    if (isNaN(index) || index < 0) {
      console.log("índices fornecido é inválido");
      return;
    } else if (index >= usuarios.length) {
      console.log("Usuário não encontrado");
      return;
    }
    const usuario = usuarios[index];
    console.log(`\n Nome: ${usuario.name}, Idade: ${usuario.idade}`);
    return;
  }
}

function deletarUsuario() {
  while (true) {
    console.log("=============================================================================\n");
    const elemento = prompt("Insira o elemento do usuário: ");

    if (isNaN(elemento) || elemento < 0) {
      console.log("índices fornecido é inválido");
      return;
    } else if (elemento >= usuarios.length) {
      console.log("Usuário não encontrado");
      return;
    }
    const deleteUser = usuarios.splice(elemento, 1);
    console.log(`Usuário ${deleteUser[0].name}, ${deleteUser[0].idade} anos, deletado`);
    return;
  }
}

function iniciarPrograma() {
  let continuar = true;
  while (continuar) {
    Menu();
    console.log("=============================================================================");
    let Escolha = prompt('Escolha uma opção: ');
    continuar = lerEntrada(Escolha);
  }
}

iniciarPrograma();