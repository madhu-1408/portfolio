import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import School from './components/School';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <School/>
                <Work/>
                <Skills/>
                <Projects />
                <Contact />

            </main>
          <Footer/>
        </div>
    );
}

export default App;
