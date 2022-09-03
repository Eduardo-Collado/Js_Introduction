let productos = [];
//index
function validarDatos(nombre, apellido, email, contrasena) {
  if (nombre == "") {
    alert("Debe ingresar un nombre!");
    return false;
  }
  if (apellido == "") {
    alert("Debe ingresar un apellido!");
    return false;
  }
  if (email == "") {
    alert("Debe ingresar un email valido!");
    return false;
  }
  if (contrasena == "") {
    alert("Debe ingresar una contraseña");
    return false;
  }
}
function mainindex() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let contrasena = document.getElementById("contrasena").value;
  if (validarDatos(nombre, apellido, email, contrasena) == false) {
    return;
  }
}
//Catálogo
function validarInsercionP(codigo, nombrep, precio) {
  if (codigo == "") {
    alert("Debe ingresar un código!");
    return false;
  }
  if (nombrep == "") {
    alert("Debe ingresar el nombre del producto!");
    return false;
  }
  if (precio == "") {
    alert("Debe ingresar el precio!");
    return false;
  }
}
function guardarDatos(codigo, nombrep, precio) {
  productos.push({
    //variaable: parámetro
    codigo: codigo,
    nombrep: nombrep,
    precio: precio,
  });
}
function mostrarDatos() {
  let registros = "";

  for (let i = 0; i < productos.length; i++) {
    registros += `
                <tr>
                    <td>${productos[i].codigo}</td>
                    <td>${productos[i].nombrep}</td>
                    <td>${productos[i].precio}</td>
                </tr>
            `;
  }
  let detalle = document.getElementById("detalle");

  detalle.innerHTML = registros;
}
function limpiarControles() {
  document.getElementById("codigo").value = "";
  document.getElementById("nombrep").value = "";
  document.getElementById("precio").value = "";
}
function maincatalogo() {
  let codigo = document.getElementById("codigo").value;
  let nombrep = document.getElementById("nombrep").value;
  let precio = document.getElementById("precio").value;
  if (validarInsercionP(codigo, nombrep, precio)) {
    return;
  }
  guardarDatos(codigo, nombrep, precio)

  // mostrar datos

  mostrarDatos();

  // limpiar controles

  limpiarControles();
}
