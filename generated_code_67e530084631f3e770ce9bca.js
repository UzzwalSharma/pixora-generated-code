import React, { useState } from 'react';
import { Phone, MapPin, Mail, Link as LinkIcon, Cake, User, Plus } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center p-6 border-b border-gray-200 sm:flex-row sm:items-start">
      <img
        src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        alt="User Avatar"
        className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 bg-gray-200"
      />
      <div className="flex-grow text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-800">Andrés Correa</h1>
        <p className="text-sm text-gray-500 mb-3">Product Manager</p>
        <div className="flex justify-center sm:justify-start space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center">
            <Plus size={16} className="mr-1" />
            Follow
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutTabContent = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Phone size={18} className="mr-3 text-gray-400 flex-shrink-0" />
            <span className="text-sm">Phone N.</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-3 text-gray-400 flex-shrink-0" />
            <span className="text-sm">Address</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail size={18} className="mr-3 text-gray-400 flex-shrink-0" />
            <span className="text-sm">Email</span>
          </div>
          <div className="flex items-center text-gray-600">
            <LinkIcon size={18} className="mr-3 text-gray-400 flex-shrink-0" />
            <span className="text-sm">Website</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Basic Information</h3>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Cake size={18} className="mr-3 text-gray-400 flex-shrink-0" />
            <span className="text-sm">Birthday</span>
          </div>
          <div className="flex items-center text-gray-600">
            <User size={18} className="mr-3 text-gray-400 flex-shrink-0" />
            <span className="text-sm">Gender</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["About", "Skills & Endorsement", "Recommendations"];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-6 px-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-1 text-sm font-medium whitespace-nowrap ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

const UserProfileCard = () => {
  const [activeTab, setActiveTab] = useState("About");

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return <AboutTabContent />;
      case "Skills & Endorsement":
        return <div className="p-6 text-gray-500 text-sm">Skills & Endorsement content goes here.</div>;
      case "Recommendations":
        return <div className="p-6 text-gray-500 text-sm">Recommendations content goes here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
      <ProfileHeader />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
};

// If this is the main App component, export it as default:
// export default UserProfileCard;

// Since the request asks for the main component (App) to be exported correctly,
// Let's rename UserProfileCard to App and export it.
const App = () => {
    return <UserProfileCard />;
}

export default App;