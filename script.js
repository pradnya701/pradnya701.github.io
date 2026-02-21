const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

enterBtn.addEventListener("click", () => {
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 1000);
});
