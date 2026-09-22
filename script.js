const products=[
{id:1,name:"Ensemble Premium",price:24900,old:32900,rating:5,img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80",category:"Femmes"},
{id:2,name:"Sneakers Urban",price:29900,old:39900,rating:5,img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",category:"Chaussures"},
{id:3,name:"Sac Élégance",price:25000,old:32000,rating:4,img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",category:"Sacs"},
 
{id:4,name:"Montre Classic",price:34900,old:44900,rating:5,img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",category:"Accessoires"},
{id:5,name:"T-shirt Essentiel",price:5000,old:7000,rating:5,img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",category:"T-shirts"},
{id:6,name:"Jean Signature",price:18900,old:23900,rating:4,img:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",category:"Hommes"},
{id:7,name:"Robe Élégance",price:27900,old:34900,rating:5,img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",category:"Femmes"},
{id:8,name:"Lunettes Noir",price:12900,old:16900,rating:4,img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",category:"Accessoires"},
{id:9,name:"Veste Signature",price:38900,old:49900,rating:5,img:"https:splash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",category:"Hommes"},
{id:10,name:"Sac Mini Chic",price:25000,old:30000,rating:5,img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",category:"Sacs"},
{id:11,name:"Sneakers Cream",price:31900,old:39900,rating:5,img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",category:"Chaussures"},
{id:12,name:"Top Satin",price:15900,old:20900,rating:4,img:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80",category:"Femmes"}
];

const money=n=>new Intl.NumberFormat("fr-FR").format(n)+" FCFA";

let cart=JSON.parse(localStorage.getItem("coulCart")||"[]");
let wishlist=JSON.parse(localStorage.getItem("coulWishlist")||"[]");

function save(){
 localStorage.setItem("coulCart",JSON.stringify(cart));
 localStorage.setItem("coulWishlist",JSON.stringify(wishlist));
 updateCounters();
}

function updateCounters(){
 document.getElementById("cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0);
 document.getElementById("wishlistCount").textContent=wishlist.length;
}

function stars(n){
 return "★".repeat(n)+"☆".repeat(5-n);
}

function productCard(p){
 const wished=wishlist.includes(p.id);

 return `<article class="product-card">
  <div class="product-image">
   <img src="${p.img}" alt="${p.name}" loading="lazy">
   <span class="badge">${p.id>6?"NEW":"BEST"}</span>
   <button class="heart ${wished?"active":""}" onclick="toggleWish(${p.id})">
    ${wished?"♥":"♡"}
   </button>
  </div>

  <div class="product-info">
   <h3>${p.name}</h3>

   <div class="stars">
    ${stars(p.rating)}
   </div>

   <div class="price">
    ${money(p.price)}
    <span class="old">${money(p.old)}</span>
   </div>

   <div class="product-actions">
    <button onclick="openProduct(${p.id})">
     Voir le produit
    </button>

    <button onclick="addCart(${p.id})">
     Ajouter au panier
    </button>
   </div>
  </div>
 </article>`;
}

function render(){
 document.getElementById("productGrid").innerHTML=
  products.slice(0,8).map(productCard).join("");

 document.getElementById("newGrid").innerHTML=
  products.slice(6,12).map(productCard).join("");

 updateCounters();
}

function toast(msg){
 const t=document.getElementById("toast");

 t.textContent=msg;
 t.classList.add("show");

 setTimeout(()=>{
  t.classList.remove("show");
 },2200);
}

function addCart(id){

 const p=products.find(x=>x.id===id);
 const item=cart.find(x=>x.id===id);

 if(item){
  item.qty++;
 }else{
  cart.push({
   id:id,
   qty:1
  });
 }

 save();
 renderCart();
 openCart();

 toast("Produit ajouté au panier");
}

function removeCart(id){

 cart=cart.filter(x=>x.id!==id);

 save();
 renderCart();
}

function changeQty(id,d){

 const item=cart.find(x=>x.id===id);

 if(!item)return;

 item.qty+=d;

 if(item.qty<=0){
  removeCart(id);
 }else{
  save();
  renderCart();
 }
}

function renderCart(){

 const box=document.getElementById("cartItems");

 if(!cart.length){

  box.innerHTML=
  '<p style="padding:35px 0;color:#777">Votre panier est vide.</p>';

  document.getElementById("cartTotal").textContent="0 FCFA";

  return;
 }

 let total=0;

 box.innerHTML=cart.map(i=>{

  const p=products.find(x=>x.id===i.id);

  total+=p.price*i.qty;

  return `
  <div class="cart-item">

   <img src="${p.img}" alt="">

   <div class="cart-item-info">

    <h4>${p.name}</h4>

    <div>${money(p.price)}</div>

    <div class="qty">

     <button onclick="changeQty(${p.id},-1)">
      −
     </button>

     <span>${i.qty}</span>

     <button onclick="changeQty(${p.id},1)">
      +
     </button>

    </div>

    <button class="remove" onclick="removeCart(${p.id})">
     Supprimer
    </button>

   </div>

  </div>`;

 }).join("");

 document.getElementById("cartTotal").textContent=
 money(total);
}

function openCart(){

 document.getElementById("cartDrawer")
 .classList.add("open");

 document.getElementById("overlay")
 .classList.add("show");

 renderCart();
}

function closeCart(){

 document.getElementById("cartDrawer")
 .classList.remove("open");

 document.getElementById("overlay")
 .classList.remove("show");
}

function toggleWish(id){

 if(wishlist.includes(id)){

  wishlist=wishlist.filter(x=>x!==id);

 }else{

  wishlist.push(id);

 }

 save();
 render();

 toast(
  wishlist.includes(id)
  ?"Ajouté aux favoris"
  :"Retiré des favoris"
 );
}

function openProduct(id){

 const p=products.find(x=>x.id===id);

 document.getElementById("modalContent").innerHTML=`

 <div class="modal-product">

  <img src="${p.img}" alt="${p.name}">

  <div>

   <p class="eyebrow">${p.category}</p>

   <h2>${p.name}</h2>

   <div class="stars">
    ${stars(p.rating)}
   </div>

   <div class="price">
    ${money(p.price)}
    <span class="old">${money(p.old)}</span>
   </div>

   <p>
    Une pièce soigneusement sélectionnée pour apporter
    une touche moderne et élégante à votre style.
    Quantités limitées.
   </p>

   <button
    class="btn btn-dark"
    onclick="addCart(${p.id});closeModal()">

    Ajouter au panier

   </button>

  </div>

 </div>`;

 document.getElementById("productModal")
 .classList.add("show");
}

function closeModal(){

 document.getElementById("productModal")
 .classList.remove("show");
}


document.getElementById("closeAnnouncement").onclick=()=>{
 document.getElementById("announcement").remove();
};


document.getElementById("cartBtn").onclick=openCart;


document.getElementById("closeCart").onclick=closeCart;


document.getElementById("overlay").onclick=closeCart;


document.getElementById("closeModal").onclick=closeModal;


document.getElementById("productModal").onclick=e=>{

 if(e.target.id==="productModal"){
  closeModal();
 }

};


document.getElementById("menuBtn").onclick=()=>{

 document.getElementById("mobileMenu")
 .classList.toggle("open");

};


document.querySelectorAll(".mobile-menu a")
.forEach(a=>{

 a.onclick=()=>{
  document.getElementById("mobileMenu")
  .classList.remove("open");
 };

});


const searchPanel=
 document.getElementById("searchPanel");


document.querySelector(".search-toggle").onclick=()=>{

 searchPanel.classList.toggle("open");

 if(searchPanel.classList.contains("open")){

  document.getElementById("searchInput").focus();

 }

};


document.getElementById("clearSearch").onclick=()=>{

 document.getElementById("searchInput").value="";

 document.getElementById("searchResults").innerHTML="";

};


document.getElementById("searchInput").oninput=e=>{

 const q=e.target.value.trim().toLowerCase();

 const results=products.filter(p=>
  p.name.toLowerCase().includes(q) ||
  p.category.toLowerCase().includes(q)
 ).slice(0,6);

 document.getElementById("searchResults").innerHTML=

 q ?

 results.map(p=>`

  <button
   class="mini-result"
   onclick="openProduct(${p.id})">

   <img src="${p.img}" alt="">

   <span>
    ${p.name}
    <br>
    <b>${money(p.price)}</b>
   </span>

  </button>

 `).join("")

 : "";

};


document.getElementById("wishlistBtn").onclick=()=>{

 if(!wishlist.length){

  toast("Votre liste de favoris est vide");

  return;
 }

 toast(
  `${wishlist.length} article(s) dans vos favoris`
 );

};


document.getElementById("newsletterForm").onsubmit=e=>{

 e.preventDefault();

 const email=
  document.getElementById("emailInput").value;

 if(!email)return;

 toast("Merci ! Votre code -10% est prêt.");

 e.target.reset();

};


document.getElementById("checkoutBtn").onclick=()=>{

 if(!cart.length){

  toast("Votre panier est vide");

  return;
 }

 toast(
  "Commande prête — connectez votre moyen de paiement pour continuer."
 );

};


let reviewIndex=0;

const reviews=[
 

 [
  "Aïcha",
  "J'ai reçu ma commande rapidement et la qualité est vraiment excellente. Je recommande !"
 ],

 [
  "Koffi",
  "Le design du site est super simple et ma commande était conforme aux photos."
 ],

 [
  "Mariam",
  "Très belle expérience. Le service client a répondu rapidement à ma demande."
 ],

 [
  "Yann",
  "Les produits sont élégants et les prix restent accessibles. Je commanderai encore."
 ]

];


function showReview(){

 const r=reviews[reviewIndex];

 document.getElementById("reviewCard").innerHTML=`

 <div class="stars">
  ★★★★★
 </div>

 <p>
  “${r[1]}”
 </p>

 <small>
  — ${r[0]}
 </small>

 `;

}


document.getElementById("prevReview").onclick=()=>{

 reviewIndex=
  (reviewIndex-1+reviews.length)%reviews.length;

 showReview();

};


document.getElementById("nextReview").onclick=()=>{

 reviewIndex=
  (reviewIndex+1)%reviews.length;

 showReview();

};


setInterval(()=>{

 reviewIndex=
  (reviewIndex+1)%reviews.length;

 showReview();

},5000);


const end=
 Date.now()+
 4*24*60*60*1000+
 12*60*60*1000+
 45*60*1000;


function countdown(){

 let d=Math.max(0,end-Date.now());

 let s=Math.floor(d/1000);

 const days=Math.floor(s/86400);

 s%=86400;

 const h=Math.floor(s/3600);

 s%=3600;

 const m=Math.floor(s/60);

 s%=60;


 document.getElementById("days").textContent=
  String(days).padStart(2,"0");

 document.getElementById("hours").textContent=
  String(h).padStart(2,"0");

 document.getElementById("minutes").textContent=
  String(m).padStart(2,"0");

 document.getElementById("seconds").textContent=
  String(s).padStart(2,"0");

}


setInterval(countdown,1000);

countdown();

showReview();

render();

renderCart();
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('sellerForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const boutique = document.getElementById('sellerShop').value;
    const nom = document.getElementById('sellerName').value;
    const whatsapp = document.getElementById('sellerPhone').value;
    const email = document.getElementById('sellerEmail').value;
    const categorie = document.getElementById('sellerCategory').value;
    const formule = document.getElementById('sellerPlan').value;
    const description = document.getElementById('sellerDescription').value;

    const votreNumero = '2250584151920'; // VOTRE numéro WhatsApp (indicatif pays + numéro, sans + ni espace)

    const message = `Nouvelle demande vendeur COUL STORE :
Boutique : ${boutique}
Nom : ${nom}
WhatsApp : ${whatsapp}
Email : ${email || 'Non renseigné'}
Catégorie : ${categorie}
Formule : ${formule}
Description : ${description || 'Aucune'}`;

    const url = `https://wa.me/${votreNumero}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
});
