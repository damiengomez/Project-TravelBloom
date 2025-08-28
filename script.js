const images = {
  plages: ["img/beach-1.jpg", "img/beach-2.jpg"],
  temples: ["img/temple-1.jpg", "img/temple-2.jpg"],
  villes: ["img/city-1.jpg", "img/city-2.jpg"]
};

function performSearch() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  const content = document.getElementById("searchContent");
  const message = document.getElementById("searchMessage");

  content.innerHTML = ""; // reset contenu
  resultsContainer.style.display = "none"; // reset modale

  if (images[input]) {
    images[input].forEach(src => {
      const card = document.createElement("div");
      card.className = "image-card";

      const img = document.createElement("img");
      img.src = src;
      img.alt = input;

      const link = document.createElement("a");
      link.href = "reservation.html"; // tu peux changer la destination
      link.textContent = "Réserver";
      link.className = "reserve-link";

      card.appendChild(img);
      card.appendChild(link);
      content.appendChild(card);
    });
    message.textContent = `${images[input].length} résultats trouvés pour "${input}"`;
    resultsContainer.style.display = "block"; // affiche modale
  } else {
    message.textContent = `Aucun résultat trouvé pour "${input}"`;
  }
}

function closeResults() {
  document.getElementById("searchResults").style.display = "none";
}

function thankyou(){
    alert('Merci de nous avoir contactés !');
}
