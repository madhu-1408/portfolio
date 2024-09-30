import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

const projectData = [
    {
        title: 'Amazon Product Review Analysis',
        image: '/img1.jpg', // Update with correct path
        github: 'https://github.com/madhu-1408/Sentiment-Analysis.git'
    },
    {
        title: 'Red Blue Nim',
        image: '/img2.jpg', // Update with correct path
        github: 'https://github.com/madhu-1408/Red-Blue-Nim.git',
    },
    {
        title: 'Expense 8 Puzzle Solver',
        image: '/img3.png', // Update with correct path
        github: 'https://github.com/madhu-1408/Expense-8-Puzzle.git',
    },
    {
        title: 'Minimum Spanning Tree',
        image: '/img4.jpg', // Update with correct path
        github: 'https://github.com/madhu-1408/Minimum-Spanning-Tree.git',
    },
    {
        title: 'Job Hunt Website',
        image: '/img5.jpg', // Update with correct path
        github: 'https://github.com/madhu-1408/JobHunt.git',
    },
    {
        title: 'Payment Gateway Integration',
        image: '/img6.png', // Update with correct path
        github: 'https://github.com/madhu-1408/payment_gateway_integration.git',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h1 className='hproj'><strong>Projects</strong></h1>
            <Container>
                <Row>
                    {projectData.map((project, index) => (
                        <Col md={4} className="mb-4" key={index}> 
                            <div className="project-item">
                                <p className="project-title">{project.title}</p>
                                <img src={project.image} alt={project.title} className="project-image" />
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <button className="btn-pink">View on GitHub</button>
                                </a>

                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
