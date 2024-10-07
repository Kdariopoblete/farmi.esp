


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
        'Max C° (2020)',
        'Irradiacion Solar (2020)',
        'Irradiacion Solar (1970)',
        'Max C° (1970)'
    ],
    datasets: [{
        label: 'Registro Bimestral', //TITULO
        data: [10,3,4.1,5.9], //Valores de las barras
         
        backgroundColor: [
            'rgb(255, 205, 86)', //ROJO MAXIMAS TEMPERATURAS A AMARILLO
            'rgb(255, 99, 132)',//AMARILLO PH DEL SUELO A ROJO 
            'rgb(255, 99, 132)',//GRIS HUMEDAD A ROJO
            'rgb(255, 205, 86)'//AZUL FLUJO HIDIROCO  A AMARILLO
        ]
    }]
};

new Chart(ctx, {
    type: 'polarArea', //Tipo ded grafico, en la pagina hay mas opciones
    data: data,
    options: {}
});
//------------------------------------------------------------------------



//------------------------------------------------------------------------


const ctxy = document.getElementById('linea');

const datay = {
    labels: [
        '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979',
        '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
        '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
        '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
        '2020', '2021', '2022', '2023'
      ],
    datasets: [{
        axis: 'y',
        label: 'Co2',
        data: [
            325.13, 326.01, 327.55, 328.65, 329.58, 330.76, 331.62, 333.60, 334.91, 336.81,
            338.29, 339.91, 340.78, 343.20, 345.00, 346.12, 347.48, 349.28, 351.62, 352.91,
            354.41, 355.21, 355.68, 357.03, 359.10, 360.82, 362.39, 364.51, 367.30, 368.26,
            369.83, 371.42, 373.98, 376.17, 377.68, 380.31, 382.02, 384.19, 385.79, 387.63,
            389.99, 392.06, 394.57, 397.03, 399.08, 402.06, 404.64, 407.00, 409.27, 411.97,
            414.23, 416.67, 418.99, 421.86
          ],
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