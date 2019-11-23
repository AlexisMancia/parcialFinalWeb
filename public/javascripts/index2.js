const username_field2 = document.getElementById("username2");
const especialidad = document.getElementById("especialidad");
const tipo_masa = document.getElementById("masa");
const tamanio = document.getElementById("tamanio");
const precio = document.getElementById("precio");

function actualizar(username,especialidad1,masaTipo,tam,price){
    let thing = JSON.stringify({especialidad:especialidad1,tipo_masa:masaTipo,tamanio:tam,precio:price});

    fetch("http://localhost:3000/actualizar/"+username , {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: thing
    })
    .then(async res =>{
        var response = await res.json();
        console.log(response);
        window.alert("Pizza Actualizada");
    })
    .catch(err =>{
        console.log(err);
    })
    }

submit_btn2.addEventListener("click", ()=>{
    let usernames2 = username_field2.value
    let especialidad2 = especialidad.value
    let masa_tipo = tipo_masa.value
    let tamanno = tamanio.value
    let precioNuevo = precio.value
    actualizar(usernames2,especialidad2,masa_tipo,tamanno,precioNuevo);
});
