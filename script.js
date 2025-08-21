let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let sorteados = document.getElementById("resultado");

function adicionarAmigo() {
  listaAmigos.innerHTML = "";
  sorteados.innerHTML = "";

  if (document.getElementById("amigo").value != "") {
    // inserir nomes no array

    amigos.push(document.getElementById("amigo").value);

    // limpar caixa de texto

    document.getElementById("amigo").value = "";
  } else {
    alert("O campo não pode estar vazio.");
  }

  // adicionar elementos na lista

  amigos.forEach(function (amigo) {
    let itemLista = document.createElement("li");
    itemLista.innerHTML = amigo;
    listaAmigos.appendChild(itemLista);
  });
}

// sortear amigo

function sortearAmigo() {
  if (amigos.length > 1) {
    listaAmigos.innerHTML = "";
    sorteados.innerHTML = "";

    indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = document.createElement("li");
    sorteados.appendChild(amigoSorteado);
    amigoSorteado.innerHTML =
      "O amigo secreto sorteado é: " + amigos[indiceSorteado];
    amigos = [];
  } else {
    alert("Adicione mais de 1 amigo na lista.");
  }
}
