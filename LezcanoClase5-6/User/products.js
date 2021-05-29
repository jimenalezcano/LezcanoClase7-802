//Creo lista de productos de categoria: Maquillaje, marca: Maybelline, producto: labiales

const productoLab01 = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "20 pioneer",
    precio: 1000,
}

const productoLab02 = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "65 lover",
    precio: 1000,
}

const productoLab03 = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "70 Pink",
    precio: 1000,
}

const productoLab04 = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "90 Coral",
    precio: 1000,
}

const productoLab05 = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "07 Loyalist",
    precio: 1000,
}

//Junto productos en un array

const labMayb = [productoLab01, productoLab03, productoLab03, productoLab04, productoLab05]

//Muestro en consola

console.log(labMayb)

//Creo objetos de producto categoria: Maquillaje, Marca:Maybelline producto: delineadores

const productoDelineador01 = {
    categoria: "Maquillaje",
    nombre: "Delineador Uno",
    marca: "Maybelline",
    color: "Negro",
    precio: 800,
}

const productoDelineador02 = {
    categoria: "Maquillaje",
    nombre: "Delineador 2",
    marca: "Maybelline",
    color: "Marron",
    precio: 700,
}

const productoDelineador03 = {
    categoria: "Maquillaje",
    nombre: "Delineador 3",
    marca: "Maybelline",
    color: "Azul",
    precio: 600,
}

//Junto productos de delineador en array 

const delineadoresMayb = [productoDelineador01, productoDelineador02, productoDelineador03]

//Muestro en un console log el array 

console.log(delineadoresMayb)

//Carrito de compras, en un array

const carrito = []

//Agrego productos con push

carrito.push(productoLab05)

carrito.push(productoDelineador02)

//con For each recorro el array y lo muestro en consola
carrito.forEach(element => {
    console.log(element);
});