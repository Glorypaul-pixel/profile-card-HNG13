const timeEl = document.getElementById("userTime");
function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);


const toggleBtn = document.getElementById("themeToggle");
const userPref = localStorage.getItem("theme");
if (userPref) {
  document.documentElement.setAttribute("data-theme", userPref);
  toggleBtn.textContent = userPref === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", newTheme);
});
