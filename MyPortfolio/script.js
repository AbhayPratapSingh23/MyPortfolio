// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Show scrool btn when scroll down
window.addEventListener("scroll", function () {
  let scrool = document.querySelector("#scrool-up");
  scrool.classList.toggle("srcl", window.scrollY > 600);
});

// Sticky Navbar with Smooth Transition
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("sticky");
    header.style.background = "rgba(255, 255, 255, 0.9)";
  } else {
    header.classList.remove("sticky");
    header.style.background = "white";
  }
});