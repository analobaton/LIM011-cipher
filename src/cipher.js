const encode = (offset, contraseña) => {
  resultado = '';
  let position = 0;

  //Obtener el valor de la letra
  for (let i = 0; i < contraseña.length; i++) {
    position = contraseña.charCodeAt(i);
    if (position >= 65 && 90 >= position) {
      //Aplicar la fórmula para otener la nueva posición de la letra
      let newposition = (position - 65 + parseInt(offset)) % 26 + 65;

      resultado += String.fromCharCode(newposition);
      console.log(resultado);

    } else if (position >= 97 && 122 >= position) {
      //Aplicar la fórmula para otener la nueva posición de la letra
      let newposition = (position - 97 + parseInt(offset)) % 26 + 97;
      console.log(newposition);

      resultado += String.fromCharCode(newposition);
    }
  }
  console.log(resultado)
  return resultado
}

const decode =(offset,contraseña) => {
  resultado = '';
  let position = 0;

  //Obtener el valor de la letra
  for (let i = 0; i < contraseña.length; i++) {
    position = contraseña.charCodeAt(i);

    if (position >= 65 && 90 >= position) {

      //Aplicar la fórmula para otener la nueva posición de la letra mayuscula
      let newposition = (position - 90 - parseInt(offset)) % 26 + 90;

      resultado += String.fromCharCode(newposition);
      console.log(resultado);

    } else if (position >= 97 && 122 >= position) {
      //Aplicar la fórmula para otener la nueva posición de la letra minuscula 
      let newposition = (position - 122 - parseInt(offset)) % 26 + 122;
      console.log(newposition);

      resultado += String.fromCharCode(newposition);
    }
  }
  console.log(resultado)
  return resultado
}
