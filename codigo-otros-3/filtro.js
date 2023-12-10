// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaProductos = document.querySelector('#lista-de-productos') // Hacia falta un # antes de lista para referirse a la clase, tambien cambiar el getElementByName por querySelector y cambiarle el nombre a la variable por listaProductos
const filtro = document.querySelector('#input'); // cambiar nombre por de "$i" por nombre de "filtro"

const displayProductos = ( arrayProductos) => {for (let i = 0; i < arrayProductos.length; i++) { //Crear una funcion para mostrar productos
  var d = document.createElement("div") // <div class="producto"> </div>
  d.classList.add("producto")

  var tipo = document.createElement("p")//cambiar nombre de la variable "ti" por "tipo" <p class="titulo">nombre</p>
  tipo.classList.add("titulo")
  tipo.textContent = arrayProductos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', arrayProductos[i].img);

  d.appendChild(tipo) // Cambiar "ti" por "tipo"
  d.appendChild(imagen) 

  listaProductos.appendChild(d) // Cmabiar "li" por "listaProductos"
}
}


displayProductos(productos) 
const botonDeFiltro = document.querySelector('#botonFiltro');

botonDeFiltro.onclick = function() {
  while (listaProductos.firstChild) { //<div> <p> </p> <img> </img> </div> 
    listaProductos.removeChild(listaProductos.firstChild); // Cambiar nombre por listaProductos
  }

  const texto = filtro.value; // cambiar nombre por de "$i" por nombre de "filtro"
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto ); // [producto 1, producto 2, .......]
  displayProductos(productosFiltrados)
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  