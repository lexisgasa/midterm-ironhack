/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

let getData = (e) => {
    e.preventDefault();
    let name = document.querySelector("#userName").value;
    let email = document.querySelector("#mail").value;
    let phone = document.querySelector("#phone").value;
    let msg = document.querySelector("#message").value;
    console.log(`name: ${name}, email: ${email}, phone: ${phone}, message: ${msg}`)
};

document.querySelector("#getData").addEventListener("submit", getData)