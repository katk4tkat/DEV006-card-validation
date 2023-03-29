import validator from './validator.js';

// Recuperar nombre de usuario

//recuperar numero de tarjeta

const numeroTarjeta = document.getElementById('creditCard')


const user = document.getElementById("userName");
user.addEventListener("keyup", () => console.log(user.value));

// recuperar numero de tarjeta

const formulario = document.getElementById("formulario1")

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