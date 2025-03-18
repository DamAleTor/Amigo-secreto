// Variables
const inputAmigo = document.getElementById("amigo"); 
const nombresAmigos = []; // Lista donde se guardan los nombres de amigos 
const verAmigos = document.getElementById("listaAmigos"); // Para visualizar la lista
const verResultado = document.getElementById("resultado");

// Función para agregar amigo a la lista
function agregarAmigo() { 
    const nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombresAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    nombresAmigos.push(nombre);  
    verAmigos.innerHTML += `<li>${nombre}</li>`; // Agregar a la lista en HTML
    inputAmigo.value = ""; // Limpiar el input
}

// Función para sortear un amigo
function sortearAmigo() { 
    if (nombresAmigos.length === 0) {
        alert("La lista está vacía. Agrega amigos antes de sortear.");
        return;
    }

    const amigoAleatorio = Math.floor(Math.random() * nombresAmigos.length); 
    const nombreSecreto = nombresAmigos[amigoAleatorio];

    verResultado.innerHTML = `<li>Tu amigo secreto es: ${nombreSecreto}</li>`; // Mostrar el resultado
}


