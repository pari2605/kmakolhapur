// Counter Animation
document.querySelectorAll('.counter').forEach(counter => {
  counter.innerText = '0';
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const val = +counter.innerText;
    const inc = target / 200;
    if(val < target) {
      counter.innerText = Math.ceil(val + inc);
      setTimeout(update, 10);
    }
  };
  update();
});

// Initialize AOS
AOS.init({ duration: 1000, once: true });


//nav scroll

 window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("visible");
    } else {
      navbar.classList.remove("visible");
    }
  });


const galleryImages = document.querySelectorAll(".gallery img");

function checkGallery() {
  const triggerBottom = window.innerHeight * 0.85;
  galleryImages.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;
    if (imgTop < triggerBottom) {
      img.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkGallery);
checkGallery();



