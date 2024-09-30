import React, { useState } from 'react';
import './School.css';

const School = () => {
    const [expanded, setExpanded] = useState({ uta: false, gitam: false });

    const toggleExpand = (school) => {
        setExpanded((prevState) => ({
            ...prevState,
            [school]: !prevState[school],
        }));
    };

    return (
        <section id="school" className="school-section">
            <h1 className="section-title"><strong>Education</strong></h1>
            
            {/* UTA Section */}
            <div 
                className={`school-item ${expanded.uta ? 'expanded' : ''}`} 
                onClick={() => toggleExpand('uta')}
            >
                <div className="school-header">
                    <div className="school-info">
                        <h2 className="school-name"> <img src="./gradcap.png" alt="Graduation Cap" style={{ width: '50px', height: '50px',  borderRadius:'50%' }} />
                            The University of Texas at Arlington
                           
                        </h2>
                        <h3 className="degree-info">
                            Master of Science in Computer Science | CGPA: 3.7/4<br></br>
                            <span className="date">Aug. 2022 – May. 2024</span>
                        </h3>
                        <p className="location">Arlington, TX</p>
                    </div>
                    <span className="toggle-symbol">{expanded.uta ? '-' : '+'}</span>
                </div>
                {expanded.uta && (
                    <div className="coursework-content">
                        <h4>Coursework:</h4>
                        <p>
                            Design and Analysis of Algorithms, Data Analysis and Modeling Techniques, Machine Learning, Data Mining, Web Data Management, Cloud Computing & Big Data, Artificial Intelligence, Special topics in Cellular Networks, Software Engineering.
                        </p>
                        {/* Awards Section */}
                        <div className="awards-content">
                            <h4> <img src="./award.jpg" alt="Award Icon" style={{ width: '50px', height: '50px', borderRadius:'50%'}} />
                                Honors & Awards
                            </h4>
                            <div className="award-item">
                                <h5>
                               
                                Lonestar Scholarship</h5>
                                <p>Achieved the prestigious Lonestar Scholarship awarded for academic excellence from the dept of Computer Science, University of Texas at Arlington, <b>valued at $1,000 with in-state tuition fee.</b></p>
                            </div>
                            <div className="award-item">
                                <h5>
                                
                                Gold Star Scholarship</h5>
                                <p>Recipient of the Goldstar Scholarship, recognized for academic excellence by the University of Texas at Arlington, <b>resulting in a $2,750 financial award.</b></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Gitam Section */}
            <div 
                className={`school-item ${expanded.gitam ? 'expanded' : ''}`} 
                onClick={() => toggleExpand('gitam')}
            >
                <div className="school-header">
                    <div className="school-info">
                        <h2 className="school-name">
                         <img src="./gradcap.png" alt="Graduation Cap" style={{ width: '50px', height: '50px', borderRadius:'50%' }} />
                         
                         Gitam University 
                            
                        </h2>
                        
                        <h3 className="degree-info">
                            Bachelor of Technology in Computer Science and Engineering | CGPA: 8.39/10<br></br>
                            <span className="date">Jun. 2018 – May. 2022</span>
                        </h3>
                        <p className="location">Visakhapatnam, India</p>
                    </div>
                    <span className="toggle-symbol">{expanded.gitam ? '-' : '+'}</span>
                </div>
                {expanded.gitam && (
                    <div className="coursework-content">
                        <h4>Coursework:</h4>
                        <p>
                            Programming with Java, C++, C, UNIX, Data Structures, Design and Analysis of Algorithms, Web Technologies, Cloud Computing, Artificial Intelligence, Machine Learning, Software Engineering, Unified Modeling Language (UML), Real-Time Systems, Operating Systems, Database Management Systems, Data Mining and Data Warehousing, Computer Networks, Operations and Supply Chain Management.
                        </p>

                    </div>
                )}
            </div>
        </section>
    );
};

export default School;
