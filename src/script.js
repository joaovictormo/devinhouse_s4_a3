//var btnAdicionar = document.querySelector("#btnAdd");
var form = document.querySelector("#form");
var inputItem = document.getElementById("inputItem");
var lista = document.querySelector("#lista");
var btnSalvar = document.querySelector("#btnSalvar");

var itensDaLista = [];

btnSalvar.addEventListener("click", salvarLista);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    addItemNaLista(inputItem.value);
});

carregarLista();

function addItemNaLista(txtItem) {
    var optDefault = document.getElementById("optDefault");
    if (txtItem) {
        var novoItem = document.createElement("option");
        novoItem.innerText = txtItem;
        novoItem.value = txtItem;
        lista.appendChild(novoItem);
        itensDaLista.push(txtItem);
        if (optDefault) {
            lista.remove(optDefault);
        }
        inputItem.value = "";
        inputItem.focus();
    } else {
        alert("Favor inserir um item.");
    }
}

function salvarLista() {
    localStorage.setItem("lista", JSON.stringify(itensDaLista));
}

function carregarLista() {
    var listaLocalStorage = localStorage.getItem("lista");
    if (listaLocalStorage) {
        listaLocalStorage = JSON.parse(listaLocalStorage);
        for (var i = 0; i < listaLocalStorage.length; i++) {
            addItemNaLista(listaLocalStorage[i]);
        }
    }
}
