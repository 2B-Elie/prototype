import React from 'react';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Activity className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Toumaï Sport</span>
            </div>
            <p className="mt-4 text-gray-300">
              La plateforme numérique dédiée à la promotion et à la gestion des activités sportives au Tchad.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@toumaisport.td</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+235 66 XX XX XX</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>N'Djamena, Tchad</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Championnats</a></li>
              <li><a href="#" className="hover:text-blue-300">Diffusions</a></li>
              <li><a href="#" className="hover:text-blue-300">Forum</a></li>
              <li><a href="#" className="hover:text-blue-300">À propos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Restez informé des dernières actualités sportives
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-500">
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Toumaï Sport. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;