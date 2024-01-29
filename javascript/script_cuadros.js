// La función se ejecuta cuando se carga la página completa, incluyendo todos los recursos gráficos y scripts.
window.onload = function() {
    // Añade un manejador de evento de clic al botón con ID 'comprarCuadro'
    document.getElementById('comprarCuadro1').addEventListener('click', function() {
        // Al hacer clic, llama a la función agregarAlCarrito con los detalles del cuadro específico
        agregarAlCarrito('Bodegón de Jean Baptiste Simeon', 1000);
    });
    document.getElementById('comprarCuadro2').addEventListener('click', function() {
        agregarAlCarrito('Zarathustra, obras históricas', 1000);
    });
    document.getElementById('comprarCuadro3').addEventListener('click', function() {
        agregarAlCarrito('Raminou sentado en una tela', 1000);
    });
    document.getElementById('comprarCuadro4').addEventListener('click', function() {
        agregarAlCarrito('Ronner-Knip, Kittens Game', 1000);
    });
    document.getElementById('comprarCuadro5').addEventListener('click', function() {
        agregarAlCarrito('Hecho con vida', 3000);
    });
    document.getElementById('comprarCuadro6').addEventListener('click', function() {
        agregarAlCarrito('Salad Cat Meme por Angela Schwengler', 2000);
    });

    // Función que maneja la lógica para agregar un cuadro al carrito de compras
    function agregarAlCarrito(nombreCuadro, precioCuadro) {
        // Obtiene el contador actual del carrito de localStorage, o lo inicializa a 0 si no existe
        let contador = parseInt(localStorage.getItem('contadorCarrito') || '0');

        // Almacena el nombre y precio del cuadro en localStorage, utilizando el contador como parte de la clave
        localStorage.setItem('nombreCuadro' + contador, nombreCuadro);
        localStorage.setItem('precioCuadro' + contador, precioCuadro.toString());

        // Incrementa el contador y lo guarda de nuevo en localStorage
        localStorage.setItem('contadorCarrito', (contador + 1).toString());

        // Muestra una alerta para confirmar que el producto se ha agregado al carrito
        alert('Producto agregado al carrito.');
    }
};