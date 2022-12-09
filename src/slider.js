// Pobieramy wszystkie obrazki
var images = document.querySelectorAll('#carousel .slides img');

// Pobieramy elementy do sterowania karuzelem
var prevButton = document.querySelector('#carousel .prev');
var nextButton = document.querySelector('#carousel .next');

// Pobieramy wszystkie przyciski wskaźników
var indicators = document.querySelectorAll('#carousel .indicators button');

// Pobieramy indeks aktywnego obrazka
var currentImage = 0;
for (var i = 0; i < images.length; i++) {
  if (images[i].classList.contains('active')) {
    currentImage = i;
    break;
  }
}

// Ustawiamy interwał czasowy dla automatycznego przewijania obrazków
var imageInterval = setInterval(nextImage, 3000);

// Funkcja przechodzenia do następnego obrazka
function nextImage() {
  // Ukrywamy obecny obrazek
  images[currentImage].classList.remove('active');
  indicators[currentImage].classList.remove('active');

  // Zwiększamy indeks obrazka
  currentImage = (currentImage + 1) % images.length;

  // Pokazujemy nowy obrazek
  images[currentImage].classList.add('active');
  indicators[currentImage].classList.add('active');
}

// Funkcja przechodzenia do poprzedniego obrazka
function prevImage() {
  // Ukrywamy obecny obrazek
  images[currentImage].classList.remove('active');
  indicators[currentImage].classList.remove('active');

  // Zmniejszamy indeks obrazka
  currentImage = (currentImage - 1) % images.length;

  // Pokazujemy nowy obrazek
  images[currentImage].classList.add('active');
  indicators[currentImage].classList.add('active');
}