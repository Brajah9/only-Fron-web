// variables

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const soporte = document.querySelector('.li-C');
const contacto = document.querySelector('.li-A');

// Eventos

card1.addEventListener('click', card1Click);
card2.addEventListener('click', card2Click);
card3.addEventListener('click', card3Click);
card4.addEventListener('click', card4Click);
soporte.addEventListener('click', soporteClick);
contacto.addEventListener('click', contactoClick);

// Funciones

function card1Click() {
    confirm("💵 Precio: $3000 ARS");
}

function card2Click() {
    confirm("💵 Precio: $6400 ARS");
}

function card3Click() {
    confirm("💵 Precio: $3400 ARS");
}

function card4Click() {
    confirm("💵Precio: $5000 ARS");
}

function soporteClick() {
    prompt("¿Cual fue su problema?");
}

function contactoClick() {
    alert("IG: @Ejemplo / ¡Gracias por contactarnos!");
}