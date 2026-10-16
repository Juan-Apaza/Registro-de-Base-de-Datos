let personas = []; // empieza vacío

function guardar() {

  // 2a. Leer los valores de cada campo del formulario
  let nombre   = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo   = document.getElementById("correo").value;
  let region   = document.getElementById("region").value;
  let fecha    = document.getElementById("fecha").value;

  // 2b. Validación simple: si el nombre está vacío, mostrar alerta
  if (nombre == "") {
    alert("⚠️ El nombre es obligatorio");
    return; // detener la función aquí
  }

  // 2c. Crear un objeto con todos los datos
  // Un objeto es como una fila de la tabla: {campo: valor}
  let nuevaPersona = {
    nombre:   nombre,
    apellido: apellido,
    correo:   correo,
    region:   region,
    fecha:    fecha
  };

  // 2d. Agregar el objeto al arreglo
  personas.push(nuevaPersona);

  // 2e. Mostrar los datos en la tabla
  mostrarTabla();

  // 2f. Limpiar el formulario
  limpiar();

  alert("✅ Registro guardado!");
}


// ============================================
// PASO 3: Función para MOSTRAR datos en la tabla
// ============================================
function mostrarTabla() {

  // 3a. Obtener el cuerpo de la tabla (el <tbody>)
  let cuerpo = document.getElementById("cuerpoTabla");

  // 3b. Borrar todo lo que había antes en la tabla
  cuerpo.innerHTML = "";

  // 3c. Recorrer el arreglo con un for
  // i = índice (número de fila): 0, 1, 2, 3...
  for (let i = 0; i < personas.length; i++) {

    let p = personas[i]; // la persona en la posición i

    // 3d. Crear una fila nueva <tr>
    let fila = document.createElement("tr");

    // 3e. Poner los datos dentro de la fila
    fila.innerHTML =
      "<td>" + p.nombre   + "</td>" +
      "<td>" + p.apellido + "</td>" +
      "<td>" + p.correo   + "</td>" +
      "<td>" + p.region   + "</td>" +
      "<td>" + p.fecha    + "</td>" +
      "<td>" +
        "<button class='btn-eliminar' onclick='eliminar(" + i + ")'>Eliminar</button>" +
      "</td>";

    // 3f. Agregar la fila a la tabla
    cuerpo.appendChild(fila);
  }
}
function eliminar(indice) {

  // 4a. Confirmar antes de eliminar
  let confirmar = confirm("¿Seguro que quieres eliminar este registro?");

  if (confirmar) {
    // 4b. splice() elimina 1 elemento en la posición "indice"
    personas.splice(indice, 1);

    // 4c. Volver a mostrar la tabla actualizada
    mostrarTabla();
  }
}

function limpiar() {
  document.getElementById("nombre").value   = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value   = "";
  document.getElementById("region").value   = "";
  document.getElementById("fecha").value    = "";
}
