function validateForm() {
    const form = document.getElementById('formcontacto');
    const name = document.getElementById('nombre');
    const email = document.getElementById('Apellido');
    const phone = document.getElementById('telefono');
    const listaMensajes = document.getElementById('listaMensajes');
    let valid = true;

    
    const errorElements = form.querySelectorAll('.error');
    errorElements.forEach(element => element.remove());

    const errorBorders = form.querySelectorAll('.error-border');
    errorBorders.forEach(element => element.classList.remove('error-border'));

    
    if (nombre.value.trim() === '') {
        mostrarError(nombre, 'El nombre es obligatorio.');
        valid = false;
    } else if (nombre.length == 0 || nombre.length > 10) {
        mostrarError(nombre, 'El nombre debe tener maximo 10 caracteres.');
        valid = false;
    }

   
    
    if (Apellido.value.trim() === '') {
        mostrarError(Apellido, 'El apellido debe ser obligatorio');
        valid = false;
    } else if (Apellido.length == 0 || Apellido.length > 10) {
        mostrarError(Apellido, 'El apellido debe tener maximo 10 caracteres.');
        valid = false;
    }

  
    const patroncel = /^\d{10}$/;
    if (telefono.value.trim() !== '' && !patroncel.test(telefono.value.trim())) {
        mostrarError(telefono, 'El teléfono debe ser de 10 dígitos.');
        valid = false;
    }

    if (valid) {
        const li = document.createElement('li');
        if (telefono.value.trim() !== '') {
            li.textContent = `Hola,  ${nombre.value} ${Apellido.value}, gracias por visitar mi pagina!, te llamaremos al ${telefono.value} por cualquier actualizacion.  `
        } else {
            li.textContent = `Hola,  ${nombre.value} ${Apellido.value}, gracias por visitar mi pagina!`
        }
        listaMensajes.appendChild(li);

        form.reset();
    }

    return false;
}
function mostrarError(input, mensaje) {
    const error = document.createElement('div');
    error.className = 'error';
    error.textContent = mensaje;
    input.classList.add('error-border');
    input.parentNode.insertBefore(error, input.nextSibling);
}