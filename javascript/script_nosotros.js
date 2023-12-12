function validarNombre() {
    var nombre = document.getElementById('nombre').value;

    // Simplemente verifica si el nombre no está vacío
    if (nombre.trim() === '') {
        alert('Por favor, ingrese un nombre.');
        return false; // Evita el envío del formulario
    }
    return true; // Permite el envío del formulario
}

function validarCorreo() {
    var correo = document.getElementById('correo').value;
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (regex.test(correo)) {
        return true; // El correo es válido
    } else {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false; // Evita el envío del formulario
    }
}