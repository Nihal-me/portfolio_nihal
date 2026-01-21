import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode?: boolean;
}

export default function Contact({ darkMode }: ContactProps = {}) {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 text-transparent bg-clip-text">
            Contact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discutons de votre projet et donnons vie à vos idées
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 border border-gray-100 dark:border-gray-700 shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Restons connectés</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-12 leading-relaxed text-center max-w-2xl mx-auto">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
              Je suis toujours ravie d'échanger sur de nouvelles opportunités.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:nihalbouchlaghmi2001@gmail.com"
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <span className="font-medium text-sm break-all">nihalbouchlaghmi2001@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+33754079699"
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Téléphone</p>
                  <span className="font-medium">+33 7 54 07 96 99</span>
                </div>
              </a>

              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-600 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Localisation</p>
                  <span className="font-medium">Valenciennes, France</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">Retrouvez-moi sur :</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/nihal-bouchlaghmi-20b6a319a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/Nihal-me?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
