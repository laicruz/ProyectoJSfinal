const form = document.querySelector ("#formulario-contacto")
const nombre = document.querySelector ("#input-nombre")
const apellido = document.querySelector ("#input-apellido")
const email = document.querySelector ("#input-email")
const telefono = document.querySelector ("#input-telefono")

form.onsubmit = (e) => {
    e.preventDefault ()
    fetch ("https://63d325fba93a149755a67dc5.mockapi.io/formulario/api/1/", {
    method: "POST",
    body: JSON.stringify({
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        telefono: telefono.value,
    }),
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then (response => response.json())
    .then (data => console.log (data))
    }
