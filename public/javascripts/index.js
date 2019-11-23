const username_field = document.getElementById("username");
const submit_btn = document.getElementById("submit_btn");

function borrar(username){
    fetch("https://parcial-final-web.herokuapp.com/borrar/"+username , {
        method: "DELETE",
        header: {
            "Content-Type": "application/json"
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
