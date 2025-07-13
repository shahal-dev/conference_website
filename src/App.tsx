import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import TopicsPage from './pages/TopicsPage';
import RegistrationPage from './pages/RegistrationPage';
import SpeakersPage from './pages/SpeakersPage';
import AuthorGuidelinesPage from './pages/AuthorGuidelinesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'timeline':
        return <TimelinePage />;
      case 'topics':
        return <TopicsPage />;
      case 'registration':
        return <RegistrationPage />;
      case 'speakers':
        return <SpeakersPage />;
      case 'author-guidelines':
        return <AuthorGuidelinesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;