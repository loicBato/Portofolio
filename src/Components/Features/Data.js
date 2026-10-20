
import { ReactIcon, NodeIcon, PythonIcon, DevIcon, DataIcon, CeoIcon } from "./Icons";
import lms from '../../assets/lms.jpeg'
import dashboard from '../../assets/dashboard.jpg'
import contenu from '../../assets/contenu.jpg'
import deep from '../../assets/deep.jpg'
import site from '../../assets/site.jpg'
import fitness from '../../assets/fitness.jpg'
import bat_lab from '../../assets/BAT.jpg'


export const skillsData = [
  {
    title: 'Cycle de vie de la donnée',
    skills: [
      { name: 'Collecte de données', icon: DataIcon },
      { name: 'Nettoyage & validation', icon: DataIcon },
      { name: 'Contrôle qualité', icon: DataIcon },
      { name: 'NLP & traitement texte', icon: DataIcon },
      { name: 'Pipeline de données', icon: DataIcon },
      { name: 'Analyse statistique', icon: DataIcon },
    ],
  },
  {
    title: 'Machine Learning & Deep Learning',
    skills: [
      { name: 'Python', icon: PythonIcon },
      { name: 'PyTorch', icon: PythonIcon },
      { name: 'CNN', icon: PythonIcon },
      { name: 'GCN', icon: PythonIcon },
      { name: 'FaceNet', icon: PythonIcon },
      { name: 'MobileNetV2', icon: PythonIcon },
    ],
  },
  {
    title: 'Développement Web & Backend',
    skills: [
      { name: 'JavaScript', icon: DevIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'FastAPI', icon: DevIcon },
      { name: 'PostgreSQL', icon: DataIcon },
      { name: 'pgvector', icon: DataIcon },
      { name: 'WebSocket', icon: DevIcon },
    ],
  },
  {
    title: 'Analyse & Outils de travail',
    skills: [
      { name: 'SQL', icon: DataIcon },
      { name: 'Excel avancé', icon: DataIcon },
      { name: 'Word / Reporting', icon: DevIcon },
      { name: 'Google Colab', icon: DevIcon },
      { name: 'Git & GitHub', icon: DevIcon },
      { name: 'PowerPoint', icon: DevIcon },
    ],
  },
];

export const companiesData = [
  {
    name: 'BAT LAB',
    logo: bat_lab,
    mission: "Transformer les données brutes en informations exploitables pour les entreprises et les projets d’innovation.",
    description: "BAT LAB est une structure orientée innovation qui combine le développement, la data et la stratégie pour concevoir des solutions utiles, performantes et alignées avec les besoins business. L’objectif est de convertir les données en décisions plus rapides, plus claires et plus impactantes.",
    websiteUrl: 'https://bat-lab.vercel.app/',
  },
  {
    name: 'LMS Empire',
    logo: lms,
    mission: "Faire rayonner la mode africaine à travers des créations modernes, accessibles et portées par une identité forte.",
    description: "LMS Empire incarne une vision de mode contemporaine inspirée par l’identité togolaise et les tendances internationales. La marque met en avant le style, la qualité et la créativité, tout en soutenant les savoir-faire locaux et la visibilité de la mode africaine sur le marché mondial.",
    websiteUrl: 'https://lmsempire.netlify.app/',
  },
];

