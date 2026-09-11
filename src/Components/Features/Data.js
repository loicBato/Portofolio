
import { ReactIcon, NodeIcon, PythonIcon, DevIcon, DataIcon, CeoIcon } from "./Icons";
import maintenance from '../../assets/maintenance.jpeg'
import lms from '../../assets/lms.jpeg'
import dashboard from '../../assets/dashboard.jpg'
import e_commerce from '../../assets/e_commerce.jpg'
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
    slug: 'sigpmt-smartpresence',
    title: 'SIGPMT / SmartPresence',
    subtitle: 'Système de présence biométrique multicritère basé sur la reconnaissance faciale et la géolocalisation.',
    category: 'IA & Biométrie',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'FaceNet', 'CLIP'],
    imageUrl: maintenance,
    description: "Projet de mémoire de Master portant sur un système de présence biométrique avancé combinant reconnaissance faciale, détection de vivacité, contexte visuel et géofencing. L’objectif est d’assurer une vérification robuste et fiable de l’authenticité des présences en temps réel.",
    context: "Les méthodes traditionnelles de présence sont parfois peu fiables ou faciles à contourner, surtout dans les environnements où la traçabilité et la sécurité des accès sont critiques.",
    challenge: "Le défi consistait à intégrer plusieurs critères biométriques et contextuels dans un système cohérent, tout en évitant les faux positifs et en assurant un backend robuste avec gestion d’accès et flux temps réel.",
    role: "J’ai contribué à la conception et au développement de la solution, notamment sur la partie biométrique, le backend FastAPI, la base de données PostgreSQL/pgvector, la gestion des WebSocket et les mécanismes de sécurité et d’autorisation RBAC.",
    stack: [
      { name: 'Python', icon: PythonIcon },
      { name: 'FastAPI', icon: DevIcon },
      { name: 'PostgreSQL', icon: DataIcon },
      { name: 'FaceNet', icon: PythonIcon },
      { name: 'CLIP', icon: DataIcon },
    ],
    screenshots: [
      maintenance,
      dashboard,
    ],
    results: [
      "Architecture conçue pour la robustesse et la scalabilité du système de présence.",
      "Mise en place d’une logique multi-critère pour améliorer la fiabilité.",
      "Approche alignée sur des usages réels de monitoring et d’authentification.",
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
    slug: 'application-consultation-contraventions',
    title: 'Application de consultation de contraventions',
    subtitle: 'Plateforme React avec logique OCR et interface interactive pour la consultation rapide d’informations.',
    category: 'Développement Web',
    tags: ['React', 'MUI', 'Framer Motion', 'OCR'],
    imageUrl: site,
    description: "Développement d’une application de consultation de contraventions avec interface moderne, traitements visuels et logique d’extraction OCR pour simplifier la lecture et la gestion des documents.",
    context: "Les utilisateurs avaient besoin d’une interface fluide pour consulter des documents administratifs et retrouver rapidement les informations utiles sans friction.",
    challenge: "Il fallait rendre l’expérience intuitive, tout en intégrant un hook OCR personnalisé pour améliorer le traitement et la structuration des données extraites.",
    role: "J’ai pris en charge la conception de l’interface, le développement des composants React, l’optimisation des interactions utilisateur et la logique OCR dédiée à la lecture intelligente des documents.",
    stack: [
      { name: 'React', icon: ReactIcon },
      { name: 'MUI', icon: DevIcon },
      { name: 'Framer Motion', icon: DevIcon },
      { name: 'OCR', icon: DataIcon },
    ],
    screenshots: [
      site,
      e_commerce,
    ],
    results: [
      "Expérience utilisateur plus claire et plus rapide.",
      "Traitement documentaire plus accessible et plus automatisé.",
      "Interface moderne conçue pour améliorer l’adoption par les utilisateurs.",
    ],
  },
];
