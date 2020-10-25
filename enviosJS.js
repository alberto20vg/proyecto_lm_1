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

window.onload = function () {
    document.getElementById("comprar").onclick = guardaInformacion;

    document.getElementById("usuario").focus();
}


function guardaInformacion() {


    var lista = document.getElementById("cervezas");

    var indiceSeleccionado = lista.selectedIndex;

    var opcionSeleccionada = lista.options[indiceSeleccionado];

    var cerveza = opcionSeleccionada.text;
    
    alert("Gracias por su compra!");

    location.reload();


    var referencia = base.ref("pedidos");



    referencia.push().set(
        {
            usuario: document.getElementById('usuario').value,
            contraseña: document.getElementById('contraseña').value,
            direccion: document.getElementById('direccion').value,
            tarjeta: document.getElementById('tarjeta').value,
            CSV: document.getElementById('csv').value,
            cerveza: cerveza,
            cantidad: document.getElementById('cantidad').value


        });

}



