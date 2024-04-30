// Función para manejar el envío del formulario de registro de usuario
function manejarRegistroUsuario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const contextura = document.getElementById('contextura').value;
    const tipoAlimentacion = document.getElementById('tipo-alimentacion').value;
    
    // Aquí podrías enviar los datos a tu servidor para procesarlos o almacenarlos
    // Por ahora, solo mostraremos los datos en una alerta
    const mensaje = `¡Usuario registrado con éxito!\nNombre: ${nombre} ${apellido}\nEdad: ${edad} años\nAltura: ${altura} cm\nPeso: ${peso} kg\nContextura: ${contextura}\nTipo de Alimentación: ${tipoAlimentacion}`;
    alert(mensaje);
    
    // Limpiar el formulario después de enviarlo
    document.getElementById('formulario-registro').reset();
}

// Llamar a las funciones necesarias cuando la página se cargue completamente
window.onload = function() {
    mostrarInformacion(); // Mostrar información sobre dietas, ejercicios, etc.
    mostrarNoticias(); // Mostrar noticias de salud y bienestar
    const formularioSuscripcion = document.getElementById('formulario-suscripcion');
    formularioSuscripcion.addEventListener('submit', manejarSuscripcion); // Manejar el envío del formulario de suscripción
    const formularioRegistro = document.getElementById('formulario-registro');
    formularioRegistro.addEventListener('submit', manejarRegistroUsuario); // Manejar el envío del formulario de registro de usuario
};
