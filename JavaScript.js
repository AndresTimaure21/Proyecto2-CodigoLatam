 // Obtener referencia al botón
 const botonModoNocturno = document.getElementsByClassName('modoNocturno')[0];

 // Cambiar la posición del botón
botonModoNocturno.style.position = "fixed";
botonModoNocturno.style.top = "50%";
botonModoNocturno.style.left = "80%";


// Obtener referencia al elemento body
const body = document.body;

// Agregar evento de clic al botón
botonModoNocturno.addEventListener('click', function() {
  // Alternar la clase modo-nocturno en el elemento body
  body.classList.toggle('modo-nocturno');
});



const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");


  burger.addEventListener("click", () => {
    console.log("Click en el menú hamburguesa"); 
    nav.classList.toggle("nav-active");
  });
};

navSlide();

//console.log(burger); // Verificar si el elemento .burger está siendo seleccionado correctamente
