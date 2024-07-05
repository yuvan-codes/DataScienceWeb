import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Home from './Home';
import Subpage from './Subpage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subpage" element={<Subpage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
