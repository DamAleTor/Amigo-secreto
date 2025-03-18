//variables
const input_Amigo = document.getElementById("amigo"); 
const nombres_Amigos = []; // donde se guarda nombre de amigos 
const ver_Amigos = document.getElementById("listaAmigos"); //para ver
const ver_Resultado = document.getElementById("resultado");

//funciones
function agregarAmigo() { //guardo el nombre en la lista
    nombres_Amigos.push(input_Amigo.value);
    
     ver_Amigos.innerHTML += `<li>${input_Amigo.value}</li>`; // nombres en la lista y ver en html
                 
};

function sortearAmigo(){ //seleccionar un nombre aleatorio
    const amigo_Aleatorio = Math.floor (Math.random() * nombres_Amigos.length); // constante que elige un numero aleatorio.
    const nombre_secreto = nombres_Amigos[amigo_Aleatorio]; // selecion de nombre que corresponde al numero elegido
    ver_Resultado.innerHTML = `<li> Tu amigo secreto es: ${nombre_secreto}<li>`; //ver nombre elegido

    
}

