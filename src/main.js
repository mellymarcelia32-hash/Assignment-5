const banner = document.getElementById("cookieBanner");
const button = document.getElementById("acceptCookies");

if (localStorage.getItem("cookiesAccepted")) {
  banner.style.display = "none";
}

button.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  banner.style.display = "none";
});
