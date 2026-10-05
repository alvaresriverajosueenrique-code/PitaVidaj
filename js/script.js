// Mensaje de bienvenida
console.log("Bienvenido al sitio web de Pitajalla");

// Efecto para los botones
const botones = document.querySelectorAll(".boton");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        console.log("El usuario hizo clic en un botón");

    });

});


// Mostrar mensaje cuando se carga la página
window.addEventListener("load", function() {

    console.log("Página de Pitajalla cargada correctamente");

});