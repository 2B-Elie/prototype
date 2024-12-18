import React from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';

const LiveMatches = () => {
  const matches = [
    {
      id: 1,
      team1: 'Renaissance FC',
      team2: 'Gazelle FC',
      time: '15:00',
      date: '2024-03-20',
      location: 'Stade Idriss Mahamat Ouya',
      sport: 'Football',
      isLive: true,
    },
    {
      id: 2,
      team1: 'AS CotonTchad',
      team2: 'Elect-Sport FC',
      time: '17:30',
      date: '2024-03-20',
      location: 'Stade Idriss Mahamat Ouya',
      sport: 'Football',
      isLive: false,
    },
    {
      id: 3,
      team1: 'DGSSIE Basket',
      team2: 'Toumaï BC',
      time: '16:00',
      date: '2024-03-21',
      location: 'Palais des Sports',
      sport: 'Basketball',
      isLive: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Matchs en Direct</h2>
          <p className="mt-4 text-xl text-gray-600">
            Suivez les rencontres sportives en temps réel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">{match.sport}</span>
                  {match.isLive && (
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
                      En direct
                    </span>
                  )}
                </div>

                <div className="text-center mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{match.team1}</h3>
                    </div>
                    <div className="px-4">
                      <span className="text-2xl font-bold">VS</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{match.team2}</h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(match.date).toLocaleDateString()} - {match.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{match.location}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  {match.isLive ? 'Regarder maintenant' : 'Rappel'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMatches;