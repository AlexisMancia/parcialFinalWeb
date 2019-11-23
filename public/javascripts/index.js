const username_field = document.getElementById("username");
const submit_btn = document.getElementById("submit_btn");

function borrar(username){
    fetch("http://localhost:3000/borrar/"+username , {
        method: "DELETE",
        header: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(async res =>{
        var response = await res.json();
        console.log(response);
        //window.alert("Pizza Borrada");
    })
    .catch(err =>{
        console.log(err);
    })
}

submit_btn.addEventListener("click", ()=>{
    let usernames = username_field.value
    borrar(usernames);
});
