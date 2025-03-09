// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. 

var amigos = [];
//let cantidadAmigos = amigos.length;
let numeroSorteado = 0;

//Se crea la funcion agregarAmigos() que permite guardar una cadena en una lista de amigos

function agregarAmigo(){
    alert("El boton FUNCIONA");
    const nombre = document.querySelector("#amigo").value;
    if (nombre == ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(nombre);
        limpiarCaja();
        mostrarLista(); 
    }
   
    //console.log(nombre); VERIFICA SI ANDA EL INGRESO
    console.log(amigos); //VERIFICA SI ANDA LA LISTA
    /* muestra el nombre por pantalla
    const respuesta = document.getElementById("nombreEnPantalla");
    respuesta.textContent = `Hola ${nombre}`*/
}

function sortearAmigo(){
    alert("Anda el boton DEL SORTEO");
    quitarListaAmigosEnPantalla();
    console.log(numeroSorteado);
    numeroSorteado = generarNumeroAzar();
    console.log(numeroSorteado);
    mostrarResultado(numeroSorteado);
    //borrarListaAmigos()
}

function eliminar_espacio(cadena){
    cadena.value = cadena.value.replace(/ /g, "");
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function quitarListaAmigosEnPantalla(){
    const element = document.getElementById("listaAmigos");
    //element.remove();
    element.innerHTML = '';

}

function borrarListaAmigos(){
    amigos = [];
}

function generarNumeroAzar(){
    //let numero = 1
    let numero = Math.floor(Math.random()*amigos.length);
    return numero;
}

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    //for (i = 0; i < amigos.length; ++i){
    let li = document.createElement('li');
    li.innerText = amigos.at(-1);
    lista.appendChild(li);
    //}
    //console.log("mostrarLista se accede");
    //console.log(lista);
    //console.log(li)
}

function mostrarResultado(numeroSorteado){
    let resultado = document.getElementById("resultado");
    let li = document.createElement('li');
    li.innerText = amigos[numeroSorteado]
    resultado.appendChild(li);
}


console.log("Funcionando");
