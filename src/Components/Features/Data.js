
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
    title: 'Développement Frontend',
    skills: [
      { name: 'React', icon: ReactIcon },
      { name: 'TypeScript', icon: DevIcon },
      { name: 'Tailwind CSS', icon: DevIcon },
      { name: 'Javascript', icon: DevIcon },
      { name: 'Vite', icon: DevIcon },
      { name: 'Framer Motion', icon: DevIcon },
    ],
  },
  {
    title: 'Développement Backend',
    skills: [
      { name: 'Node.js', icon: NodeIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'PostgreSQL', icon: DataIcon },
      { name: 'MongoDB', icon: DataIcon },
    ],
  },
  {
    title: 'Data & Statistiques',
    skills: [
      { name: 'Pandas', icon: PythonIcon },
      { name: 'NumPy', icon: PythonIcon },
      { name: 'Scikit-learn', icon: PythonIcon },
      { name: 'SQL', icon: DataIcon },
      { name: 'Tableau', icon: DataIcon },
      { name: 'Power BI', icon: DataIcon },
    ],
  },
  {
    title: 'Outils & DevOps',
    skills: [
      { name: 'Git & GitHub', icon: DevIcon },
      { name: 'Docker', icon: DevIcon },
      { name: 'Vercel', icon: DevIcon },
      { name: 'AWS', icon: DevIcon },
      { name: 'Figma', icon: DevIcon },
      { name: 'Jira', icon: CeoIcon },
    ],
  },
];

export const companiesData = [
  {
    name: 'BAT LAB',
    logo: bat_lab,
    mission: "Transformer les données brutes en informations exploitables pour les entreprises B2B.",
    description: "Notre plateforme SaaS aide les entreprises à visualiser leurs données, à identifier les tendances et à prendre des décisions stratégiques plus rapidement grâce à des tableaux de bord intuitifs et des analyses prédictives. Nous sommes une agence de développement spécialisée dans la création d'applications natives iOS et Android, en mettant l'accent sur une expérience utilisateur exceptionnelle et des performances robustes.",
    websiteUrl: 'https://bat-lab.vercel.app/',
  },
  {
    name: 'LMS Empire',
    logo: lms,
    mission: "Créer et proposer des vêtements modernes et accessibles qui valorisent l’identité africaine et le savoir-faire togolais.",
    description: "Entreprise innovante au Togo qui a lancé sa propre marque de vêtements, alliant créativité, identité culturelle et tendances actuelles pour habiller fièrement la jeunesse et le grand public. Marque de vêtements togolaise qui allie style urbain et inspiration africaine, avec des créations originales, de qualité et adaptées aux tendances actuelles. Elle soutient les artisans locaux et vise à donner une visibilité internationale à la mode togolaise.",
    websiteUrl: 'https://lms-empire.vercel.app/',
  },
];

