 // Obtén el botón de modo nocturno
 const modoNocturnoBtn = document.querySelector('.modoNocturno');

 // Agrega un evento de clic al botón de modo nocturno
 modoNocturnoBtn.addEventListener('click', function() {
   // Agrega o remueve una clase para cambiar el estilo del modo nocturno
   document.body.classList.toggle('modo-nocturno');
 });
 
 function toggleDescription(button) {
   var cursosCard = button.parentNode;
   var cardDescrip = cursosCard.querySelector('.card-descrip');
 
   cursosCard.classList.toggle('expanded');
 
   if (cursosCard.classList.contains('expanded')) {
     button.textContent = 'VER MENOS';
   } else {
     button.textContent = 'VER MÁS';
   }
 }
