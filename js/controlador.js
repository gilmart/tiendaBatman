//IMPORTANDO MODULOS
import { pintarTienda } from "./llenadoTienda.js";
import {ampliarInformacion} from "./ampliarInfo.js";
//LLAMANDO AL MODULO PINTAR
let producto={}
let articulosCarrito={}
pintarTienda()

//LLAMANDO AL MODULO ampliarInfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    if (event.target.classList.contains("btn")){
    let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProducto'))
    
    ampliarInformacion(event)
    modalInfoProducto.show()
    }
})

//DETECTAR LA ACCION DE AÑADIR AL CARRITO
//CARRITO ES UN ARREGLO DE PRODUCTOS (ARREGLO DE OBJETOS)

let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){
    console.log("estoy añadiendo al carrito")

    //1. capturar la cantidad del producto
    let cantidad= document.getElementById("cantidadProducto").value

    //2. AGREGO LA CANTIDAD AL OBJETO PRODUCTO
    producto.cantidad=cantidad

    //3. AGREGAR EL PRODUCTO AL CARRITO
    carrito.push(producto)

    //4.CALCULO LA SUMATORIA DE CANTIDADES
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })

    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")


  
})

let limpiarCarrito = document.getElementById("limpiar")
limpiarCarrito.addEventListener("click",function(evento){
    carrito=[]

    let capsula = document.getElementById("capsula")
    capsula.textContent=0
    capsula.classList.add("invisible")
})

//LISTA DE ITEMS DEL CARRITO



