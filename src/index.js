document.getElementById("pagetwo").style.display= 'none';
document.getElementById("pagethree").style.display= 'none';

star.addEventListener('click', ()=>{
    document.getElementById("pagetwo").style.display = 'block';   
    document.getElementById("pageone").style.display = 'none';
    document.getElementById("pagethree").style.display = 'none';
})


cifrar.addEventListener('click', () => {
    document.getElementById("pagethree").style.display = 'block';
    const contraseña = document.getElementById('contraseña').value;
    const offset = document.getElementById('offset').value;
    const resultado = encode(offset,contraseña );
    console.log(resultado)
    document.getElementById("respuesta").innerHTML = resultado;
})

descifrar.addEventListener('click', () => {
    document.getElementById("pagethree").style.display = 'block';
    const contraseña= document.getElementById('contraseña').value;
    const offset= document.getElementById('offset').value;
    const resultado = decode(offset,contraseña);
    console.log(resultado)
    document.getElementById("respuesta").innerHTML=resultado;
})