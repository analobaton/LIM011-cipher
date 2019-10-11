window.cipher ={
encode : (offset,contraseña) => {
  let resultado = '';
let position = 0;

  for (let i = 0; i < contraseña.length; i++) {
    position = contraseña.charCodeAt(i);
    if (position >= 65 && position <= 90) {
      let newposition = (position - 65 + parseInt(offset)) % 26 + 65;

      resultado += String.fromCharCode(newposition);

    } else if (position >= 97 && position <= 122 ) {
      let newposition = (position - 97 + parseInt(offset)) % 26 + 97;

      resultado += String.fromCharCode(newposition);
    }
  }
  return resultado
},

decode: (offset,contraseña) => {
  let resultado = '';
  let position = 0;

  for (let i = 0; i < contraseña.length; i++) {
    position = contraseña.charCodeAt(i);

    if (position >= 65 && position <= 90) {

      let newposition = (position - 90 - parseInt(offset)) % 26 + 90;

      resultado += String.fromCharCode(newposition);

    } else if (position >= 97 &&  position <= 122) {
      let newposition = (position - 122 - parseInt(offset)) % 26 + 122;

      resultado += String.fromCharCode(newposition);
    }
  }
  return resultado
}
};