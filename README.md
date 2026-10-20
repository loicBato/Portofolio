# Portfolio de Loïc BATO

Portfolio personnel de **Tarekpessou Loïc BATO**, présentant son parcours, ses compétences, ses projets et ses activités. Le site met en avant son profil à la croisée de la data, de l’intelligence artificielle et du développement web.

## Aperçu

Le portfolio comprend les pages suivantes :

- **Accueil** : présentation du profil, accès rapide aux projets et aux contacts.
- **À propos** : parcours et informations personnelles.
- **Compétences** : compétences en data, machine learning, développement et outils d’analyse.
- **Projets** : liste des réalisations avec une page de détail pour chaque projet.
- **Entreprises** : présentation de BAT LAB et LMS Empire.
- **Contact** : formulaire ouvrant le logiciel de messagerie de l’utilisateur, ainsi que des liens directs vers l’e-mail et LinkedIn.

### Projets présentés

- **Analyse du sarcasme dans les commentaires des réseaux sociaux** — analyse de texte et traitement automatique du langage.
- **Classification académique par GCN** — classification d’étudiants à partir d’un graphe de similarité.
- **Entraînement d’un modèle de traduction en langue éwé** — entraînement à partir d’un jeu de données issu d’un concours.

## Technologies

- [React](https://react.dev/) et [Vite](https://vite.dev/)
- [Material UI](https://mui.com/) et les icônes Material
- [React Router](https://reactrouter.com/) pour la navigation
- CSS pour les styles et la mise en page responsive
- ESLint pour l’analyse statique du code

## Prérequis

- Node.js et npm
- Git, si vous souhaitez cloner le dépôt

## Installation

Clonez le dépôt, puis installez ses dépendances :

```bash
git clone <url-du-depot>
cd Portofolio
npm install
```

## Développement

Lancez le serveur de développement :

```bash
npm run dev
```

Vite affiche l’adresse locale à ouvrir dans votre navigateur. Les modifications du code sont prises en compte automatiquement.

## Commandes disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement Vite. |
| `npm run build` | Génère la version de production dans `dist/`. |
| `npm run preview` | Sert localement la version de production pour la vérifier. |
| `npm run lint` | Analyse le code avec ESLint. |

Pour vérifier la version de production en local :

```bash
npm run build
npm run preview
```

## Structure du projet

```text
src/
├── App.jsx                         # Thème MUI et routes principales
├── App.css                         # Styles globaux de l’application
├── index.css                       # Styles de base et scrollbar
├── assets/                         # Images et ressources du portfolio
└── Components/
    └── Features/
        ├── Data.js                 # Données des projets, compétences et entreprises
        ├── Icons.jsx               # Icônes utilisées dans le portfolio
        ├── Components/             # Header, footer, cartes et animations
        └── Pages/                  # Pages du site
```

## Personnalisation du contenu

- **Projets, compétences et entreprises** : modifiez les tableaux exportés dans `src/Components/Features/Data.js`.
- **Images** : ajoutez les fichiers dans `src/assets/`, puis importez-les dans le fichier de données ou le composant concerné.
- **Thème et couleurs** : adaptez le thème Material UI dans `src/App.jsx` et les variables de couleur dans `src/index.css`.
- **Coordonnées** : mettez à jour l’adresse e-mail et l’URL LinkedIn dans `src/Components/Features/Pages/Contacts/Contacts.jsx`.

Le formulaire de contact construit un lien `mailto:` : l’envoi du message dépend donc du logiciel de messagerie configuré chez la personne qui consulte le site.

## Déploiement

Construisez le site avec :

```bash
npm run build
```

Déployez ensuite le contenu du dossier `dist/` sur un hébergeur de sites statiques. Le projet utilise `HashRouter` : les adresses des pages incluent un `#` (par exemple `/#/projects`), ce qui permet la navigation sans configuration de réécriture spécifique sur l’hébergeur.
