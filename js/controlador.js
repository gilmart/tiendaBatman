//IMPORTANDO MODULOS
import { pintarTienda } from "./llenadoTienda.js";
import {ampliarInformacion} from "./ampliarInfo.js";
import {pintarCarrito} from "./pintarCarrito.js";


//LLAMANDO AL MODULO PINTAR
let producto={}
pintarTienda()
let contenedor=document.getElementById("contenedorVenta")



let modalInfoProducto
//1. LLAMANDO AL MODULO ampliarInfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    if (event.target.classList.contains("btn")){
     modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProducto'))
    
   producto = ampliarInformacion(event)
    modalInfoProducto.show()
    }
})

//DETECTAR LA ACCION DE AÑADIR AL CARRITO
//CARRITO ES UN ARREGLO DE PRODUCTOS (ARREGLO DE OBJETOS)
//2. RUTINA PINTAR CARRITO


let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){
    console.log("estoy añadiendo al carrito")

    //1. capturar la cantidad del producto
    let cantidad= document.getElementById("cantidadProducto").value

    //2. AGREGO LA CANTIDAD AL OBJETO PRODUCTO
    producto.cantidad=cantidad

    //3. AGREGAR EL PRODUCTO AL CARRITO
    carrito.push(producto) //LLENANDO EL CARRITO

    //4.CALCULO LA SUMATORIA DE CANTIDADES
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    
    //
     let totalP=0
    carrito.forEach(function(producto){
       totalP=+totalP +producto.precio*producto.cantidad
       console.log(totalP)
 
        let totalModal= document.getElementById("totalModal")
        totalModal.classList.add("text-center")
        totalModal.textContent= "Total pesos $:" +totalP

    // CALCULAR DIVISAS
    let dolar=4000
    let valorp = document.getElementById("pesos")
    let valord=document.getElementById("dolar")
    let divisap=document.getElementById("divisapesos") 
    let divisad= document.getElementById("divisadolar")   

    carrito.forEach(function(producto){
    divisap.addEventListener("click", function(evento){

            if( valorp === pesos){
                totalModal.textContent= "Total pesos $:" +totalP
            }
            else { 
                    
                totalModal.textContent= "Total dolares $:" +totalP/dolar
            }

    divisad.addEventListener("click", function(evento){

                if( valord == dolar){
                   console.log("funcniona el if de dolar")
                }
                else { 
                    
                    totalModal.textContent= "Total dolares $:" +totalP/dolar
                }
            })
               
        })
    })


})
    pintarCarrito(suma)
    modalInfoProducto.hide()
    document.getElementById("cantidadProducto").value = "1";
})



//3. RUTINA LIMPIAR CARRITO

let limpiarCarrito = document.getElementById("limpiar")
limpiarCarrito.addEventListener("click",function(evento){
    carrito=[]

    let capsula = document.getElementById("capsula")
    capsula.textContent=0
    capsula.classList.add("invisible")

    modalInfoProducto.hide()

})

//4. VER RESUMEN DE VENTAS
//function resumenCarrito (){
let botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click",function(evento){

    //let contenedor=document.getElementById("contenedorVenta")
    let modalVenta = new bootstrap.Modal(document.getElementById('resumenCarrito'))

    //BORRAR CONTENIDO HTML DE UNA SECCION
    contenedor.innerHTML=""

    //RECORRER EL CARRITO PARA PINTAR LOS PRODUCTOS EN LA FACTURA
    carrito.forEach(function(producto){

        //TRAVERSING
        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1 = document.createElement("div")
        fila.classList.add("col-12","col-md-4")
        let columna2 = document.createElement("div")
        fila.classList.add("col-12","col-md-8")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let nombre=document.createElement("h4")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre

        let cantidad=document.createElement("h6")
        cantidad.classList.add("text-center")
        cantidad.textContent="Cantidad de articulos: "+producto.cantidad

        let precio=document.createElement("h6")
        precio.classList.add("text-center")
        precio.textContent = "Precio: " +producto.precio

        let subtotal= document.createElement("h6")
        subtotal.classList.add("text-center")
        subtotal.textContent= "Subtotal: " +producto.precio*producto.cantidad
        
        let id=document.createElement("h5")
        id.classList.add("text-center")
        id.textContent=producto.id

        let eliminar = document.createElement("button")
        eliminar.setAttribute("type" , "button")
        eliminar.classList.add('btn','btn-danger', 'mx-5','borrar')
        eliminar.textContent = "X"
        eliminar.style.marginLeft="1rem"
        eliminar.textContent="eliminar producto " 
        eliminar.dataset.producto=producto
        eliminar.addEventListener('click', eliminarProductoDelCarrito)
        console.log(carrito)

        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)

        columna2.appendChild(nombre)
        columna2.appendChild(cantidad)
        columna2.appendChild(precio)
        columna2.appendChild(subtotal)
        columna2.appendChild(id)
        columna2.appendChild(eliminar)

        contenedor.appendChild(fila)

      
    })

    modalVenta.show()  

    //modalVenta.show()
})  
function eliminarProductoDelCarrito(evento){
   // let id = evento.target.dataset.producto¨
   console.log(carrito)
    let id= evento.target.parentElement.querySelector("h5").textContent
    carrito = carrito.filter((producto)=>{
        return (producto.id !== id) 
    })
  //  modalInfoProducto.hide() 
console.log("holaaaa" +id)
console.log(carrito)

}





/* 

function eliminarProductoDelCarrito (prodId){
    let item = carrito.find((producto)=> producto.id === prodId)
    let indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
   // console.log("boton eliminar")
}

resumenCarrito()


    //ELIMINAR PRODUCTO DE CARRITO


    function eliminarProductoDelCarrito (evento){

        let nombre = evento.target.dataset.producto
        carrito = carrito.filter((carritoNombre)=>{
            return carritoNombre !== nombre
        })

        console.log("click eliminar boton")
        
    }

*/
    
    /*
    .onclick = function(){myFunction()}
      function myFunction(){
        if(moneda  == 1){

            console.log("pesos no funciona")

            resultado.textContent= "pesos pesos"
            
            }
            else if (moneda==2) {

            console.log("dolares no funciona")
             resultado.textContent= "dolar dolar1"
            }
            else {

                console.log(" no funciona")
                resultado.textContent="error..."
            }
              
    
        }
    
*/

//SUMAR TOTAL
/*
boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){
  
    
     console.log("SUMANDO TOTALES")

         let totalP=0
         carrito.forEach(function(producto){

            totalP=+totalP +producto.precio*producto.cantidad
            console.log(totalP)
     
        })
         


})
*/