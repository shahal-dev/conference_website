import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Conditional Content Rendering */}
      {currentPage === 'timeline' ? <TimelinePage /> : <HomePage setCurrentPage={setCurrentPage} />}

      <Footer />
    </div>
  );
}

export default App;