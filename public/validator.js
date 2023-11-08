const validador = {

  isValid: (Luhn) => {
    //invertir numero de tarjeta
    const numReverso = Array.from(Luhn).reverse();
    //La suma de todos los numeros ingresados comiencen desde 0 
    let suma = 0;
    //Iteracion
    for (let i = 0; i < numReverso.length; i++) {
      // Se toma la posición par
      if ((i + 1) % 2 === 0) {
        // Se multiplica por dos (la posición par)
        numReverso[i] = numReverso[i] * 2;
        //Si el resultado es mayor que 9, se le restan 9
        if (numReverso[i] > 9) {
          numReverso[i] = numReverso[i] - 9;
        }
      }
      //suma numeros pares e impares
      suma += parseInt(numReverso[i]);
    }
    if (suma % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  },

  maskify: (Luhn) => {
    //crea un nuevo array a partir de luhn
    const numMask = Array.from(Luhn);
    //bucle
    for (let i = 0; i <= numMask.length; i++) {
      //se enmascara el numero -4 hacia la izquierda
      if (i < numMask.length - 4) {
        numMask[i] = "#";
      }
    }
    //devuelve el numero enmascarado  
    return numMask.join("");
  }
};
export default validador;