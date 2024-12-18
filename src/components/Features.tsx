import React from 'react';
import { Trophy, Users, PlayCircle, Calendar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Championnats',
      description: 'Organisez et participez à des championnats dans diverses disciplines sportives.',
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Rejoignez une communauté passionnée de sport et échangez sur le forum.',
    },
    {
      icon: PlayCircle,
      title: 'Diffusion en Direct',
      description: 'Regardez les matchs en direct et ne manquez aucun moment important.',
    },
    {
      icon: Calendar,
      title: 'Événements',
      description: 'Restez informé des derniers événements sportifs au Tchad.',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Fonctionnalités Principales
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez tout ce que Toumaï Sport peut vous offrir
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;