// Navigation Active Link & Section Switcher
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

// Hamburger Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Fermer le hamburger menu
        if (hamburger) {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
        }
        
        // Supprimer la classe active de tous les liens
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Cacher toutes les sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active-section');
        });

        // Afficher la section cible
        const target = this.getAttribute('href');
        const targetSection = document.querySelector(target);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
        
        // Scroll en haut auto
        window.scrollTo(0, 0);
    });
});

// Définir la section Accueil comme active au chargement
window.addEventListener('load', () => {
    document.querySelector('#accueil').classList.add('active-section');
});

// Animation des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer all cards
document.querySelectorAll('.card, .exp-box, .project-card').forEach(el => {
    observer.observe(el);
});

// Filtrage des projets
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Supprimer la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Gestion du formulaire de contact avec Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Ne pas empêcher le comportement par défaut pour Formspree
        // e.preventDefault();
        
        // Vous pouvez ajouter une validation supplémentaire ici si nécessaire
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            // Le formulaire sera soumis automatiquement à Formspree
            console.log('Formulaire valide, envoi à Formspree...');
        } else {
            e.preventDefault();
            alert('Veuillez remplir tous les champs');
        }
    });

    // Écouter la réponse de Formspree
    if (window.location.hash === '#success') {
        const formNote = document.getElementById('formNote');
        if (formNote) {
            formNote.style.display = 'block';
            contactForm.reset();
        }
    }
}

// Charger les projets depuis data.json (optionnel)
async function loadProjects() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        console.log('Projets chargés:', data.projects);
    } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
    }
}

loadProjects();

// Ajout d'une classe pour les animations CSS
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .exp-box, .project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});