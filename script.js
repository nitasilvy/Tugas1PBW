// Animasi muncul bertahap
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Tambahkan class visible
      entry.target.classList.add("visible");

      // Jika elemen memiliki anak-anak (misal .card), beri delay berurutan
      const childElements = entry.target.querySelectorAll(".fade-up, .fade-right, .fade-left");
      childElements.forEach((child, index) => {
        child.style.setProperty("--delay", `${index * 0.2}s`);
        child.classList.add("visible");
      });

      // Hentikan observasi supaya animasi tidak berulang
      observer.unobserve(entry.target);
    }
  });
});

// Observe semua elemen yang bisa dianimasikan
document.querySelectorAll(".fade-in, .fade-up, .fade-right, .fade-left").forEach((el) => {
  observer.observe(el);
});
