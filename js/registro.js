import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import {limpiarformulario} from "./pintarCarrito.js";

let botonregistro = document.getElementById("botonRegistro")
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
        // ...
        console.log("exito en el registro")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("uppss ")
    });

    limpiarformulario()

})