export const projectsData = [
  {
    slug: 'analyse-sarcasme-reseaux-sociaux',
    title: 'Analyse du sarcasme dans les commentaires des réseaux sociaux',
    subtitle: 'Analyse de commentaires en ligne pour identifier les expressions sarcastiques.',
    category: 'NLP & Analyse de texte',
    tags: ['Python', 'NLP', 'Analyse de texte'],
    imageUrl: contenu,
    description: "Projet d’analyse de commentaires publiés sur les réseaux sociaux afin d’identifier les expressions sarcastiques à l’aide de méthodes de traitement automatique du langage.",
    context: "Le sarcasme peut modifier le sens d’un commentaire et compliquer l’interprétation des opinions exprimées sur les réseaux sociaux.",
    challenge: "Le projet consiste à préparer les commentaires et à analyser leurs formulations pour distinguer les expressions sarcastiques des autres commentaires.",
    role: "J’ai travaillé sur l’analyse des données textuelles et la mise en place d’une démarche de détection du sarcasme dans les commentaires des réseaux sociaux.",
    stack: [
      { name: 'Python', icon: PythonIcon },
      { name: 'NLP', icon: DataIcon },
      { name: 'Analyse de texte', icon: DataIcon },
    ],
    screenshots: [
      contenu,
    ],
    results: [
      "Analyse de commentaires issus des réseaux sociaux.",
      "Étude des indices linguistiques associés au sarcasme.",
      "Application du traitement automatique du langage à des contenus textuels.",
    ],
  },
  {
    slug: 'classification-academique-gcn',
    title: 'Classification académique par GCN',
    subtitle: 'Modèle de Machine Learning pour classer des étudiants par filière à partir d’un graphe de similarité.',
    category: 'Machine Learning',
    tags: ['Python', 'PyTorch', 'GCN', 'Cosine Similarity'],
    imageUrl: dashboard,
    description: "Ce projet a consisté à construire un graphe de similarité entre étudiants et à utiliser un modèle de réseaux de neurones sur graphes pour effectuer une classification structurée par filière.",
    context: "La donnée scolaire et académique est souvent hétérogène et relationnelle. Un modèle basé sur les interactions entre individus peut mieux capturer la structure réelle des similarités et des trajectoires.",
    challenge: "Le principal enjeu était de représenter proprement les similarités entre étudiants et d’optimiser un pipeline de travail avec PyTorch Geometric, en gardant un modèle fiable et interprétable.",
    role: "J’ai conçu la préparation des données, la construction du graphe, le choix du modèle GCN et l’évaluation des performances afin d’obtenir une classification robuste et exploitable.",
    stack: [
      { name: 'Python', icon: PythonIcon },
      { name: 'PyTorch', icon: PythonIcon },
      { name: 'GCN', icon: PythonIcon },
      { name: 'Graph Data', icon: DataIcon },
    ],
    screenshots: [
      dashboard,
      site,
    ],
    results: [
      "Modèle exploitable pour l’analyse de profils académiques.",
      "Approche orientée structure et relations entre données.",
      "Mise en valeur des capacités de modélisation graph-based.",
    ],
  },
  {
    slug: 'traduction-langue-ewe',
    title: 'Entraînement d’un modèle de traduction en langue éwé',
    subtitle: 'Entraînement d’un modèle de traduction à partir d’un jeu de données issu d’un concours.',
    category: 'IA & Traduction automatique',
    tags: ['Python', 'NLP', 'Traduction automatique'],
    imageUrl: deep,
    description: "Projet d’entraînement d’un modèle de traduction pour la langue éwé, en utilisant un jeu de données issu d’un concours.",
    context: "La traduction automatique des langues moins représentées nécessite des données adaptées pour apprendre les correspondances entre les langues.",
    challenge: "Le travail porte sur l’exploitation du jeu de données du concours et l’entraînement d’un modèle destiné à la traduction en langue éwé.",
    role: "J’ai préparé le jeu de données issu du concours et travaillé sur l’entraînement du modèle de traduction en langue éwé.",
    stack: [
      { name: 'Python', icon: PythonIcon },
      { name: 'NLP', icon: DataIcon },
      { name: 'Traduction automatique', icon: DataIcon },
    ],
    screenshots: [
      deep,
    ],
    results: [
      "Exploitation d’un jeu de données issu d’un concours.",
      "Entraînement d’un modèle dédié à la traduction en langue éwé.",
      "Mise en application du traitement automatique du langage pour la traduction.",
    ],
  },
];
