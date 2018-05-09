var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       respuesta = JSON.parse(xhttp.responseText);
       ventas = respuesta.ventas;
       document.getElementById("ventasreal").innerHTML = "$" + ventas[0].actual;
       document.getElementById("acumulado").innerHTML = "$" + ventas[1].acumulado;
       //promedio = ventas[0].actual;
    }
};
xhttp.open("GET", "ventas.json", true);
xhttp.send();
