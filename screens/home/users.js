let name = document.getElementById("name")
let lastname = document.getElementById("lastname")

function getUsers() {
    fetch("http://localhost:3000/api/historiasClinicas")
    .then(response =>  response.json())
    .then(function(data) {
        console.log(data);
        name.innerHTML = data[0].nombre
        lastname.innerHTML = data[0].apellidos
    })
    .catch(err => console.error(err))
}

getUsers();