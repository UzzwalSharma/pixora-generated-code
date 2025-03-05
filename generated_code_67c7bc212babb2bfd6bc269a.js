import React, { useState } from 'react';
import { Menu, X, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Pixora</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 rounded text-gray-200 hover:text-white hover:bg-gray-700"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#home"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Pricing
            </a>
            <a
              href="#get-started"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Get Started
            </a>
            <a
              href="#support"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
            >
              Support
            </a>
          </div>
          <div>
            <a
              href="#start-now"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
    return (
        <section id="home" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Welcome to Pixora - Sketch. Convert. Deploy.
                </h1>
                <a
                href="#start-designing"
                className='inline-block text-sm px-8 py-3 leading-none border rounded-full text-white border-green-500 bg-green-500 hover:border-green-600 hover:bg-green-600 mt-4 lg:mt-0'
              >
                  Start Designing
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/teenage-girl-doing-namaste-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--cute-welcome-gratitude-pack-people-illustrations-6581909.png?f=webp" alt="3D Girl Doing Namaste" className="w-full" />
            </div>

          </div>
        </section>
    );
}



const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 w-64 hover:shadow-lg transition-shadow duration-300">
      <img src='https://www.svgrepo.com/show/508699/landscape-placeholder.svg' alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Pixora?</h2>
        <div className="flex flex-wrap justify-center">
          <FeatureCard
            title="Instant Conversion"
            description="Convert your sketches to code instantly."
          />
          <FeatureCard
            title="AI-Powered"
            description="Leverage AI for accurate conversions."
          />
          <FeatureCard
            title="Supports Multiple Formats"
            description="Works with various sketch formats."
          />
        </div>
      </div>
    </section>
  );
};

const HowItWorksCard = ({ title, description, step }) => (
    <div className="bg-gray-100 bg-opacity-20 rounded-lg p-6 mb-8 w-full md:w-1/4 shadow-md border-2 border-opacity-50 border-green-500">
      <div className="text-3xl font-bold text-green-500 mb-3">{step}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);



const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className=" bg-gray-900 text-white py-16  ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How Pixora Works</h2>
        <div className='flex md:flex-row flex-col justify-between gap-7 px-4'>

          <HowItWorksCard step="1" title="Sketch" description="Create your design sketches." />
          <HowItWorksCard step="2" title="Upload" description="Upload your sketches to Pixora." />
           <HowItWorksCard step="3" title="Convert" description="Convert sketches to code instantly."/>
               <HowItWorksCard step="4" title="Deploy" description="Deploy your project easily." />

        </div>
        </div>

    
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <Twitter />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
            <Linkedin />
          </a>
          <a href="https://github.com" className="text-gray-400 hover:text-white">
            <Github />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <FeaturesSection />
        <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default App;