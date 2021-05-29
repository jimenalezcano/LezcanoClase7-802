//Otro prompt para preguntarle ubicacion y luego condicional
//let ubicacion = prompt("De que zona sos?")


//if (ubicacion == ("Palermo") || (ubicacion== "Recoleta") || (ubicacion == "Almagro") || (ubicacion == "Caballito")){
//    alert("Realizamos envios en tu zona! Podes hacer tu pedido online")
//}else{
//   alert("Lo siento! No realizamos envios hasta tu zona,de todas maneras, podes ver los productos y acercarte a la sucursal")
//}

//Creo constructor para objeto usuario
class User {
    constructor(nombre, apellido, nombreUser, documento, email, barrio, direccion, pago) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.nombreUser = nombreUser;
        this.documento = documento;
        this.email = email;
        this.barrio = barrio;
        this.direccion = direccion;
        this.pago = pago;

}};


//Creo funcion para cargar datos de Usuario en el LocalStorage
function registrar() {
    //selecciono el dato que voy a guardar en las varialbles que luego seran propiedades
    //del nuevo objeto creado con el molde/constructor User
    let nombre = document.querySelector("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nombreUser = document.getElementById("nombreUser").value;
    let documento = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
    let barrio = document.getElementById("barrio").value;
    let pago = document.getElementById("pago").value;

    const nuevoUser = new User(nombre, apellido, nombreUser, documento, email, barrio, pago)

    var etiquetasDom = [];

    etiquetasDom.push(nuevoUsuario);

    document.querySelector("#datosDom").innerHTML = nombreUser + " fue registrado con exito"

    var regUser = JSON.stringify(nuevoUsuario);
    localStorage.setItem("Usuario", regUser);
    console.log("Se guardo el cliente en LocalStorage")
    console.log("Se registraron los siguientes datos del cliente  " + nuevoUser.nombre)

}

