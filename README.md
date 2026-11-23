# SAE_301_docs

Portail documentaire et suivi de feuille de route pour la **SAÉ 301 / 303 — Portail de covoiturage de l’IUT d’Arles** (BUT MMI2, Aix Marseille Université), réalisé selon la charte graphique officielle amU (2024).

## Structure du site

- `index.html` — Accueil, échéances clés et accès rapide aux documents.
- `sujet.html` — Synthèse et visionneuse PDF du sujet (`SAÉ 301-303 - Portail de covoiturage de l’IUT d’Arles.pdf`).
- `fiche-de-route.html` — Synthèse, liens outils et visionneuse PDF de la fiche de route (`Fiche de route - Livrables Design d’expérience (SAÉ 301 303).pdf`).
- `charte-amu.html` — Référentiel interactif (palette hexadécimale, typographie, formes) et visionneuse PDF de la charte graphique amU (`AMU_Charte_graphique.pdf`).
- `todo.html` — To-do list interactive de la feuille de route avec sauvegarde locale (`localStorage`), tâches personnalisées, exportation et importation au format `.json`.
- `css/style.css`, `js/main.js`, `js/todo.js` — Feuille de style et scripts statiques sans dépendance de build.

## Déploiement sur GitHub Pages

1. Poussez le dépôt sur GitHub (branche `main`).
2. Ouvrez **Settings → Pages** dans votre dépôt GitHub.
3. Sous **Build and deployment**, sélectionnez **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`.
4. Enregistrez : le site sera accessible via l’URL GitHub Pages de votre dépôt.
