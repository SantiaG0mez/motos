//Funcion para cambiar img CR4
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de la imagen
    const fimgcr4 = document.getElementById('fimgcr4');

    // Establecer el evento para cuando el cursor pasa sobre la imagen
    fimgcr4.addEventListener('mouseenter', function () {
        // Cambiar la fuente de la imagen al pasar el cursor
        fimgcr4.src = 'img/ladocr4.png';
    });


    // Establecer el evento para cuando el cursor sale de la imagen
    fimgcr4.addEventListener('mouseleave', function () {
        // Volver a la imagen original cuando el cursor salga
        fimgcr4.src = 'img/CR4_125.png';
    });
});

//Funcion para cambiar img GIXXER
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de la imagen
    const fimggixxer = document.getElementById('fimggixxer');

    // Establecer el evento para cuando el cursor pasa sobre la imagen
    fimggixxer.addEventListener('mouseenter', function () {
        // Cambiar la fuente de la imagen al pasar el cursor
        fimggixxer.src = 'img/ladogixxer.png';
    });


    // Establecer el evento para cuando el cursor sale de la imagen
    fimggixxer.addEventListener('mouseleave', function () {
        // Volver a la imagen original cuando el cursor salga
        fimggixxer.src = 'img/gixxer.png';
    });
});


function mostrar(){
    window.alert("Estamos mostrando algo");
}


