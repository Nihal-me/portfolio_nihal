import { Code, Database, Globe, Server, Brain, BarChart3 } from 'lucide-react';

interface SkillsProps {
  darkMode?: boolean;
}

export default function Skills({ darkMode }: SkillsProps = {}) {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'Vue.js', 'Blazor', 'Bootstrap', 'TailwindCSS', 'Three.js', 'HTML/CSS'],
      color: 'from-blue-500 to-gray-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js (Express)', 'Django', 'Spring Boot', '.NET', 'Java EE', 'API REST', 'Python'],
      color: 'from-gray-500 to-blue-500'
    },
    {
      title: 'Bases de Données & Cloud',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'AWS (EC2/S3)', 'Hibernate', 'JDBC', 'Entity Framework'],
      color: 'from-blue-500 to-blue-500'
    },
    {
      title: 'IA & Apprentissage Automatique',
      icon: Brain,
      skills: ['LSTM', 'Isolation Forest', 'Prophet', 'ARIMA', 'Scikit-learn', 'TensorFlow', 'IA Générative', 'LLM', 'NLP', 'Traitement d\'Images', 'Traitement Audio', 'Détection Anomalies', 'Maintenance Prédictive', 'Réseaux de Neurones'],
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Data Science & BI',
      icon: BarChart3,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Recharts', 'D3.js', 'Business Intelligence', 'Visualisation de Données'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps & Outils',
      icon: Code,
      skills: ['Jenkins CI/CD', 'Git/GitHub', 'Docker', 'Agile/Scrum', 'Jira', 'VS Code'],
      color: 'from-gray-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-gradient-to-br from-indigo-50/50 via-blue-50/40 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-300/30 to-indigo-300/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 text-transparent bg-clip-text">
            Compétences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies maîtrisées pour créer des solutions web complètes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
