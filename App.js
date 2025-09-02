import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;