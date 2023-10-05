let API = "http://127.0.0.1:4000";
let ID = document.getElementById("ID");
let user = document.getElementById("user");
let garantia = document.getElementById("garantia");
let fecha = document.getElementById("fecha");
let btnSubmit = document.getElementById("submit");


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
