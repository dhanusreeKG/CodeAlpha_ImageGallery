let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
  currentIndex = [...images].indexOf(img);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  images.forEach(img => {
    img.style.display =
      category === "all" || img.classList.contains(category)
        ? "block"
        : "none";
  });
}
