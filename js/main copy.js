document.getElementById('btnEnviar').addEventListener('click', function () {
    // obtener campo correo
    var email = document.getElementById('emailInput').value;

    // validar corre
    if (email.trim() === '') {
        // modal vacio
        document.getElementById('modalBody').innerHTML = 'Por favor, ingresa tu dirección de correo electrónico.';
    } else {
        // modal correcto
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            // exitoso
            document.getElementById('modalBody').innerHTML = 'Gracias por registrarte. Recibirás todas las novedades sobre nuestras promociones.';

            // limpiar campo cada 2 seg
            setTimeout(function () {
                document.getElementById('emailInput').value = '';
                location.reload();
            }, 2000);
        } else {
            // modal no valido
            document.getElementById('modalBody').innerHTML = 'Por favor, ingresa una dirección de correo electrónico válida.';
        }
    }

    // mostrar modal
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();
});


   // menu hamburguesa
   document.querySelector('.navbar-toggler').addEventListener('click', function () {
    // seleccionar menu hamburguesa
    var menu = document.querySelector('#navbarNav');
    // ocultar menu
    menu.classList.toggle('show');
});


// CHART
const ctx = document.getElementById('chart');

const data = {
    labels: [ // Nombres de las barras
        'Max C°',
        'PH del suelo',
        'Humedad',
        'Flujo hidrico'
    ],
    datasets: [{
        label: 'Registro Bimestral', //TITULO
        data: [4, 7.5, 7, 3], //Valores de las barras 
        backgroundColor: [
            'rgb(255, 99, 132)', //ROJO MAXIMAS TEMPERATURAS
            'rgb(255, 205, 86)',//AMARILLO PH DEL SUELO
            'rgb(201, 203, 207)',//GRIS HUMEDAD
            'rgb(54, 162, 235)'//AZUL FLUJO HIDIROCO
        ]
    }]
};

new Chart(ctx, {
    type: 'polarArea', //Tipo ded grafico, en la pagina hay mas opciones
    data: data,
    options: {}
});
//------------------------------------------------------------------------

const fs = require('fs');
const csv = require('csv-parser');

const valoresIndice0 = [];
const valoresIndice4 = [];

fs.createReadStream('./base de datos.csv')
  .pipe(csv())
  .on('data', (row) => {
    valoresIndice0.push(row[Object.keys(row)[0]]);
    valoresIndice4.push(row[Object.keys(row)[4]]);
  });


//------------------------------------------------------------------------


const ctxy = document.getElementById('linea');

const datay = {
    labels: [ // linea de tiempo
        'enero°',
        'febrero',
        'marzo',
        'abril'
    ],
    datasets: [{
        axis: 'y',
        label: 'Co2',
        data: [65, 59, 80, 81],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          
        ],
        borderWidth: 1
      }]
};

new Chart(ctxy, {
    type: 'line', //Tipo ded grafico, en la pagina hay mas opciones
    data: datay,
    options: {}
});