document.getElementById('submit').addEventListener('click', function () {
    // Get form data
    const fecha = document.querySelector('#fecha input[type="number"]').value;
    const month = document.querySelector('select[name="month"]').value;
    const days = document.querySelector('select[name="days"]').value;
    const tipo = document.getElementById('tipo').value;
    const garantia = document.getElementById('garantia').value;
    const proveedor = document.getElementById('proveedor').value;
    const uso = document.getElementById('uso').value;
    const puesto = document.getElementById('puesto').value;
    const observacion = document.getElementById('observacion').value;

    // Log the form data to the console
    console.log('Fecha de compra:', fecha);
    console.log('Month:', month);
    console.log('Days:', days);
    console.log('Tipo:', tipo);
    console.log('Plazo de garantia:', garantia);
    console.log('Proveedor:', proveedor);
    console.log('Bien de uso:', uso);
    console.log('Numero de puesto:', puesto);
    console.log('Observaciones:', observacion);
});