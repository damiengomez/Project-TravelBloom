const images = {
  plages: ["img/beach-1.jpg", "img/beach-2.jpg"],
  temples: ["img/temple-1.jpg", "img/temple-2.jpg"],
  villes: ["img/city-1.jpg", "img/city-2.jpg"]
};

// Table de synonymes / alias
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

function performSearch() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  const content = document.getElementById("searchContent");
  const message = document.getElementById("searchMessage");

  content.innerHTML = "";
  resultsContainer.style.display = "none";

  // Vérifie si l'input correspond à un alias
  const key = alias[input];

  if (key && images[key]) {
    images[key].forEach(src => {
      const card = document.createElement("div");
      card.className = "image-card";

      const img = document.createElement("img");
      img.src = src;
      img.alt = input;

      const link = document.createElement("a");
      link.href = "reservation.html";
      link.textContent = "Réserver";
      link.className = "reserve-link";

      card.appendChild(img);
      card.appendChild(link);
      content.appendChild(card);
    });
    message.textContent = `${images[key].length} résultats trouvés pour "${input}"`;
    resultsContainer.style.display = "block";
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

document.getElementById("searchInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // empêche le rechargement de la page
    performSearch();
  }
});
