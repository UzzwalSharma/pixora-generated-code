import React, { useState } from 'react';
import {
  Menu,
  Search,
  Settings,
  Bell,
  LayoutGrid,
  List,
  BarChart2,
  ClipboardList,
  Users,
  FileText,
  LogOut,
  PlusCircle,
  ChevronDown,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-xl font-bold">UI Transformer</h1>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-2 px-4">
          <a
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <LayoutGrid className="mr-2 h-5 w-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <List className="mr-2 h-5 w-5" />
            Projects
          </a>
          <a
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <BarChart2 className="mr-2 h-5 w-5" />
            Analytics
          </a>
          <a
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <ClipboardList className="mr-2 h-5 w-5" />
            Tasks
          </a>
          <a
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <Users className="mr-2 h-5 w-5" />
            Team
          </a>
          <a
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <FileText className="mr-2 h-5 w-5" />
            Documents
          </a>
        </nav>
      </div>
      <div className="border-t border-gray-700 p-4">
        <a
          href="#"
          className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </a>
      </div>
    </div>
  );
};

const Topbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
  return (
    <div className="sticky top-0 flex h-16 w-full items-center justify-between bg-white px-4 shadow-md">
      <div className="flex items-center">
        <button className="text-gray-500 focus:outline-none lg:hidden"
          onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-500" />
          </span>
          <input
            className="w-32 rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-64"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="relative mx-4 text-gray-500 focus:outline-none">
          <Settings className="h-6 w-6" />
        </button>
        <button className="relative mx-4 text-gray-500 focus:outline-none">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>
        </button>
        <div className="relative mx-4">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-sm focus:outline-none">
            JD
          </button>
        </div>
      </div>
       {isMenuOpen && (
                <div className="absolute top-16 left-0 z-20 w-64 rounded-md bg-gray-800 shadow-lg lg:hidden">
                   <Sidebar />
                </div>
            )}
    </div>
  );
};

const ProjectCard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Project Title</h2>
        <div className="relative">
          <button
            className="flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            Actions
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 top-8 mt-2 w-48 rounded-md bg-white shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Edit
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Delete
              </a>
            </div>
          )}
        </div>
      </div>
      <p className="mt-2 text-gray-500">Description of the project.</p>
      <div className="mt-4 flex items-center">
        <img
          src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
          alt="Project"
          className="h-10 w-10 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Assigned to</p>
          <p className="text-sm text-gray-500">John Doe</p>
        </div>
      </div>
    </div>
  );
};

const StatusCard = ({ status }) => {
  let icon, color, text;

  switch (status) {
    case 'Completed':
      icon = <CheckCircle />;
      color = 'text-green-500';
      text = 'Completed';
      break;
    case 'In Progress':
      icon = <AlertTriangle />;
      color = 'text-yellow-500';
      text = 'In Progress';
      break;
    case 'Failed':
      icon = <XCircle />;
      color = 'text-red-500';
      text = 'Failed';
      break;
    default:
      icon = <CheckCircle />;
      color = 'text-gray-500';
      text = 'Unknown';
  }

  return (
    <div className="flex items-center rounded-md bg-gray-100 px-4 py-2">
      <span className={`mr-2 ${color}`}>{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

const MainContent = () => {
    return (
      <div className="flex-1 p-4"   style={{
        backgroundImage:
          'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <button className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            <PlusCircle className="mr-2 h-5 w-5" />
            Add New
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="mt-6">
          <h2 className="mb-4 text-xl font-semibold text-white">Project Status</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatusCard status="Completed" />
            <StatusCard status="In Progress" />
            <StatusCard status="Failed" />
            <StatusCard status="Completed" />
          </div>
        </div>
      </div>
    );
  };


const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;