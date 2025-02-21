import React, { useState } from 'react';
import { Menu, Search, Bell } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">Pixora</a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden ml-4">
            <Menu size={24} />
          </button>
        </div>

        <div className={`lg:flex items-center ${isMenuOpen ? 'block' : 'hidden'} space-x-6`}>
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Explore</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <Search size={20} className="text-gray-600" />
          <Bell size={20} className="text-gray-600" />
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
           </button>
        </div>
        
      </div>
    </nav>
  );
};

const HeroSection = () => {
    return (
        <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
             <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-2'>Welcome to Pixora</h1>
             <p className='text-lg md:text-xl text-gray-600'>Discover and share amazing photos.</p>
                
          </div>
            
          <div className='md:w-1/2'>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/teenage-girl-doing-namaste-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--cute-welcome-gratitude-pack-people-illustrations-6581909.png?f=webp"
                alt="Welcome"
                 className='w-full'
            />
          </div>
        </div>
    )
}


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;