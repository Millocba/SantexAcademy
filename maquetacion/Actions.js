const swiper = new Swiper('.swiper', {
    slidesPerView: determineSlidesPerView(), // Determina la cantidad inicial de elementos por vista
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  
  // determinar cantidad de elementos por vista
  function determineSlidesPerView() {
    if (window.innerWidth < 768) {
      return 2; // Muestra 2 elementos
    } else {
      return 5; // Muestra 5 elementos
    }
  }
  
  // Actualiza la cantidad de elementos por vista cuando cambia el tamaño de la ventana
  window.addEventListener('resize', function () {
    swiper.params.slidesPerView = determineSlidesPerView();
    swiper.update();
  });



  window.addEventListener('DOMContentLoaded', function() {
    let localidadesCounter = document.getElementById('localidadesCounter');
    let mentoresCounter = document.getElementById('mentoresCounter');
    let participantesCounter = document.getElementById('participantesCounter');
  
    let localidadesTarget = 58; // número de localidades
    let mentoresTarget = 50; // número de mentores
    let participantesTarget = 301; // número de participantes
  
    function incrementarNumero(elemento, objetivo) {
      let intervalo = 50; // tiempo en milisegundos
      let incremento = Math.ceil(objetivo / (1000 / intervalo)); // Cálculo del incremento
  
      let contador = 0;
      let temporizador = setInterval(function() {
        contador += incremento;
        if (contador >= objetivo) {
          contador = objetivo;
          clearInterval(temporizador);
        }
        elemento.textContent = contador;
      }, intervalo);
    }
  
    function handleScroll() {
      // verificar si el scroll es suficiente
      let scrollPosition = window.scrollY; // posición vertical
      let triggerOffset = 330; // Valor de activar
  
      if (scrollPosition > triggerOffset) {
        // Activar 
        incrementarNumero(localidadesCounter, localidadesTarget);
        incrementarNumero(mentoresCounter, mentoresTarget);
        incrementarNumero(participantesCounter, participantesTarget);
  
        // ya no es necesario seguir escuchando el evento de scroll
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    // Agregar el evento scroll al objeto window
    window.addEventListener('scroll', handleScroll);
  });
  



window.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.querySelector('.menu-toggle');
    let bar = document.querySelector('.bar');
    let bar1 = document.querySelector('.bar1');
    let bar2 = document.querySelector('.bar2');
    let menuItems = document.querySelector('.menu-items');
    let lupa = document.querySelector('.lupa');

    menuToggle.addEventListener('click', function() {
        bar.classList.toggle('active');
        bar1.classList.toggle('active1');
        bar2.classList.toggle('active2');
        menuItems.classList.toggle('show-menu');
        if (lupa.style.display === 'none') {
          lupa.style.display = 'block';
          } else {
              lupa.style.display = 'none';
          }
    });
});
    
window.addEventListener('DOMContentLoaded', function() {
    let lupa = document.querySelector('.lupa');
    let img = document.querySelector('.lupa img');
    let barLupa1 = document.querySelector('.bar-lupa1');
    let barLupa2 = document.querySelector('.bar-lupa2');
    let menuBuscar = document.querySelector('.menu-buscar');
    let menuToggle = document.querySelector('.menu-toggle');
    lupa.addEventListener('click', function() {
        img.classList.toggle('opacar');
        barLupa1.classList.toggle('active1-lupa1');
        barLupa2.classList.toggle('active2-lupa2');
        menuBuscar.classList.toggle('show-menu');
        if (menuToggle.style.display === 'none') {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
        }
    });
});