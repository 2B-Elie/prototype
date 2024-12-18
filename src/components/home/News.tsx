import React from 'react';
import { Calendar } from 'lucide-react';

const News = () => {
  const news = [
    {
      id: 1,
      title: "Finale de la Coupe du Tchad 2024",
      excerpt: "La finale de la Coupe du Tchad se jouera ce weekend au stade Idriss Mahamat Ouya...",
      date: "2024-03-18",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80",
      category: "Football"
    },
    {
      id: 2,
      title: "Championnat National de Basketball",
      excerpt: "Le championnat national de basketball débute ce mois avec 12 équipes en compétition...",
      date: "2024-03-17",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80",
      category: "Basketball"
    },
    {
      id: 3,
      title: "Tournoi International de Volleyball",
      excerpt: "Le Tchad accueillera le prochain tournoi international de volleyball en avril...",
      date: "2024-03-16",
      image: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?auto=format&fit=crop&q=80",
      category: "Volleyball"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Actualités Sportives</h2>
          <p className="mt-4 text-xl text-gray-600">
            Les dernières nouvelles du sport tchadien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString()}
                  </time>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="text-gray-900 hover:text-blue-600">
                    {article.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-500 font-medium inline-flex items-center"
                >
                  Lire la suite
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;