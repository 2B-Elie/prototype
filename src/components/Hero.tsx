import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-blue-600 text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80"
          alt="Sport background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Bienvenue sur Toumaï Sport
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            La plateforme numérique dédiée à la promotion et à la gestion des activités sportives au Tchad.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
              <Play className="h-5 w-5 mr-2" />
              Voir les matchs en direct
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400">
              Découvrir les championnats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;