document.getElementById("pagetwo").style.display= 'none';
document.getElementById("pagethree").style.display= 'none';

const star = document.getElementById("star");

star.addEventListener('click', ()=>{
    document.getElementById("pagetwo").style.display = 'block';   
    document.getElementById("pageone").style.display = 'none';
    document.getElementById("pagethree").style.display = 'none';
})

const cifrar = document.getElementById("cifrar");

cifrar.addEventListener('click', () => {
  document.getElementById("pagethree").style.display = 'block';
  const contraseña = document.getElementById('contraseña').value;
    const offset = document.getElementById('offset').value;
    const resultado = cipher.encode(offset,contraseña );
    document.getElementById("respuesta").innerHTML = resultado;
})

const descifrar = document.getElementById("descifrar");

descifrar.addEventListener('click', () => {
    document.getElementById("pagethree").style.display = 'block';
    const contraseña= document.getElementById('contraseña').value;
    const offset= document.getElementById('offset').value;
    const resultado = cipher.decode(offset,contraseña);
    document.getElementById("respuesta").innerHTML=resultado;
})