import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode?: boolean;
}

export default function Hero({ darkMode }: HeroProps = {}) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 to-indigo-400/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/20 to-blue-300/30 dark:bg-gray-800/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-200/40 to-indigo-200/40 dark:from-blue-900/10 dark:to-gray-800/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-300 dark:border-gray-700 shadow-2xl shadow-blue-400/40 dark:shadow-gray-900/50 hover:scale-105 transition-transform duration-300">
              <img
                src="/images/nihal-profile.png"
                alt="Nihal Bouchlaghmi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-4">
            Nihal Bouchlaghmi
          </h1>

          {/* Title */}
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold mb-6">
            Ingénieure Logicielle — Full Stack · Data & IA · Optimisation
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Développement web (Vue.js, Node.js) • Machine Learning & Prédiction (ARIMA/Prophet) • Maintenance prédictive ferroviaire • Optimisation combinatoire • Cloud AWS
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-6">
            <a
              href="https://github.com/Nihal-me?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nihal-bouchlaghmi-20b6a319a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nihalbouchlaghmi2001@gmail.com"
              className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-300/50 hover:shadow-xl hover:shadow-blue-400/60 hover:-translate-y-0.5"
            >
              Me contacter
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-700 dark:text-white border-2 border-blue-300 dark:border-gray-700 hover:border-blue-600 hover:bg-blue-50 dark:hover:border-blue-700 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Voir mes projets
            </button>
            <a
              href="images/CV_Nihal_Bouchlaghmi.pdf"
              download="CV_Nihal_Bouchlaghmi.pdf"
              className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
