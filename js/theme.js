// ====== ELEMENT REFERENCES ======
const toggleBtn = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");
const allNavLinks = document.querySelectorAll(".nav-links a");

// ====== DARK & LIGHT MODE ======
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = savedTheme || (prefersDark ? "dark" : "light");

// Apply theme and icon
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem("theme", theme);

if (toggleBtn) {
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", newTheme);
  });
}

// ====== ACTIVE LINK HIGHLIGHT ======
const currentPage = window.location.pathname.split("/").pop() || "index.html";

allNavLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// ====== MENU TOGGLE FOR SMALL SCREENS ======
if (menuToggle && navLinksContainer) {
  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
    menuToggle.textContent = navLinksContainer.classList.contains("open")
      ? "✖"
      : "☰";
  });

  // Close menu when a link is clicked (optional but nice UX)
  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("open");
      menuToggle.textContent = "☰";
    });
  });
}
