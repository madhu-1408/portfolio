import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Work.css';

const internships = [
    {
        company: "Springer Capital",
        role: "Software and Network Engineering Intern",
        duration: "Sept'24 - Present",
        description: "Worked on developing and maintaining network applications, contributing to software engineering projects."
    },
    {
        company: "SmartKnower",
        role: "Machine Learning Intern",
        duration: "Jul'21 - Aug'21",
        description: "Assisted in the development of machine learning models, conducted data analysis, and created data visualizations."
    },
    {
        company: "The Sparks Foundation",
        role: "Web Development Intern",
        duration: "Jul'21 - Aug'21",
        description:" Developed an integrated web application with multiple payment gateways and invoice generation."
    },
    {
        company: "Star Computers",
        role: "AWS Intern",
        duration: "Jul'21 - Aug'21",
        description: "Gained hands-on experience deploying AWS VPC and implementing scalable cloud solutions within the cloud infrastructure."
    }
];

const Work = () => {
    return (
        <section id="work" className="work-section">
            <h1 className="hwork"><strong>Work Experience</strong></h1>
            <VerticalTimeline>
                {internships.map((internship, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        iconStyle={{ 
                            background: '#F5DEB3', 
                            color: '#333333',
                            border: '2px solid ivory', // Grey border around the icon
                            boxShadow: 'none' // Remove box shadow to keep it clean
                        }} 
                        contentStyle={{ background: 'transparent', color: 'ivory' }} 
                    >
                        <h3 className="vertical-timeline-element-title">{internship.role}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{internship.company} | {internship.duration}</h4>
                        <p>{internship.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Work;
