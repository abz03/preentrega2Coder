
// Se ejecuta cuando la ventana se carga
window.onload = function() {
    mostrarCarrito(); // Llama a la función para mostrar los productos del carrito
};

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    // Obtiene el contador de productos del localStorage o lo inicializa a 0 si no existe
    let contador = parseInt(localStorage.getItem('contadorCarrito') || '0');

    // Obtiene la referencia al div donde se mostrará el carrito
    let divCarrito = document.getElementById('carrito');

    // Itera sobre el número de productos almacenados en el carrito
    for (let i = 0; i < contador; i++) {
        // Obtiene el nombre y precio del producto del localStorage para mover los datos a la pagina "carritocompras"
        let nombre = localStorage.getItem('nombreCuadro' + i);
        let precio = localStorage.getItem('precioCuadro' + i);

        // Crea un nuevo div para mostrar la información del producto
        let divProducto = document.createElement('div');
        divProducto.textContent = nombre + ' - $' + precio; // Configura el texto del div con el nombre y precio con formato y que se vea UX (ojala)
        divCarrito.appendChild(divProducto); // Añade el div del producto al div del carrito, una frase muy entendible
    }
}
