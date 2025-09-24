let amigos = [];
let inputAmigos = document.querySelector('#amigo');
let listadoAmigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado')

inputAmigos.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    agregarAmigo();
  }
});

function agregarAmigo() {
    if (inputAmigos.value === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        if (amigos.includes(inputAmigos.value)) { 
            alert("Ya existe el nombre, por favor ingresar uno diferente.");
            inputAmigos.value='';
        } else {
            amigos.push(inputAmigos.value);
            escribirLista();
            console.log(amigos)
            inputAmigos.value='';
            inputAmigos.focus();
        }
    }
    return;
}

function escribirLista () {
    listadoAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listadoAmigos.appendChild(li);
  }
}

function sortearAmigo() {
    let numeroRandom = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[numeroRandom];
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
    return;
}