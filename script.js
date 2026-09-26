document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('sellerForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const boutique = document.getElementById('sellerShop').value.trim();
    const nom = document.getElementById('sellerName').value.trim();
    const whatsapp = document.getElementById('sellerPhone').value.trim();
    const email = document.getElementById('sellerEmail').value.trim();
    const categorie = document.getElementById('sellerCategory').value;
    const formule = document.getElementById('sellerPlan').value;
    const description = document.getElementById('sellerDescription').value.trim();

    // Garde-fou basique : les champs marqués "required" en HTML doivent être remplis.
    // On revérifie ici au cas où le navigateur ne bloquerait pas la soumission.
    if (!boutique || !nom || !whatsapp || !categorie || !formule) {
      return;
    }

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

    // "noopener,noreferrer" empêche la page WhatsApp ouverte d'accéder à
    // window.opener et donc de rediriger ton site (reverse tabnabbing).
    window.open(url, '_blank', 'noopener,noreferrer');
  });
});
