import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;