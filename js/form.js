
const formulario = document.querySelector('.contacto__form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input',leertexto);
email.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        error('Todos los campos son necesarios');
        return;
    }

        enviado('El mensaje fue enviado correctamente');

});


function error(mensaje){
const errorEnvio = document.createElement('P');
errorEnvio.classList.add('error');
errorEnvio.textContent = mensaje;
formulario.appendChild(errorEnvio);

setTimeout(() => {
    errorEnvio.remove();
},4000);

}

function enviado(mensaje){
    const enviadoMensaje = document.createElement('P');
    enviadoMensaje.classList.add('enviado');
    enviadoMensaje.textContent = mensaje;
    formulario.append(enviadoMensaje);

    setTimeout(()=>{
        enviadoMensaje.remove();
    }, 4000);
}


function leertexto(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}