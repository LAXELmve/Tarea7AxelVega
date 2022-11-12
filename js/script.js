function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "./xml/xml1.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    // console.log(document.getElementsByClassName("paraT1")[0].childNodes[0].textContent);
    if (document.getElementsByClassName("paraT1")[0].childNodes[0].textContent == 'Obtener mi colección de Videojuegos') {
      // console.log("Entra en TRUE");
      document.getElementsByClassName("paraT1")[0].childNodes[0].textContent = 'Ocultar mi colección de Videojuegos';


      const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("videojuego");
    let table="<tr class='cabecera'><th>Nombre</th><th>Fecha de Lanzamiento</th><th>Desarrolladora</th><th>Productora</th><th>Generos</th><th>Clasificacion</th><th>Duracion</th><th>Plataformas</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr class='elemento'><td>" +
      x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("fecha")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("desarrollador")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("productora")[0].childNodes[0].nodeValue +
      "</td><td>";
      const y = x[i].getElementsByTagName("generos");
      for (let s = 0; s < y[0].getElementsByTagName("genero").length; s++) {
        if (s < (y[0].getElementsByTagName("genero").length - 1)) {
          table +=
          y[0].getElementsByTagName("genero")[s].childNodes[0].nodeValue +
          "<br>";
        } else {
          table +=
          y[0].getElementsByTagName("genero")[s].childNodes[0].nodeValue+
          "</td>";
        }
      }
      table += "<td>" +
      x[i].getElementsByTagName("clasificacion")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("duracion")[0].childNodes[0].nodeValue +
      "</td><td>";
      const z = x[i].getElementsByTagName("plataformas");
      for (let n = 0; n < z[0].getElementsByTagName("plataforma").length; n++) {
        if (n < (z[0].getElementsByTagName("plataforma").length - 1)) {
          table +=
          z[0].getElementsByTagName("plataforma")[n].childNodes[0].nodeValue +
          "<br>";
        } else {
          table +=
          z[0].getElementsByTagName("plataforma")[n].childNodes[0].nodeValue+
          "</td></tr>";
        }
      }
    }
    document.getElementById("demo").innerHTML = table;


    } else {
      // console.log("Entra en FALSE");
      document.getElementsByClassName("paraT1")[0].childNodes[0].textContent = 'Obtener mi colección de Videojuegos';

      document.getElementById("demo").innerHTML = '';
    }
    
  }
  