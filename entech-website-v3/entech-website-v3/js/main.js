const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
}

const productNav = document.querySelector(".nav-products");
const productsToggle = document.querySelector(".products-toggle");

if (productNav && productsToggle) {
  productsToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = productNav.classList.toggle("open");
    productsToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!productNav.contains(event.target)) {
      productNav.classList.remove("open");
      productsToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const params = new URLSearchParams(window.location.search);
const productField = document.querySelector("#product");

if (productField && params.get("product")) {
  productField.value = params.get("product");
}