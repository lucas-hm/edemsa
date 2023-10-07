// Obtener referencias a los elementos del formulario
const registrationForm = document.getElementById("registrationForm");
const user = document.getElementById("user");
const ID = document.getElementById("ID");
const garantia = document.getElementById("garantia");
const submitButton = document.getElementById("submit");

// Agregar un evento click al botón de enviar
submitButton.addEventListener("click", function () {
// Validar los campos (puedes agregar más validaciones según tus necesidades)
if (user.value.trim() === "") {
alert("Por favor, ingrese un usuario");
    return;
}

if (ID.value.trim() === "") {
    alert("Por favor, ingrese un NIC");
        return;
}

if (garantia.value < 0) {
    alert("La garantía debe ser un número positivo");
        return;
}

// Obtener los valores de los campos
const usuario = user.value;
const nic = ID.value;
const tiempoGarantia = garantia.value;
const mesCompra = document.querySelector("select[name='month']").value;
const diaCompra = document.querySelector("select[name='days']").value;

// Ejemplo: Mostrar los datos en la consola
    console.log("Usuario:", usuario);
    console.log("NIC:", nic);
    console.log("Garantía (meses):", tiempoGarantia);
    console.log("Mes de compra:", mesCompra);
    console.log("Día de compra:", diaCompra);
});