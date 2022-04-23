import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import {limpiarformulario} from "./pintarCarrito.js";

let botonregistro = document.getElementById("botonRegistro")
let modalInformativo = new bootstrap.Modal(document.getElementById('modalInformativo'))

botonregistro.addEventListener("click", function(evento){

    evento.preventDefault()
    console.log("registrando")

    let correo = document.getElementById("correo").value
    let password = document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...

        let textoinformativo=document.getElementById("informacionGeneral")
        let formulario=document.getElementById("formulario")
        formulario.reset()

        textoinformativo.textContent="Exito registrando al usuario"
        modalInformativo.show()
        setTimeout(function(){
            modalInformativo.hide()
        },3000)

        limpiarformulario()
    })

    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        let textoinformativo=document.getElementById("informacionGeneral")
        textoinformativo.textContent="Usuario no Válido: "+errorMessage
        modalInformativo.show()

    });


})