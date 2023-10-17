let API = "http://10.1.0.16:4000";

let user = document.getElementById("user");
let ID = document.getElementById("ID");
let garantia = document.getElementById("garantia");
let tipo = document.getElementById("tipo");
let fecha = document.getElementById("fecha");
let uso = document.getElementById("uso");
let puesto = document.getElementById("puesto");
let proveedor = document.getElementById("proveedor");
let observacion = document.getElementById("observacion");

let btnSubmit = document.getElementById('btnSubmit');

async function  handleSubmit(){
  console.log(fecha.value)
  const respuesta = await fetch(`${API}/machine`,{
    method:"POST",
  body: JSON.stringify ({
    fecha:fecha.value,
    user:user.value,
    ID:ID.value,
    garantia:garantia.value,
    tipo:tipo.value,
    uso:uso.value,
    puesto:puesto.value,
    proveedor:proveedor.value,
    observacion:observacion.value
  })
  }); 
  res = await respuesta.json()
  console.log(res)
  }

btnSubmit.addEventListener("click",handleSubmit)
