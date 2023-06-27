//   Barre de Nav ASIDE
window.addEventListener('scroll', function() {
    var navbarItems = document.querySelectorAll('.nav-aside-child');
    var sections = document.querySelectorAll('.section');

    var currentPosition = window.innerHeight / 2; // Position actuelle de défilement au milieu de la fenêtre visible

    sections.forEach(function(section, index) {
      var rect = section.getBoundingClientRect();
      var sectionTop = rect.top;
      var sectionBottom = rect.bottom;

      if (sectionTop <= currentPosition && sectionBottom >= currentPosition) {
        navbarItems[index].classList.add('active');
      } else {
        navbarItems[index].classList.remove('active');
      }
    });
});


// FADE IMAGE
function handleScroll() {
    var images = document.querySelectorAll('.fade-in');

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var positionFromTop = image.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight <= 0) {
        image.classList.add('show');
      } else {
        image.classList.remove('show'); // Réinitialise l'état de l'image lorsque celle-ci sort de la fenêtre
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  // Appel initial pour afficher les images déjà visibles lors du chargement de la page
  handleScroll();