let API = "http://10.1.0.16:4000";

document.addEventListener('DOMContentLoaded', function () {
  const machineForm = document.getElementById('machineForm');
  let btnSubmit = document.getElementById('btnSubmit');
  btnSubmit.addEventListener('click', function () {
    const fecha = document.getElementById('fecha');
    const month = document.getElementById('month');
    const days = document.getElementById('days');
    const user = document.getElementById('user');
    const observacion = document.getElementById('observacion');
    const garantia = document.getElementById('garantia');
    const puesto = document.getElementById('puesto');
    const uso = document.getElementById('uso');
    const proveedor = document.getElementById('proveedor');
    const tipo = document.getElementById('tipo');
    // Crear un objeto que contenga los datos a enviar al servidor
    const data = {
      fecha,
      month,
      days,
      user,
      tipo,
      garantia,
      proveedor,
      uso,
      puesto,
      observacion
    };

    // Realizar una solicitud POST al servidor
    fetch(`${API}/machine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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