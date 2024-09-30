import React from 'react';
import './Skills.css';

const skillsData = [
    {
        category: 'Programming Languages',
        skills: ['Python', 'Java', 'C', 'C++', 'Scala'],
    },
    {
        category: 'Web Development',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'PHP', 'XML', 'Apache Spark'],
    },
    {
        category: 'Databases',
        skills: ['MySQL', 'PostgreSQL', 'Oracle Live SQL'],
    },
    {
        category: 'Data Science & Machine Learning',
        skills: [  'TensorFlow',  'Keras', 
                     'Statistics', 'Natural Language Processing (NLP)', 'Convolutional Neural Networks'
        ],
    },
    {
        category: 'Cloud Platforms',
        skills: ['AWS (EC2|S3|IAM|VPC)', 'Azure'],
    },
    {
        category: 'Developer Tools',
        skills: ['VS Code', 'Eclipse', 'Jupyter Notebook', 'Power BI', 'Databricks','Power Automata'],
    },
    {
        category: 'Office Suites',
        skills: ['Excel','Word','Power Point Presentation','Outlook'],
    },
];


const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h1 className="mb-4 text-center"><strong>Skills</strong></h1>
            <div className="skills-container">
                {skillsData.map((category, index) => (
                    <div className="skill-category" key={index}>
                        <h2 className="skill-category-title">{category.category}</h2>
                        <div className="skill-list">
                            {category.skills.map((skill, idx) => (
                                <span className="skill-item" key={idx}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
