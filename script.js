// ===== إظهار الأقسام تدريجيًا عند التمرير =====
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// ===== تبديل اللغة =====
const langToggle = document.getElementById("lang-toggle");
let currentLang = "en"; // الوضع الافتراضي

document.addEventListener("DOMContentLoaded", () => {
  // عند تحميل الصفحة: إظهار الإنجليزية وإخفاء العربية
  document.querySelectorAll(".en").forEach((el) => (el.style.display = "block"));
  document.querySelectorAll(".ar").forEach((el) => (el.style.display = "none"));
});

if (langToggle) {
  langToggle.addEventListener("click", () => {
    if (currentLang === "en") {
      // إظهار العربي وإخفاء الإنجليزي
      document.querySelectorAll(".en").forEach((el) => (el.style.display = "none"));
      document.querySelectorAll(".ar").forEach((el) => (el.style.display = "block"));
      currentLang = "ar";
    } else {
      // العكس
      document.querySelectorAll(".en").forEach((el) => (el.style.display = "block"));
      document.querySelectorAll(".ar").forEach((el) => (el.style.display = "none"));
      currentLang = "en";
    }
  });
}

// ===== Hamburger Menu Toggle =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

