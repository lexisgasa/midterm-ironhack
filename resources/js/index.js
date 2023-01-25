/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */


// get in the console the value input from the support form 

let getEmail = (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    console.log(email)
};

document.querySelector("#getSupport").addEventListener("submit", getEmail)

