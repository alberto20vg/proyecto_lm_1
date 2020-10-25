// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAmKFbw1Tx5ktW1XAHJYDjzVLVnUlBRQSs",
    authDomain: "prueba-3ce4b.firebaseapp.com",
    databaseURL: "https://prueba-3ce4b.firebaseio.com",
    projectId: "prueba-3ce4b",
    storageBucket: "prueba-3ce4b.appspot.com",
    messagingSenderId: "858393634181",
    appId: "1:858393634181:web:3382acf853ddfb9858d0ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var base = firebase.database();


var referencia = base.ref("pedidos");

window.onload = function () {
    verificacion();


}

function verificacion() {
    var respuesta = prompt("Contraseña administrador:")
    if (respuesta == "admin") {
        cargaselect();
        document.getElementById("eliminar").onclick = confirmacion;
    }
    else {
        alert("Contraseña incorrecta");
    }
}

function confirmacion() {
    var pregunta = confirm("¿Quieres borrar el pedido?")
    if (pregunta) {
        alert("Elemento borrado")
        borra();
    }
    else {
        alert("Pedido no borrado")
    }
}

function borra() {
    var lista = document.getElementById("desplegable");


    var opcionSeleccionada = lista.options[lista.selectedIndex];
    referencia.child(opcionSeleccionada.value).remove();
    location.reload();
}


function cargaselect() {

    referencia.on('value', function (datos) {
        var i = 0;

        productos = Object.values(datos.val());

        datos.forEach(function (childSnapshot) {

            var div = document.createElement("option");
            div.setAttribute('value', childSnapshot.key);
            div.textContent = "Nombre: " + productos[i].usuario +
                ", Direccion: " + productos[i].direccion + ", Tarjeta: " + productos[i].tarjeta;
            document.getElementById("desplegable").appendChild(div);
            i++;
        });

    });

}





