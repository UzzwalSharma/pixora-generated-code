import React from 'react';
import { Menu, Book, GraduationCap, Users, MessageSquare, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-xl text-indigo-600">School Name</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">About Us</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Courses</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Admissions</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
        <div className="hidden md:block">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Apply Now
          </button>
        </div>
        <div className="md:hidden">
          <Menu className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Our School</h1>
          <p className="text-xl text-gray-600 mb-8">
            Providing quality education and a nurturing environment for students to thrive.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="School Hero" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:order-2">
          <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="About School" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:order-1 md:pr-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-8">
            Our school is dedicated to fostering a love of learning and preparing students for future success. We offer a wide range of programs and extracurricular activities to enrich the student experience.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Small class sizes for personalized attention</li>
            <li>Experienced and dedicated faculty</li>
            <li>Modern facilities and resources</li>
            <li>Supportive and inclusive community</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Book className="h-8 w-8 text-indigo-600 mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full text-sm">
        Learn More
      </button>
    </div>
  );
};

const CoursesSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            title="Mathematics"
            description="Comprehensive mathematics courses from basic arithmetic to advanced calculus."
          />
          <CourseCard
            title="Science"
            description="Explore the wonders of science with our biology, chemistry, and physics programs."
          />
          <CourseCard
            title="Literature"
            description="Delve into classic and contemporary literature, enhancing critical thinking and writing skills."
          />
          <CourseCard
            title="History"
            description="Understand the past to shape the future with our engaging history courses."
          />
          <CourseCard
            title="Computer Science"
            description="Prepare for the digital age with our cutting-edge computer science curriculum."
          />
          <CourseCard
            title="Arts"
            description="Unleash your creativity with our diverse arts programs, including visual and performing arts."
          />
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon, number, description }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">{icon}</div>
      <p className="text-4xl font-bold text-indigo-600 mt-2">{number}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCard icon={<GraduationCap className="h-12 w-12 text-indigo-600" />} number="1500+" description="Students" />
          <StatsCard icon={<Users className="h-12 w-12 text-indigo-600" />} number="100+" description="Faculty Members" />
          <StatsCard icon={<Book className="h-12 w-12 text-indigo-600" />} number="20+" description="Courses Offered" />
          <StatsCard icon={<GraduationCap className="h-12 w-12 text-indigo-600" />} number="98%" description="Graduation Rate" />
        </div>
      </div>
    </section>
  );
};


const TestimonialCard = ({ text, author, designation }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <MessageSquare className="h-6 w-6 text-gray-400 mb-2" />
      <p className="text-gray-700 italic mb-4">"{text}"</p>
      <div className="flex items-center">
        <img
          src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
          alt={author}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            text="This school has been an incredible journey for my child. The teachers are supportive and the curriculum is challenging."
            author="Sarah Johnson"
            designation="Parent"
          />
          <TestimonialCard
            text="I love the community at this school. I've made great friends and learned so much both inside and outside the classroom."
            author="Michael Davis"
            designation="Student"
          />
          <TestimonialCard
            text="As a teacher here, I'm inspired by the students' enthusiasm and the school's commitment to excellence. It's a great place to work."
            author="Emily Wilson"
            designation="Teacher"
          />
        </div>
      </div>
    </section>
  );
};


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} School Name. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-indigo-400"><Facebook className="h-6 w-6" /></a>
          <a href="#" className="hover:text-indigo-400"><Twitter className="h-6 w-6" /></a>
          <a href="#" className="hover:text-indigo-400"><Instagram className="h-6 w-6" /></a>
          <a href="#" className="hover:text-indigo-400"><Youtube className="h-6 w-6" /></a>
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
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default App;