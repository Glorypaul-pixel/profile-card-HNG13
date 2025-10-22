// Here is the TIMING
const timeEl = document.getElementById("userTime");
function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);


