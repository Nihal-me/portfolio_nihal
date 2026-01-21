import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  darkMode?: boolean;
}

export default function Experience({ darkMode }: ExperienceProps = {}) {
  const experiences = [
    {
      company: 'IRT - Railenium',
      position: 'Développeuse Web Full Stack',
      period: 'Mars 2024 - Aujourd\'hui',
      description: 'Développement d\'une application web d\'aide à la décision pour le projet TELLi, visant à optimiser les lignes ferroviaires à desserte fine du territoire (LDFT).',
      achievements: [
        'Front-end Vue.js + TailwindCSS + Bootstrap pour interface moderne et ergonomique',
        'Back-end Node.js (Express.js) avec API REST et base de données MySQL',
        'Développement de modèles ML (ARIMA, Prophet) pour prédiction de fréquentation',
        'Simulation Monte Carlo et optimisation multi-critères des scénarios',
        'Déploiement AWS (EC2, S3) avec pipeline CI/CD via Jenkins'
      ],
      type: 'job',
      color: 'violet'
    },
    {
      company: 'VALTRONIC',
      position: 'Développeuse d\'applications',
      period: 'Avril 2021 - Septembre 2021',
      description: 'Conception et développement d\'une application desktop en Java pour centraliser les informations de tests de cartes électroniques et prévenir les défauts qualité.',
      achievements: [
        'Application desktop Java pour gestion qualité production',
        'Centralisation des données de tests électroniques',
        'Prévention des défauts qualité en production'
      ],
      type: 'job',
      color: 'purple'
    }
  ];

  const formations = [
    {
      school: 'Université du Littoral Côte d\'Opale - Calais, France',
      degree: 'Master Web et Science de Données',
      period: '2022 - 2024',
      description: 'Formation avancée en développement web, mobile et data science. Méthodologies agiles et bonnes pratiques de développement.',
      achievements: [
        'Développement Web & Mobile (Android Studio)',
        'Big Data & IA Générative',
        'Deep Learning & Réseaux de Neurones',
        'Machine Learning & analyse de séries temporelles',
        'Optimisation combinatoire (monocritère & multicritère)',
        'Méthodologies Agile (Scrum), TDD, BDD',
        'Tests automatisés (Cypress, Selenium)'
      ]
    },
    {
      school: 'Université du Littoral Côte d\'Opale - Calais, France',
      degree: 'Licence Sciences et Technologies',
      period: '2021 - 2022',
      description: 'Licence Sciences Pour l\'Ingénieur spécialité Informatique. Bases solides en programmation et systèmes.',
      achievements: [
        'Programmation orientée objet avancée',
        'Algorithmes et structures de données',
        'Bases de données et systèmes d\'information'
      ]
    },
    {
      school: 'Faculté des Sciences et Techniques - Settat, Maroc',
      degree: 'Licence Informatique',
      period: '2020 - 2021',
      description: 'Licence en Informatique avec formation en développement logiciel et systèmes d\'information.',
      achievements: [
        'Développement logiciel',
        'Systèmes d\'information',
        'Programmation et algorithmique'
      ]
    },
    {
      school: 'Faculté des Sciences et Techniques - Settat, Maroc',
      degree: 'DEUST Mathématiques, Physique, Informatique',
      period: '2018 - 2020',
      description: 'Formation pluridisciplinaire en mathématiques, physique et informatique à la FSTS Settat.',
      achievements: [
        'Mathématiques : Analyse, Séries de Fourier',
        'Physique : Électromagnétisme, Nucléaire, Mécanique (point & solide)',
        'Informatique : C, Python, Bases de données relationnelles SQL'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        {/* Expériences Professionnelles */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 text-transparent bg-clip-text">
              Expériences Professionnelles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Parcours professionnel en développement web et data science
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-gray-200 to-blue-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${idx * 150}ms`,
                    opacity: 0
                  }}
                >
                  {/* Content */}
                  <div className="md:w-1/2 flex flex-col">
                    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                      idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${exp.color}-600 to-gray-600 flex items-center justify-center`}>
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Réalisations clés :</p>
                        {exp.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-gray-600 border-4 border-white shadow-lg z-10"></div>

                  {/* Empty space for timeline */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formation */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 text-transparent bg-clip-text">
              Formations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Parcours académique en informatique et data science
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-indigo-200 to-blue-200"></div>

            <div className="space-y-12">
              {formations.map((formation, idx) => (
                <div
                  key={formation.school}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${idx * 150}ms`,
                    opacity: 0
                  }}
                >
                  {/* Content */}
                  <div className="md:w-1/2 flex flex-col">
                    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                      idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center`}>
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{formation.degree}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold">{formation.school}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{formation.period}</span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {formation.description}
                      </p>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Compétences acquises :</p>
                        {formation.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 border-4 border-white shadow-lg z-10"></div>

                  {/* Empty space for timeline */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
