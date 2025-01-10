const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = dropdown.querySelector(".dropdown-menu");
dropdown.addEventListener("click", (e) => {
  if (window.innerWidth < 700) {
    const isExpanded = dropdownMenu.style.visibility === "visible";
    dropdownMenu.style.visibility = isExpanded ? "hidden" : "visible";
    dropdownMenu.style.opacity = isExpanded ? "0" : "1";
  }
});
//funkcija za glatki skroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const scrollDuration = 1500; // Vreme skrolovanja u milisekundama (duže = sporije)
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Funkcija koja upravlja skrolovanjem
    function scrollAnimation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, scrollDuration);
      window.scrollTo(0, run);
      if (timeElapsed < scrollDuration) requestAnimationFrame(scrollAnimation);
    }

    // Easing funkcija za glatko skrolovanje
    function ease(t, b, c, d) {
      const ts = (t /= d) * t;
      const tc = ts * t;
      return b + c * (tc + -3 * ts + 3 * t);
    }

    requestAnimationFrame(scrollAnimation);
  });
});

