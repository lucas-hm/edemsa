let API = "http://10.1.0.16:4000";
const machineForm = document.getElementById('machineForm');

let user = document.getElementById("user");
let ID = document.getElementById("ID");
let garantia = document.getElementById("garantia");
let tipo = document.getElementById("tipo");
let fecha = document.getElementById("fecha");
let month = document.getElementById("fecha");
let days = document.getElementById("fecha");
let uso = document.getElementById("uso");
let puesto = document.getElementById("puesto");
let proveedor = document.getElementById("proveedor");
let observacion = document.getElementById("observacion");

document.addEventListener('DOMContentLoaded', function () {
  let btnSubmit = document.getElementById('btnSubmit');
  btnSubmit.addEventListener('click', function () {
    fetch(`${API}/machine`, {
      method: 'POST',
      body: JSON.stringify ({
        user:user.Value,
        ID:ID.Value,
        garantia:garantia.Value,
        tipo:tipo.Value,
        fecha:fecha.Value,
        month:month.Value,
        days:days.Value,
        uso:uso.Value,
        puesto:puesto.Value,
        proveedor:proveedor.Value,
        observacion:observacion.Value,
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        // Realizar acciones adicionales si es necesario con la respuesta del servidor
        console.log('Respuesta del servidor:', responseData);
      })
      .catch(error => {
        console.error('Error al enviar los datos al servidor:', error);
      });
  });
});