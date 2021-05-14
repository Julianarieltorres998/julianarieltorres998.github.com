console.log("Para el que lea esto, buenos días :)");

// Manejar objetos del DOM
// querySelector / querySelectorAll
/* let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});
*/

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener("click", function(){
        console.log("Haz dado click")
    });
});

// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

// Recorrerlos

links.forEach(function(link) {

    // Agregar un elemento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();
    
    let content = document.querySelector(".content");

    // Quitarle la animación que tiene

    content.classList.remove("fadeInUp");
    content.classList.remove("animated");

    // Añadirle otra animación 

    content.classList.add("fadeInDown");
    content.classList.add("animated");

    setTimeout(function(){
        location.href = "../index.html";
    }, 600);

    });
});
/* let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono) {
    icono.classList.remove("fa-hashtag");
});

*/