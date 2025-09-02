import React from 'react';
import { Navbar, Header, Footer, MainContent } from './components';

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