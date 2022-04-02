export function ampliarInformacion(event){

    let producto={}
        
    if(event.target.classList.contains("btn")){

        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio: event.target.parentElement.querySelector("h6").textContent
        }

        //ASOCIANDO LOS VALORES RESPECTIVOS AL MODAL
        console.log(producto)
        let foto=document.getElementById("fotoInfo")
        foto.src=producto.foto
        let nombre=document.getElementById("nombreInfo")
        nombre.textContent=producto.nombre
        let precio=document.getElementById("precioInfo")
        precio.textContent=producto.precio

        return producto
   }

}