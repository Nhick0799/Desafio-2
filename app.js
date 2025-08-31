let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío'

function ElBotonFueClicado() {
    alert('El Boton fue clicado')
}
// Botón "Prompt"
function Pregunta() {
    let ciudad = prompt("¿Cuál es el nombre de una ciudad de Brasil?");
    alert("Estuve en " + ciudad + " y me acordé de ti");
}

// Botón "Alerta"
function YoAmoJs() {
    alert("Yo amo JS");
}

// Botón "Suma"
function Resultado() {
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    let suma = num1 + num2;
    alert("El resultado de la suma es: " + suma);
}