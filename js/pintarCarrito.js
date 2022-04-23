export function pintarCarrito(suma){

    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")

}
export function limpiarformulario(){
    document.getElementById("formulario").reset();
}