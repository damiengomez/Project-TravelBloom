const images = {
  plages: ["img/beach-1.jpg", "img/beach-2.jpg"],
  temples: ["img/temple-1.jpg", "img/temple-2.jpg"],
  villes: ["img/city-1.jpg", "img/city-2.jpg"]
};

const alias = {
  plage: "plages",
  plages: "plages",
  beach: "plages",
  beaches: "plages",
  temple: "temples",
  temples: "temples",
  ville: "villes",
  villes: "villes",
  city: "villes",
  cities: "villes"
};

let currentIndex = 0;
let autoSlideInterval;

function performSearch() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  const content = document.querySelector("#searchContent .carousel-inner");
  const message = document.getElementById("searchMessage");

  content.innerHTML = "";
  resultsContainer.style.display = "none";

  const key = alias[input];

  if (key && images[key]) {
    images[key].forEach(src => {
      const slide = document.createElement("div");
      slide.className = "carousel-item";

      const img = document.createElement("img");
      img.src = src;
      img.alt = input;

      const link = document.createElement("a");
      link.href = "reservation.html";
      link.textContent = "Réserver";
      link.className = "reserve-link";

      slide.appendChild(img);
      slide.appendChild(link);
      content.appendChild(slide);
    });
    message.textContent = `${images[key].length} résultats trouvés pour "${input}"`;
    resultsContainer.style.display = "block";
    currentIndex = 0;
    updateCarousel();
    startAutoSlide();
  } else {
    message.textContent = `Aucun résultat trouvé pour "${input}"`;
    stopAutoSlide();
  }
}

function closeResults() {
  document.getElementById("searchResults").style.display = "none";
  stopAutoSlide();
}

function thankyou(){
    alert('Merci de nous avoir contactés !');
}

function prevSlide() {
  if (currentIndex > 1) {
    currentIndex--;
    updateCarousel();
  }
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel-item");
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function updateCarousel() {
  const slides = document.querySelectorAll(".carousel-item");
  const transformValue = -currentIndex * 100 + "%";
  document.querySelector(".carousel-inner").style.transform = "translateX(" + transformValue + ")";
}

function startAutoSlide() {
  stopAutoSlide(); // arrêter tout interval existant
  autoSlideInterval = setInterval(() => {
    const slides = document.querySelectorAll(".carousel-item");
    currentIndex = (currentIndex + 1) % slides.length; // boucle
    updateCarousel();
  }, 4000); // 4 secondes entre chaque changement
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.getElementById("searchInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    performSearch();
  }
});
