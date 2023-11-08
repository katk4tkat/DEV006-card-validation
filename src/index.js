import validator from './validator.js';


//recuperar numero de tarjeta:

const numeroTarjeta = document.getElementById('creditCard')

//recuperar nombre de usuario:

const user = document.getElementById("userName");
user.addEventListener("keyup", () => console.log(user.value));


const formulario = document.getElementById("form")

formulario.addEventListener("submit", function (validar) {
  validar.preventDefault();

  const estado = validator.isValid(numeroTarjeta.value)
  const maskify = validator.maskify(numeroTarjeta.value)

  if (estado === true) {
    alert("Tarjeta " + maskify + " es válida")
  }
  else { alert("Tarjeta " + maskify + " es inválida") }
}
);


console.log(validator);