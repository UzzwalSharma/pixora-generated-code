import React from 'react';
import {
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <span className="text-xl font-bold">Pixora</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            How It Works
          </a>
          <a href="#" className="hover:text-blue-500">
            Features
          </a>
          <a href="#" className="hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-500">
            Get Started
          </a>
          <a href="#" className="hover:text-blue-500">
            Support
          </a>
        </div>
        <div className="flex items-center">
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Now
        </a>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-gray-900 bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="w-full md:w-1/2">
           <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/teenage-girl-doing-namaste-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--cute-welcome-gratitude-pack-people-illustrations-6581909.png?f=webp"
                alt="3D Girl Doing Namaste"
                className="w-full"
              />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to Pixora - Sketch. Convert. Deploy.
          </h1>
          <a
            href="#"
            className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Start Designing
          </a>
        </div>
     
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        alt={title}
        className="w-10 h-10 mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'Instant Conversion',
      description: 'Convert your sketches to code instantly.',
    },
    {
      title: 'AI-Powered',
      description: 'Leverage the power of AI for accurate conversions.',
    },
    {
      title: 'Supports Multiple Formats',
      description: 'Supports various sketch and code formats.',
    },
  ];

  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Why Pixora?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

const HowItWorksCard = ({ step, title, description }) => {
  return (
    <div
      className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-md border border-gray-600"
      style={{ boxShadow: '0 0 10px 2px rgba(0, 255, 255, 0.5)' }}
    >
      <div className="text-2xl font-bold text-white mb-2">{step}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      step: '1',
      title: 'Sketch',
      description: 'Draw your design on paper or digitally.',
    },
    {
      step: '2',
      title: 'Upload',
      description: 'Upload your sketch to Pixora.',
    },
    {
      step: '3',
      title: 'Convert',
      description: 'Convert your sketch to code instantly.',
    },
    {
      step: '4',
      title: 'Deploy',
      description: 'Deploy your code with a single click.',
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        How Pixora Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((stepInfo, index) => (
          <HowItWorksCard
            key={index}
            step={stepInfo.step}
            title={stepInfo.title}
            description={stepInfo.description}
          />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-500">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500">
            <Facebook />
          </a>
          <a href="#" className="hover:text-blue-500">
            <Twitter />
          </a>
          <a href="#" className="hover:text-blue-500">
            <Linkedin />
          </a>
          <a href="#" className="hover:text-blue-500">
            <Github />
          </a>
          <a href="#" className="hover:text-blue-500">
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
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default App;