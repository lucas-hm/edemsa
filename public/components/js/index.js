let API = "localhost:4000";
let ID = document.getElementById("ID");
let user = document.getElementById("user");
let garantia = document.getElementById("garantia");
let fecha = document.getElementById("fecha");
let proveedor = document.getElementById("proveedor");
let observacion = document.getElementById("observacion");
let uso = document.getElementById("uso");
let tipo = document.getElementById("tipo");



let button = document.getElementById("submit");


async function  handleSubmit(){
    console.log(ID.value)
    const respuesta = await fetch(`${API}/crearCuenta`,{
      method:"POST",
    body: JSON.stringify ({
      ID:ID.value,
      user:user.value,
      garantia:garantia.value,
      fecha:fecha.value
    })
    }); 
    res = await respuesta.json()
    console.log(res)
    }

btnSubmit.addEventListener("click",handleSubmit)
