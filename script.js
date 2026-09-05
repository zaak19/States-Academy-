const translations = {
  fr: {
    "nav.home":"Accueil","nav.academy":"Academy","nav.products":"Produits","nav.coaching":"Coaching privé","nav.about":"À propos","nav.contact":"Contact","nav.cta":"Explorer",
    "hero.title":"Construis. Développe.<br><em>Domine.</em>",
    "hero.text":"Des ressources premium, des stratégies concrètes et un accompagnement privé pour transformer vos ambitions entrepreneuriales en résultats.",
    "hero.primary":"Découvrir les produits <span>↗</span>","hero.secondary":"Coaching privé",
    "hero.proof1":"Stratégies","hero.proof2":"Compétences","hero.proof3":"Exécution",
    "academy.title":"Une académie pensée pour ceux qui veulent <em>passer à l'action.</em>",
    "academy.text":"States Academy réunit des formations, guides et accompagnements conçus pour les entrepreneurs qui veulent apprendre plus vite, décider mieux et construire des activités solides.",
    "academy.link":"Voir les ressources <span>→</span>",
    "products.title":"Des connaissances qui deviennent <em>des actions.</em>",
    "products.note":"Remplacez les produits ci-dessous par vos offres et vos liens de paiement.",
    "products.tag1":"FORMATION","products.tag2":"GUIDES","products.tag3":"MENTORAT",
    "products.p1.title":"Business & Entrepreneuriat","products.p1.text":"Une formation structurée pour comprendre les fondamentaux, créer une offre et développer une activité digitale.",
    "products.p2.title":"Guides & Ressources","products.p2.text":"Des guides pratiques et ressources digitales pour apprendre, exécuter et gagner du temps.",
    "products.p3.title":"Coaching privé","products.p3.text":"Un accompagnement individuel orienté stratégie, clarté, exécution et croissance de votre projet.",
    "products.learn":"En savoir plus →",
    "coaching.title":"Votre vision.<br><em>Une stratégie.</em><br>Une exécution.",
    "coaching.text":"Le coaching privé est destiné aux entrepreneurs qui recherchent un regard stratégique et un accompagnement personnalisé pour avancer avec plus de précision.",
    "coaching.cta":"Demander un coaching <span>↗</span>",
    "about.title":"Apprendre avec intention. <em>Construire avec méthode.</em>",
    "about.text":"Notre mission est simple : rendre les connaissances business plus accessibles, pratiques et directement applicables.",
    "contact.title":"Prêt à passer<br><em>au niveau supérieur ?</em>",
    "contact.text":"Pour une question, une collaboration ou une demande de coaching privé :",
    "contact.cta":"Nous contacter <span>↗</span>",
    "footer.claim":"Learn. Build. Scale.","footer.rights":"Tous droits réservés.","footer.contact":"Contact","footer.privacy":"Confidentialité","footer.terms":"Conditions"
  },
  en: {
    "nav.home":"Home","nav.academy":"Academy","nav.products":"Products","nav.coaching":"Private coaching","nav.about":"About","nav.contact":"Contact","nav.cta":"Explore",
    "hero.title":"Build. Grow.<br><em>Dominate.</em>",
    "hero.text":"Premium resources, practical strategies and private guidance to turn your entrepreneurial ambitions into results.",
    "hero.primary":"Explore products <span>↗</span>","hero.secondary":"Private coaching",
    "hero.proof1":"Strategy","hero.proof2":"Skills","hero.proof3":"Execution",
    "academy.title":"An academy designed for those ready to <em>take action.</em>",
    "academy.text":"States Academy brings together courses, guides and private support for entrepreneurs who want to learn faster, make better decisions and build stronger businesses.",
    "academy.link":"Explore resources <span>→</span>",
    "products.title":"Knowledge that becomes <em>action.</em>",
    "products.note":"Replace the products below with your actual offers and payment links.",
    "products.tag1":"COURSE","products.tag2":"GUIDES","products.tag3":"MENTORSHIP",
    "products.p1.title":"Business & Entrepreneurship","products.p1.text":"A structured course covering fundamentals, offer creation and the development of a digital business.",
    "products.p2.title":"Guides & Resources","products.p2.text":"Practical guides and digital resources designed to help you learn, execute and save time.",
    "products.p3.title":"Private Coaching","products.p3.text":"One-to-one support focused on strategy, clarity, execution and the growth of your project.",
    "products.learn":"Learn more →",
    "coaching.title":"Your vision.<br><em>A strategy.</em><br>An execution.",
    "coaching.text":"Private coaching is designed for entrepreneurs looking for strategic perspective and personalized support to move forward with greater precision.",
    "coaching.cta":"Request coaching <span>↗</span>",
    "about.title":"Learn with intention. <em>Build with method.</em>",
    "about.text":"Our mission is simple: make business knowledge more accessible, practical and immediately applicable.",
    "contact.title":"Ready to move<br><em>to the next level?</em>",
    "contact.text":"For questions, collaborations or private coaching requests:",
    "contact.cta":"Contact us <span>↗</span>",
    "footer.claim":"Learn. Build. Scale.","footer.rights":"All rights reserved.","footer.contact":"Contact","footer.privacy":"Privacy","footer.terms":"Terms"
  }
};

function setLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("statesAcademyLang", lang);
}

document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
});

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
menuBtn.addEventListener("click",()=>mobileNav.classList.toggle("open"));
mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobileNav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("statesAcademyLang") || "fr");
