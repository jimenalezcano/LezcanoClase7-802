//Creo funcion para utilizar sobre un evento

function usuarioDisponible () {
  if (inputUsuario.value !== "admin") {
    console.log("El usuario esta disponible");
  }else{ 
      alert("Este userName esta reservado solo para administradores. Pruebe otro")
  }
};

//Creo evento en input "nombreUser" para validar si el usuario esta disponible. Utilizo el event "change" que lo que hace es responder cuando hay un cambio en el input. 
var inputUsuario = document.getElementById("nombreUser");
console.log(inputUsuario);
console.log(inputUsuario.value);
inputUsuario.addEventListener("change", usuarioDisponible);