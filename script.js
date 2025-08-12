let amigos = [];
let listaAmigos = document.getElementById("lista-amigos");

function adicionarAmigo() {
  listaAmigos.innerHTML = "";

  if (document.getElementById("nome-amigo").value != "") {
    // inserir nomes no array

    amigos.push(document.getElementById("nome-amigo").value);

    // limpar caixa de texto

    document.getElementById("nome-amigo").value = "";
  } else {
    alert("O campo não pode estar vazio.");
  }

  // adicionar elementos na lista

  amigos.forEach(function (amigo) {
    let itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  });
}
