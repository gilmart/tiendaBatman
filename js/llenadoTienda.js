export function pintarTienda(){

// ARREGLO DE OBJETOS

let productos = [
    {id:0, nombre:"Lampara", precio: 450000, 
    foto:'img/producto1.jpg',
    descripcion:"Batimovil de la ultima pelicula de Batman original."   
    },
    
    {id:1,
    nombre:"Poster",
    precio: 50000,
    foto: 'img/producto2.jpg',
    descripcion: "Puzzle 3D de la ultima pelicula de Batman original.",
    },

    {id:2,
    nombre:"Cobija ",
    precio: 10000,
    foto: 'img/producto3.jpg',
    descripcion: "POP de la ultima pelicula de Batman original."
    },

    {id:3,
    nombre:"Pelicula ",
    precio: 20000,
    foto: 'img/producto4.jpg',
    descripcion: "PenDrive de la ultima pelicula de Batman original."
    },

    {id:4,
    nombre:"Batimovil ",
    precio: 15000,
    foto: 'img/producto5.jpg',
    descripcion: "Figura de la ultima pelicula de Batman original."
    },

    {id:5,
    nombre:"Banner ",
    precio: 35000,
    foto: 'img/producto6.jpg',
    descripcion: "Camiseta de la ultima pelicula de Batman original."
    },

    {id:6,
    nombre:"Almohada ",
    precio: 450000,
    foto: 'img/producto7.jpg',
    descripcion: "Batimovil de la ultima pelicula de Batman original."
    },

    {id:7,
    nombre:"Cubrecama ",
    precio: 50000,
    foto: 'img/producto8.jpg',
    descripcion: "Figura batman de la ultima pelicula de Batman original."
    },

    {id:8,
    nombre:"Sudadera ",
    precio: 90000,
    foto: 'img/producto9.png',
    descripcion: "Films de la ultima pelicula de Batman original."
    },

    {id:9,
    nombre:"Reloj ",
    precio: 10000,
    foto: 'img/producto10.jpg',
    descripcion: "Film Blu Ray de la ultima pelicula de Batman original."
    },
        
]
/*
//RECORRIENDO UN ARREGLO CON JS - BUSCAR/SELECCIONAR/ESCULCAR
productos.forEach(function(producto){
    console.log("lo q quiera")
})

//ESCUCHANDO CLICK EN EL BOTON
let boton=document.getElementById("boton")

//DETECTANDO EL PRIMER EVENTO
boton.addEventListener("click",cambiarFoto)

//CREANDO UNA FUNCION

function cambiarFoto(){
    let foto=document.getElementById("fotoPrueba")
    foto.src="img/producto1.jpg"
}*/

let fila=document.getElementById("fila")
 

//RECORRER ARREGLO
productos.forEach(function(producto){
    /*
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)
    */
    //RECETA PARA PINTAR JS
    //1. COMIENCE A CREAR LA ESTRUCTURA QUE NECESITE

    //CREO LA TARJETA
    let columna= document.createElement("div")
    columna.classList.add("col")

    //CREO LA TARJETA
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src= producto.foto  

    //h4 CON LA CLASE TEXT-CENTER
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    let precio=document.createElement("h6")
    precio.classList.add("text-center")
    precio.textContent=producto.precio

  
    //CREANDO BOTON
    let boton=document.createElement("button")
    boton.setAttribute("type","button")
    boton.classList.add("btn","btn-warning","mx-4","my-4")
    boton.textContent="ver producto"

    let id=document.createElement("h5")
    id.classList.add("text-center")
    id.textContent=producto.id


    //2. ORDENAR LA ESTRUCTURA
    //PADRES E HIJOS

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(id)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})

}