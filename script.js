
let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(productName + " به سبد خرید اضافه شد!");
}

// Menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});
