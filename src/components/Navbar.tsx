import React from 'react';
import { Menu, Activity, Users, Trophy, PlayCircle, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Toumaï Sport</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-blue-700">
              <Trophy className="h-5 w-5 mr-1" />
              Championnats
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-blue-700">
              <PlayCircle className="h-5 w-5 mr-1" />
              Diffusions
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-blue-700">
              <Users className="h-5 w-5 mr-1" />
              Forum
            </a>
            <div className="flex items-center space-x-2 ml-4">
              <button className="flex items-center px-4 py-2 rounded-md bg-white text-blue-600 hover:bg-gray-100">
                <LogIn className="h-5 w-5 mr-1" />
                Connexion
              </button>
              <button className="flex items-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-400">
                <UserPlus className="h-5 w-5 mr-1" />
                Inscription
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-blue-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;