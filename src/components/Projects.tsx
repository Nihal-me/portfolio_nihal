import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface ProjectsProps {
  darkMode?: boolean;
}

export default function Projects({ darkMode }: ProjectsProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const projects = [
    {
      title: 'CNBD - Partenaire IT de confiance',
      description: 'Site web institutionnel B2B pour entreprise française générant plus de 80 millions FDJ de chiffre d\'affaires. Plateforme haute performance pour une croissance soutenue.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'Performance'],
      category: 'Développement Web - Mobile',
      link: 'https://cnbd.fr/'
    },
    {
      title: 'Détection Anomalies - Roulements Ferroviaires',
      description: 'Dashboard de monitoring en temps réel avec détection d\'anomalies, prédiction RUL et alertes automatiques pour maintenance prédictive ferroviaire.',
      image: '/images/images1.jpg',
      tags: ['Python', 'Machine Learning', 'LSTM', 'Isolation Forest'],
      category: 'Ferroviaire'
    },
    {
      title: 'Analyse Performance Réseau Ferroviaire',
      description: 'Outil Business Intelligence pour analyser la ponctualité et fiabilité des lignes ferroviaires. Dashboard interactif avec KPIs opérationnels, analyse temporelle des retards et identification des causes (météo, incidents, travaux).',
      image: '/images/plus_train.webp',
      tags: ['React', 'Recharts', 'Data Analytics', 'Tailwind CSS'],
      category: 'Ferroviaire'
    },
    {
      title: 'Facility Location Problem - Optimisation des Implantations',
      description: 'Système intelligent qui identifie les meilleurs emplacements pour habiter en fonction des commodités souhaitées (écoles, hôpitaux, transports). Utilise la programmation linéaire et des métaheuristiques pour minimiser les distances et coûts avec données OpenStreetMap.',
      image: '/images/img1.png',
      tags: ['Python', 'Linear Programming', 'Geopy', 'OSM/Overpass API', 'Hill Climber', 'Greedy Algorithm'],
      category: 'Optimisation'
    },
    {
      title: 'Portfolio Optimizer - Optimisation Multi-Objectif d\'Investissement',
      description: 'Application d\'optimisation de portefeuille financier basée sur la théorie moderne de Markowitz. Équilibre rendement attendu, risque et diversification avec interface interactive et visualisations temps réel (graphiques radar, frontière efficiente, allocation dynamique). Calcul du ratio de Sharpe et diversification sectorielle automatique.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Recharts', 'Markowitz', 'Optimisation Multi-Objectif', 'Finance'],
      category: 'Optimisation'
    },
    {
      title: 'CRM Gestion Commerciale',
      description: 'Solution CRM complète pour la gestion clients, rendez-vous et actions commerciales. Centralisation des données, automatisation des processus, tableaux de bord de pilotage et conformité RGPD. Architecture MVC avec reporting avancé.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Django', 'PostgreSQL', 'RGPD'],
      category: 'CRM'
    },
    {
      title: 'Gestion d\'Interventions',
      description: 'Application Web pour créer, suivre et clôturer des interventions avec CRUD complet. Interface moderne avec filtres avancés, système de priorisation et historique détaillé des interventions. Développée avec Blazor .NET et Entity Framework Core.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Blazor', '.NET', 'Entity Framework', 'SQL Server'],
      category: 'CRM'
    },
    {
      title: 'Simulation Multi-Agent "Hide & Seek"',
      description: 'Système multi-agent en C++ dans un labyrinthe 3D. Implémentation d\'algorithmes de détection et poursuite entre agents avec visualisation 3D interactive via Blender. Projet universitaire ULCO explorant l\'intelligence artificielle distribuée.',
      image: '/images/hideandseek.webp',
      tags: ['C++', 'Multi-Agent', 'Blender', 'IA', '3D'],
      category: 'IA & Simulation'
    },
    {
      title: 'Optimisation d\'Horaires Ferroviaires - Algorithme Génétique',
      description: 'Système intelligent d\'optimisation des horaires de trains utilisant un algorithme génétique pour résoudre un problème multi-objectif : minimiser les conflits de voies, maximiser la satisfaction voyageurs et optimiser l\'efficacité énergétique. Réduction de 83% des conflits, +125% de satisfaction passagers, convergence en ~200 générations.',
      image: '/images/horaire.jpg',
      tags: ['React', 'Algorithme Génétique', 'Recharts', 'Optimisation Multi-Objectif', 'Métaheuristiques'],
      category: 'IA & Simulation'
    },
    {
      title: 'Fitness Tracker Mobile',
      description: 'Application mobile de suivi sportif avec GPS, statistiques et programmes d\'entraînement.',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      category: 'Développement Web - Mobile'
    },
    {
      title: 'Restaurant Booking',
      description: 'Système de réservation en ligne pour restaurants avec gestion des tables et menu digital.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Twilio'],
      category: 'Développement Web - Mobile'
    },

    {
      title: 'Real Estate Portal',
      description: 'Portail immobilier avec recherche avancée, visite virtuelle 360° et système de messagerie.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'GraphQL', 'PostgreSQL', 'Mapbox'],
      category: 'Immobilier'
    }
  ];

  const categories = ['Tous', 'Ferroviaire', 'Optimisation', 'Développement Web - Mobile', 'CRM', 'IA & Simulation', 'Immobilier'];

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 relative bg-gradient-to-br from-white via-indigo-50/50 to-blue-50/60 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/30 to-indigo-300/25 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 text-transparent bg-clip-text">
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Une sélection de projets qui illustrent mon expertise et ma créativité
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-500 hover:to-gray-500 text-white rounded-lg transition-all duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visiter le site
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
