//El tito Javi patrocina este script
const url = "https://api.exchangeratesapi.io/latest?base=EUR";
var num1;
var num2;

var tipo1;
var tipo2;

var inter = false; //Si se pulsa el boton intercambiar se intercambian los valores del select e input

document.getElementById("swap").addEventListener('click', changeType);//Al pulsar el botón intercambiar llama a la funcion changeType

function changeType() {
  inter = true;
  actualizar();
}

function actualizar() {

  num1 = document.getElementById("amount-one").value;
  num2 = document.getElementById("amount-two").value;

  tipo1 = document.getElementById("currency-one").value;
  tipo2 = document.getElementById("currency-two").value;

  fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
      if (datos.rates[tipo1] == undefined) {
        datos.rates[tipo1] = 1;
      } else {
        if (datos.rates[tipo2] == undefined) {//Estos if son para que no pete si el valor de alguna casilla es 0
          datos.rates[tipo2] = 1;
        }
      }

      val1 = datos.rates[tipo1];
      val2 = datos.rates[tipo2];

      valNum2 = 1 / val2 * val1;

      num2 = num1 / val1 * val2;
      num1 = num1 - 1 + 1;

      document.getElementById("amount-two").value = num2;

      if (inter == true) {
        document.getElementById('rate').innerHTML = "1 " + tipo2 + " =  " + valNum2 + " " + tipo1;
        document.getElementById("amount-two").value = num1;
        document.getElementById("amount-one").value = num2;
        document.getElementById("currency-two").value = tipo1;
        document.getElementById("currency-one").value = tipo2;
      }
      inter = false;
    });
}