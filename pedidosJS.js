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
    mostrarInformacion();

}

function mostrarInformacion() {
    var referencia = base.ref("pedidos");
    var fila = 0;
    var pintados = 0;

    referencia.on('value', function (datos) {


        console.log("valores");
        console.log(datos.val());

        productos = Object.values(datos.val());


        console.log("productos es un:" + productos);
        console.log("long:" + productos.length);
        for (var i = pintados; i < productos.length; i++) {
            pintados++;
            console.log(i);

            if (i == 0 || i % 4 == 0) {

                fila++
                var div = document.createElement("div");
                div.setAttribute('class', 'row');
                div.setAttribute('id', 'filaArt' + fila);
                document.getElementById("listado").appendChild(div);

            }

            div = document.createElement("div");
            div.setAttribute('class', 'col-md-3');
            div.setAttribute('id', 'usuario' + i);
            document.getElementById('filaArt' + fila).appendChild(div);

            div = document.createElement("div");
            div.setAttribute('class', 'row cabeceraProducto');
            div.setAttribute('id', 'cabecera' + i);
            document.getElementById('usuario' + i).appendChild(div);

            div = document.createElement("h2");
            div.textContent = productos[i].usuario;
            document.getElementById('cabecera' + i).appendChild(div);


            div = document.createElement("div");
            div.setAttribute('class', 'row');
            div.setAttribute('id', 'filacantidadcerveza' + i);
            document.getElementById('usuario' + i).appendChild(div);

            div = document.createElement("div");
            div.setAttribute('class', 'col-md-8');
            div.setAttribute('id', 'cerveza' + i);
            document.getElementById('filacantidadcerveza' + i).appendChild(div);

            div = document.createElement("p");
            div.textContent = productos[i].cerveza;
            document.getElementById('cerveza' + i).appendChild(div);

            div = document.createElement("div");
            div.setAttribute('class', 'col-md-4');
            div.setAttribute('id', 'cantidad' + i);
            document.getElementById('filacantidadcerveza' + i).appendChild(div);

            div = document.createElement("p");
            div.textContent = productos[i].cantidad;
            document.getElementById('cantidad' + i).appendChild(div);
        }


    });

}

