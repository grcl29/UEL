# ⚙️ Configuration Formspree

## 🔧 Étapes pour activer le formulaire de contact

### 1. Créer un compte Formspree
- Visitez : https://formspree.io/
- Cliquez sur "Sign Up" (en haut à droite)
- Créez un compte avec votre email
- Confirmez votre email

### 2. Créer un nouveau formulaire
- Cliquez sur "New Project" ou "Create Form"
- Nommez-le : "Mon Portfolio"
- Choisissez "HTML Form"
- Accédez au formulaire créé

### 3. Récupérer votre Form ID
Vous trouverez une URL ressemblant à :
```
https://formspree.io/f/YOUR_FORM_ID
```

Copiez juste la partie : `YOUR_FORM_ID`

### 4. Mettre à jour votre portfolio
Dans `inddexs.html`, trouvez la ligne :
```html
<form id="contactForm" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

Remplacez `YOUR_FORM_ID` par votre vrai ID. Par exemple :
```html
<form id="contactForm" method="POST" action="https://formspree.io/f/abc123xyz789">
```

### 5. Tester le formulaire
- Remplissez le formulaire sur votre site
- Soumettez-le
- Vous recevrez un email de confirmation
- Les futurs messages arriveront directement à votre boîte email

## 📊 Plan gratuit Formspree
- ✅ 50 soumissions/mois
- ✅ Réponses par email
- ✅ Support d'un seul formulaire
- ❌ Pas de stockage en ligne

Si vous avez besoin de plus, vous pouvez upgrader le plan.

## ✅ Formulaire fonctionnel
Vous avez 2 boutons utiles :
1. **Remplir démo** - Pré-remplit avec des données de test
2. **Copier email** - Copie votre email de contact

Le formulaire s'envoie automatiquement à l'adresse configurée dans Formspree.