export const projectsData = [
  {
    slug: 'dashboard-analytique',
    title: 'Dashboard Analytique SaaS',
    subtitle: 'Une plateforme pour visualiser et analyser les données de vente en temps réel.',
    category: 'Data Science',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    imageUrl: dashboard,
    description: "Développement d'une plateforme SaaS complète permettant aux entreprises de connecter leurs sources de données de vente et de générer des visualisations interactives pour un meilleur pilotage de la performance.",
    context: "Les PME manquaient d'outils abordables et faciles à utiliser pour analyser leurs données de vente. Les solutions existantes étaient soit trop complexes, soit trop chères.",
    challenge: "Le principal défi était de créer une interface utilisateur hautement interactive et performante capable de gérer de grands volumes de données sans sacrifier la vitesse ou l'intuitivité. Il fallait aussi assurer la sécurité et la partition des données entre les différents clients.",
    role: "En tant que développeur Fullstack et architecte de données, j'ai conçu le schéma de la base de données, développé l'API REST avec Node.js, et construit l'ensemble du frontend avec React et D3.js pour les graphiques personnalisés.",
    stack: [
      { name: 'React', icon: ReactIcon },
      { name: 'D3.js', icon: DataIcon },
      { name: 'Node.js', icon: NodeIcon },
      { name: 'PostgreSQL', icon: DataIcon },
      { name: 'Docker', icon: DevIcon },
    ],
    screenshots: [
      dashboard,
      site,
    //   'https://picsum.photos/seed/dash3/1200/800',
    ],
    results: [
      "Réduction de 40% du temps passé à générer des rapports pour les clients bêta.",
      "Augmentation de 15% de la prise de décision basée sur les données chez les premiers utilisateurs.",
      "Scalabilité prouvée pour gérer plus d'un million de transactions par jour.",
    ],
    // liveUrl: '#',
    // githubUrl: '#',
  },
  {
    slug: 'app-mobile-e-commerce',
    title: 'Application Mobile E-commerce',
    subtitle: 'Une application de shopping native pour une marque de mode durable.',
    category: 'Développement Mobile',
    tags: ['React Native', 'Firebase', 'Stripe'],
    imageUrl: e_commerce,
    description: "Création d'une application mobile pour iOS et Android qui offre une expérience d'achat fluide, des recommandations personnalisées et une intégration de paiement sécurisée.",
    context: "La marque souhaitait augmenter l'engagement de ses clients et offrir une expérience d'achat plus personnalisée que ce que permettait son site web mobile.",
    challenge: "L'enjeu était de synchroniser parfaitement l'état des stocks entre le site web et l'application, de mettre en place un système de recommandation de produits pertinent et de garantir une expérience de paiement sans friction.",
    role: "J'ai dirigé le développement de l'application en tant que développeur principal. J'ai géré le projet de A à Z, de la conception de l'interface sur Figma à la publication sur l'App Store et le Google Play Store.",
    stack: [
      { name: 'React Native', icon: ReactIcon },
      { name: 'Firebase', icon: DataIcon },
      { name: 'Stripe', icon: DevIcon },
      { name: 'Figma', icon: DevIcon },
    ],
    screenshots: [
      e_commerce,
      fitness,
    ],
    results: [
      "Augmentation de 25% du taux de conversion sur mobile.",
      "Note moyenne de 4.8/5 sur les stores d'applications.",
      "Le panier moyen a augmenté de 10% grâce aux recommandations.",
    ],
    // githubUrl: '#',
  },
  {
    slug: 'predictive-maintenance',
    title: 'Modèle de Maintenance Prédictive',
    subtitle: "Algorithme de machine learning pour prédire les pannes d'équipement industriel.",
    category: 'Machine Learning',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Tableau'],
    imageUrl: maintenance,
    description: "Analyse des données de capteurs IoT pour construire un modèle de classification capable de prédire les défaillances des machines avant qu'elles ne se produisent.",
    context: "Une entreprise manufacturière subissait des coûts élevés en raison d'arrêts de production imprévus. Elle avait besoin d'une solution pour anticiper les pannes.",
    challenge: "Les données étaient bruitées et déséquilibrées (peu d'exemples de pannes). Le défi consistait à nettoyer les données, à créer des caractéristiques pertinentes (feature engineering) et à choisir un modèle capable de gérer ce déséquilibre.",
    role: "En tant que Data Analyst, j'ai mené l'analyse exploratoire, préparé les données, entraîné plusieurs modèles de machine learning et sélectionné le plus performant. J'ai ensuite présenté les résultats et les recommandations à l'aide de tableaux de bord Tableau.",
    stack: [
      { name: 'Python', icon: PythonIcon },
      { name: 'Scikit-learn', icon: PythonIcon },
      { name: 'Pandas', icon: PythonIcon },
      { name: 'Tableau', icon: DataIcon },
    ],
    screenshots: [
      maintenance,
    ],
    results: [
      "Le modèle a atteint une précision de 92% dans la prédiction des pannes.",
      "Réduction estimée de 20% des coûts de maintenance.",
      "Mise en place d'un système d'alerte précoce pour les équipes de maintenance.",
    ],
  },
];
