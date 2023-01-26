/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */


// get in the console the value input from the support form 

let getEmail = (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    console.log(email)
};

document.querySelector("#getSupport").addEventListener("submit", getEmail)


// hamburguer animation

const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
}))