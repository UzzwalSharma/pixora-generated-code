import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl text-gray-800">Logo</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="/services" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          <div className="relative">
            <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
              Dropdown <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* Dropdown content (hidden for now) */}
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <a href="/" className="block py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="/about" className="block py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="/services" className="block py-2 text-gray-700 hover:text-gray-900">Services</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex flex-col space-y-2 mt-4">
            <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
              Dropdown <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="flex items-center space-x-4 mt-2">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                <Heart className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Website</h1>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Hero Image" className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Card Image" className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        View Details
      </button>
    </div>
  );
};

const CardsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Service 1" description="Description for service 1." />
          <Card title="Service 2" description="Description for service 2." />
          <Card title="Service 3" description="Description for service 3." />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-300 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default App;