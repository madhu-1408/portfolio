import React from 'react';
import './About.css'; // Make sure to create and link this CSS file


const About = () => {
    return (
        <>
            <section id="about" className="about-section">
                <div className="about-content">
                    <img src="img.jpg" alt="About Me" className="profile-image" />
                    <div className="text-content">
                        <h5>
                            Hi, I'm Madhavi Palutla <br />
                            Alumna of UTA and GITAM<span>👩‍💻</span>
                        </h5>
                        <p>
                            Fond of good music <span>🎵</span>, 
                            tasty food <span>🍔</span>, and 
                            serene beaches <span >🏖️</span>
                        </p>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default About;
