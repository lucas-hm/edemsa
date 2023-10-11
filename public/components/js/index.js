let API = "http://10.1.0.16:4000";
let ID = document.getElementById("ID");
let user = document.getElementById("user");
let garantia = document.getElementById("garantia");
let fecha = document.getElementById("fecha");
let proveedor = document.getElementById("proveedor");
let observaciones = document.getElementById("observacion");
let uso = document.getElementById("uso");
let tipo = document.getElementById("tipo");

let btnSubmit = document.getElementById("submit");

async function  handleSubmit(){
    console.log(user.value)
    const respuesta = await fetch(`${API}/register`,{
      method:"POST",
    body: JSON.stringify ({
      ID:ID.value,
      user:user.value,
      proveedor:proveedor.value,
      observaciones:observaciones.value,
      garantia:garantia.value,
      fecha:fecha.value
    })
    }); 
    res = await respuesta.json()
    console.log(res)
    }

btnSubmit.addEventListener("click",handleSubmit)
