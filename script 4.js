/* =========================================
   PRODUITS
   Pour changer une photo : remplacez le lien
   dans "img" par le chemin de votre image,
   par exemple "images/ma-photo.jpg"
========================================= */

const products = [
  { id: 1, name: "complet homme", price: 25000, old: 30000, rating: 4, category: "Hommes",
    img: "images/complet blue.jpg" },
  { id: 2, name: "complet homme", price: 25000, old: 30000, rating: 4, category: "Hommes",
    img: "images/complet maron.jpg" },
  { id: 3, name: "complet homme", price: 15000, old: 24000, rating: 4, category: "Hommes",
    img: "images/complet vert.jpg" },
  { id: 4, name: "aire force", price: 10000, old: 13000, rating: 5, category: "Chaussures",
    img: "images/air.jpg" },
  { id: 5, name: "puma", price: 14000, old: 19000, rating: 5, category: "Chaussures",
    img: "images/puma.jpg" },
  { id: 6, name: "robe moulante rouge", price: 11000, old: 13900, rating: 4, category: "Femmes",
    img: "images/rouge.jpg" },
  { id: 7, name: "Robe de soiré", price: 25000, old: 34000, rating: 5, category: "Femmes",
    img: "images/soiré.jpeg" },
  { id: 8, name: "Lunettes chrome", price: 9000, old: 10000, rating: 4, category: "Accessoires",
    img: "images/lunette (3).jpg" },
  { id: 9, name: "polo golf", price: 8000, old: 10000, rating: 5, category: "Hommes",
    img: "images/polo1.jpg" },
  { id: 10, name: "sweat à capuche", price: 15000, old: 19000, rating: 5, category: "Hommes",
    img: "images/Sweat à capuche zippé .jpg" },
  { id: 11, name: "Talon", price: 20000, old: 23000, rating: 5, category: "Chaussures",
    img: "images/talon noir.jpg" },
  { id: 12, name: "talon", price: 15900, old: 20900, rating: 4, category: "Chaussures",
    img: "images/talon.jpg" },
   { id: 13, name: "sac à dos essential", price: 15000, old: 21000, rating: 4, category:"Sacs",
    img: "images/essential.jpg"},
    { id: 14, name: "sac à dos EASTPACK", price: 15000, old: 21000, rating: 4, category:"Sacs",
    img: "images/eastpack.jpg"},
    { id: 15, name: "Montre Rolex", price: 75000, old: 81000, rating: 4, category:"Accessoires",
    img: "M R.jpg"},
    { id: 16, name: "Montre BiDen", price: 70000, old: 75000, rating: 4, category:"Accessoires",
    img: "M T.jpg"},
    { id: 17, name: "chaussure nike", price: 17000, old: 19000, rating: 4, category:"Chaussures",
    img: "images/NIKE.jpg"},
    { id: 18, name: "Tee-shirt", price: 5000, old: 9000, rating: 4, category:"Hommes",
    img: "images/tee-shirt 1.jpg"},
    { id: 19, name: "Tee-shirt", price: 5000, old: 9000, rating: 4, category:"Hommes",
    img: "images/tee-shirt 2.jpg"},
    { id: 20, name: "Tee-shirt", price: 5000, old: 9000, rating: 4, category:"Hommes",
    img: "images/tee-shirt 3.jpg"},
    { id: 21, name: "pull over", price: 9000, old: 10000, rating: 4, category:"Hommes",
    img: "images/pull.jpg"},
    { id: 22, name: "Sac à Main Noir", price: 19000, old: 21000, rating: 4, category:"Sacs",
    img: "sac noir.jpg"},
    { id: 23, name: "Sac à Main Rouge", price: 19000, old: 21000, rating: 5, category:"Sacs",
    img: "sac .jpg"},
    { id: 24, name: "Sac à Main Maron ", price: 19000, old: 21000, rating: 4, category:"Sacs",
    img: "sac maron.jpg"},
    { id: 25, name: "sandale plate ", price: 4000, old: 6000, rating: 5, category:"Chaussures",
    img: "plate.jpg"},
    { id: 26, name: "lunette sky", price: 4000, old: 6000, rating: 5, category:"Accessoires",
    img: "images/L H 1.jpg"},
    { id: 27, name: "lunette homme", price: 4000, old: 6000, rating: 5, category:"Accessoires",
    img: "L H 2.jpeg"},
    { id: 28, name: "lunette femme", price: 4000, old: 6000, rating: 5, category:"Accessoires",
    img: "images/LF 2.jpg"},
    { id: 29, name: "lunette femme", price: 4000, old: 6000, rating: 5, category:"Accessoires",
    img: "L F.jpg"},
    { id: 30, name: "robe plaqué femme", price: 4000, old: 6000, rating: 5, category:"Femmes",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.36 (1).jpg"},
    { id: 31, name: "ensemble femme", price: 4000, old: 6000, rating: 5, category:"Femmes",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.36 (2).jpg"},
     { id: 32, name: "ensemble femme", price: 7000, old: 7500, rating: 5, category:"Femmes",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.36.jpg"},
    { id: 33, name: "Lingerie femme", price: 7000, old: 7500, rating: 5, category:"Femmes",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.37 (1).jpg"},
     { id: 34, name: "cullote homme", price: 7000, old: 7500, rating: 5, category:"Hommes",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.41 (1).jpg"},
    { id: 35, name: "joggin", price: 9000, old: 9500, rating: 5, category:"Hommes",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.40 (3).jpg"},
    { id: 336, name: "Crocs", price: 10000, old: 12500, rating: 5, category:"Chaussures",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.42 (1).jpg"},
    { id: 37, name: "Crocs", price: 10000, old: 12500, rating: 5, category:"Chaussures",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.42 (2).jpg"},
    { id: 38, name: "Sac à dos d'ordinateur", price: 15000, old: 17500, rating: 5, category:"Sacs",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.39 (4).jpg"},
    { id: 39, name: "Sacoche homme", price: 9000, old: 9500, rating: 5, category:"Sacs",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.38 (1).jpeg"},
    { id: 40, name: "Bijoux femme", price: 9000, old: 9500, rating: 5, category:"Accessoires",
    img: "bijoux.jpg"},
    { id: 41, name: "sacoche homme lacost", price: 9000, old: 9500, rating: 5, category:"Sacs",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.38 (3).jpg"},
    { id: 42, name: "polo golf", price: 8000, old: 9500, rating: 5, category:"Hommes",
    img: "images/polo 2.jpg"},
    { id: 43, name: "maillots femme", price: 5000, old: 6500, rating: 5, category:"Femmes",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.37 (2).jpg"},
    { id: 44, name: "joggin femme", price: 5000, old: 6500, rating: 5, category:"Femmes",
    img: "images/WhatsApp Image 2026-10-08 at 14.49.40.jpg"},


];


const money = n =>
  new Intl.NumberFormat("fr-FR").format(n) + " FCFA";

let cart = JSON.parse(localStorage.getItem("coulCart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("coulWishlist") || "[]");


function save() {
  localStorage.setItem("coulCart", JSON.stringify(cart));
  localStorage.setItem("coulWishlist", JSON.stringify(wishlist));
  updateCounters();
}


function updateCounters() {
  document.getElementById("cartCount").textContent =
    cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("wishlistCount").textContent = wishlist.length;
}


function stars(n) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}


function productCard(p) {

  const wished = wishlist.includes(p.id);

  return `
    <article class="product-card">

      <div class="product-image">
        <img src="${p.img}" alt="${p.name}" loading="lazy">

        <span class="badge">${p.id > 6 ? "NEW" : "BEST"}</span>

        <button class="heart ${wished ? "active" : ""}" onclick="toggleWish(${p.id})">
          ${wished ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="stars">${stars(p.rating)}</div>

        <div class="price">
          ${money(p.price)}
          <span class="old">${money(p.old)}</span>
        </div>

        <div class="product-actions">
          <button onclick="openProduct(${p.id})">Voir le produit</button>
          <button onclick="addCart(${p.id})">Ajouter au panier</button>
        </div>
      </div>

    </article>
  `;
}


/* =========================================
   FILTRE PAR CATÉGORIE
========================================= */

function setText(id, txt) {
  const el = document.getElementById(id);
  if (el) el.textContent = txt;
}


let activeCat = "Tous";
let showAll = false;


function visibleProducts() {

  if (activeCat !== "Tous") {
    return products.filter(p => p.category === activeCat);
  }

  return showAll ? products : products.slice(0, 8);
}


function setCategory(cat, scroll = true) {

  activeCat = cat;
  showAll = false;

  document.querySelectorAll(".filter-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.cat === cat)
  );

  setText("productsTitle", cat === "Tous" ? "Les plus populaires" : cat);
  setText("productsEyebrow", cat === "Tous" ? "NOS FAVORIS" : "CATÉGORIE");

  render();

  if (scroll) {
    const target = document.getElementById("produits");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }
}


function render() {

  const list = visibleProducts();

  document.getElementById("productGrid").innerHTML = list.length
    ? list.map(productCard).join("")
    : `<p style="grid-column:1/-1;padding:40px 0;color:#777">
         Aucun produit dans cette catégorie pour le moment.
       </p>`;

  document.getElementById("newGrid").innerHTML =
    products.slice(6, 12).map(productCard).join("");

  updateCounters();
}


function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}


/* =========================================
   PANIER
========================================= */

function addCart(id) {

  const item = cart.find(x => x.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  save();
  renderCart();
  openCart();
  toast("Produit ajouté au panier");
}


function removeCart(id) {
  cart = cart.filter(x => x.id !== id);
  save();
  renderCart();
}


function changeQty(id, d) {

  const item = cart.find(x => x.id === id);
  if (!item) return;

  item.qty += d;

  if (item.qty <= 0) {
    removeCart(id);
  } else {
    save();
    renderCart();
  }
}


function renderCart() {

  const box = document.getElementById("cartItems");

  if (!cart.length) {
    box.innerHTML = `<p style="padding:35px 0;color:#777">Votre panier est vide.</p>`;
    document.getElementById("cartTotal").textContent = "0 FCFA";
    return;
  }

  let total = 0;

  box.innerHTML = cart.map(i => {

    const p = products.find(x => x.id === i.id);
    total += p.price * i.qty;

    return `
      <div class="cart-item">
        <img src="${p.img}" alt="">

        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div>${money(p.price)}</div>

          <div class="qty">
            <button onclick="changeQty(${p.id},-1)">−</button>
            <span>${i.qty}</span>
            <button onclick="changeQty(${p.id},1)">+</button>
          </div>

          <button class="remove" onclick="removeCart(${p.id})">Supprimer</button>
        </div>
      </div>
    `;

  }).join("");

  document.getElementById("cartTotal").textContent = money(total);
}


function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  renderCart();
}


function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}


function toggleWish(id) {

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
  } else {
    wishlist.push(id);
  }

  save();
  render();

  toast(wishlist.includes(id) ? "Ajouté aux favoris" : "Retiré des favoris");
}


/* =========================================
   FICHE PRODUIT
========================================= */

function openProduct(id) {

  const p = products.find(x => x.id === id);

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-product">

      <img src="${p.img}" alt="${p.name}">

      <div>
        <p class="eyebrow">${p.category}</p>
        <h2>${p.name}</h2>
        <div class="stars">${stars(p.rating)}</div>

        <div class="price">
          ${money(p.price)}
          <span class="old">${money(p.old)}</span>
        </div>

        <p>
          Une pièce soigneusement sélectionnée pour apporter une touche
          moderne et élégante à votre style. Quantités limitées.
        </p>

        <button class="btn btn-dark" onclick="addCart(${p.id});closeModal()">
          Ajouter au panier
        </button>
      </div>

    </div>
  `;

  document.getElementById("productModal").classList.add("show");
}


function closeModal() {
  document.getElementById("productModal").classList.remove("show");
}


/* =========================================
   ÉVÉNEMENTS
========================================= */

document.getElementById("closeAnnouncement").onclick =
  () => document.getElementById("announcement").remove();

document.getElementById("cartBtn").onclick = openCart;
document.getElementById("closeCart").onclick = closeCart;
document.getElementById("overlay").onclick = closeCart;
document.getElementById("closeModal").onclick = closeModal;

document.getElementById("productModal").onclick = e => {
  if (e.target.id === "productModal") closeModal();
};

document.getElementById("menuBtn").onclick = () =>
  document.getElementById("mobileMenu").classList.toggle("open");

document.querySelectorAll(".mobile-menu a").forEach(a => {
  a.addEventListener("click", () =>
    document.getElementById("mobileMenu").classList.remove("open")
  );
});


/* ----- Recherche ----- */

const searchPanel = document.getElementById("searchPanel");

document.querySelector(".search-toggle").onclick = () => {
  searchPanel.classList.toggle("open");
  if (searchPanel.classList.contains("open")) {
    document.getElementById("searchInput").focus();
  }
};

document.getElementById("clearSearch").onclick = () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchResults").innerHTML = "";
};

document.getElementById("searchInput").oninput = e => {

  const q = e.target.value.trim().toLowerCase();

  const results = products
    .filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
    .slice(0, 6);

  document.getElementById("searchResults").innerHTML = q
    ? results.map(p => `
        <button class="mini-result" onclick="openProduct(${p.id})">
          <img src="${p.img}" alt="">
          <span>${p.name}<br><b>${money(p.price)}</b></span>
        </button>
      `).join("")
    : "";
};


/* ----- Favoris / newsletter / commande ----- */

document.getElementById("wishlistBtn").onclick = () => {

  if (!wishlist.length) {
    toast("Votre liste de favoris est vide");
    return;
  }

  toast(`${wishlist.length} article(s) dans vos favoris`);
};

document.getElementById("newsletterForm").onsubmit = e => {

  e.preventDefault();

  const email = document.getElementById("emailInput").value;
  if (!email) return;

  toast("Merci ! Votre code -10% est prêt.");
  e.target.reset();
};

document.getElementById("checkoutBtn").onclick = () => {

  if (!cart.length) {
    toast("Votre panier est vide");
    return;
  }

  // Récapitulatif de la commande
  let total = 0;

  const lignes = cart.map(i => {
    const p = products.find(x => x.id === i.id);
    total += p.price * i.qty;
    return `• ${p.name} x${i.qty} — ${money(p.price * i.qty)}`;
  });

  const message =
    "Bonjour COUL STORE, je souhaite passer la commande suivante :\n\n" +
    lignes.join("\n") +
    `\n\nTotal : ${money(total)}`;

  // Le panier se vide automatiquement après validation
  cart = [];
  save();
  renderCart();
  closeCart();

  toast("Merci ! Votre commande a été validée.");

  window.open(
    "https://wa.me/2250584151920?text=" + encodeURIComponent(message),
    "_blank"
  );
};


/* ----- Clic sur une catégorie (cartes, boutons, menu pied de page) ----- */

document.querySelectorAll("[data-cat]").forEach(el => {

  el.addEventListener("click", e => {
    e.preventDefault();
    setCategory(el.dataset.cat);
  });

});

const viewAllBtn = document.getElementById("viewAll");

if (viewAllBtn) viewAllBtn.onclick = () => {

  activeCat = "Tous";
  showAll = true;

  document.querySelectorAll(".filter-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.cat === "Tous")
  );

  setText("productsTitle", "Tous les produits");
  setText("productsEyebrow", "NOTRE SÉLECTION");

  render();
};


/* =========================================
   AVIS CLIENTS
========================================= */

let reviewIndex = 0;

const reviews = [
  ["fatim", "J'ai reçu ma commande rapidement et la qualité est vraiment excellente. Je recommande !"],
  ["yasmine", "Le design du site est super simple et ma commande était conforme aux photos."],
  ["Mariam", "Très belle expérience. Le service client a répondu rapidement à ma demande."],
  ["Yann", "Les produits sont élégants et les prix restent accessibles. Je commanderai encore."]
];

function showReview() {

  const r = reviews[reviewIndex];

  document.getElementById("reviewCard").innerHTML = `
    <div class="stars">★★★★★</div>
    <p>“${r[1]}”</p>
    <small>— ${r[0]}</small>
  `;
}

document.getElementById("prevReview").onclick = () => {
  reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
  showReview();
};

document.getElementById("nextReview").onclick = () => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  showReview();
};

setInterval(() => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  showReview();
}, 5000);


/* =========================================
   COMPTE À REBOURS
========================================= */

const end =
  Date.now()
  + 4 * 24 * 60 * 60 * 1000
  + 12 * 60 * 60 * 1000
  + 45 * 60 * 1000;

function countdown() {

  let s = Math.floor(Math.max(0, end - Date.now()) / 1000);

  const days = Math.floor(s / 86400);
  s %= 86400;

  const h = Math.floor(s / 3600);
  s %= 3600;

  const m = Math.floor(s / 60);
  s %= 60;

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(h).padStart(2, "0");
  document.getElementById("minutes").textContent = String(m).padStart(2, "0");
  document.getElementById("seconds").textContent = String(s).padStart(2, "0");
}

setInterval(countdown, 1000);

countdown();
showReview();
render();
renderCart();