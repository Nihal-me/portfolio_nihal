import { Code, Smartphone, Globe, Zap, Database, Activity } from 'lucide-react';

interface ServicesProps {
  darkMode?: boolean;
}

export default function Services({ darkMode }: ServicesProps = {}) {
  const services = [
    {
      icon: Globe,
      title: 'Applications Web & Dashboards',
      description: 'Création d\'applications web interactives, dashboards de monitoring et interfaces métier personnalisées.',
      features: ['Vue.js & React', 'Dashboards temps réel', 'Tableaux de bord analytiques', 'PWA & SPA']
    },
    {
      icon: Code,
      title: 'Développement Logiciel & ERP',
      description: 'Conception de solutions métier complètes : CRM, ERP, outils de gestion avec architecture microservices.',
      features: ['CRM personnalisés', 'Outils métier', 'API REST & Microservices', 'Architecture scalable']
    },
    {
      icon: Database,
      title: 'Data Science & Analyse de Données',
      description: 'Analyse de données complexes, modèles prédictifs et Business Intelligence pour optimiser vos décisions.',
      features: ['Machine Learning', 'Prédiction & Forecasting', 'Business Intelligence', 'Visualisation de données']
    },
    {
      icon: Activity,
      title: 'Maintenance Prédictive',
      description: 'Systèmes intelligents de détection d\'anomalies et prédiction de pannes pour maintenance industrielle.',
      features: ['Détection anomalies', 'Prédiction RUL', 'Monitoring temps réel', 'Alertes automatiques']
    },
    {
      icon: Zap,
      title: 'Optimisation Combinatoire',
      description: 'Résolution de problèmes complexes d\'optimisation mono et multi-critères pour vos processus métier.',
      features: ['Planification & ordonnancement', 'Algorithmes métaheuristiques', 'Analyse de performance', 'Solutions multi-objectifs']
    },
    {
      icon: Smartphone,
      title: 'DevOps & Déploiement Cloud',
      description: 'Automatisation complète des déploiements, intégration continue et infrastructure cloud.',
      features: ['CI/CD Jenkins', 'Docker & Conteneurisation', 'AWS EC2/S3', 'Monitoring & Logs']
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/30 to-blue-300/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 text-transparent bg-clip-text">
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions sur mesure pour donner vie à vos projets digitaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-600 to-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
