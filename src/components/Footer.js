import React, { useEffect, useState } from 'react'; 
import './Footer.css'; // Link to a CSS file for styling

const Footer = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                // User is at the top of the page
                setIsTop(true);
            } else {
                // User has scrolled down
                setIsTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer ${isTop ? 'footer-top' : 'footer-scrolled'}`}>
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://drive.google.com/file/d/1M3RUmykp-V4YtGrSdkwdcXgdE2v82LMC/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                    <a href="https://www.linkedin.com/in/madhavi-palutla/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/madhu-1408" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:palutlamadhavi@gmail.com">Mail</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
