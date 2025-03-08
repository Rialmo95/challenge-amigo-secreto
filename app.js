// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. 

let amigos = [];

//Se crea la funcion agregarAmigos() que permite guardar una cadena en una lista de amigos

function agregarAmigo(){
    alert("El boton FUNCIONA");
    const nombre = document.querySelector("#amigo").value;
    if (nombre == ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(nombre);
    }
   
    //console.log(nombre); VERIFICA SI ANDA EL INGRESO
    console.log(amigos); //VERIFICA SI ANDA LA LISTA
    /* muestra el nombre por pantalla
    const respuesta = document.getElementById("nombreEnPantalla");
    respuesta.textContent = `Hola ${nombre}`*/
}

function eliminar_espacio(cadena){
    cadena.value = cadena.value.replace(/ /g, "");
}

console.log("Funcionando");