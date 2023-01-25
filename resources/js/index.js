/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

let getEmail = (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    fetch("contact.json", {
        method: "POST",
        body: JSON.stringify({email:"email"}), 
        headers: {
            "Content-type": "application/json; charset=UFT-8",
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json) )
    .catch((error) => console.log(error))
};

document.querySelector("#getSupport").addEventListener("submit", console.log("test"))




// let getEmail2 = (e) => {
//     e.preventDefault();
//     let email = document.querySelector("#email").value;
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             email: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json) )
//     .catch((error) => console.log(error))
// }
// document.querySelector("#getSupport").addEventListener("submit", getEmail2)