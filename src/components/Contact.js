import React, { useState, useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Use the same CSS file for consistent styling

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const form = useRef(); // Define the form reference

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ezjez2c', 'template_6irzc4e', form.current, 'RA18aAcZMRBY7t3kG')
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('Error:', error);
        }
      );

    setFormData({ from_name: '', from_email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="hcont"><strong>Contact</strong></h1>
      <Container>
        <Form ref={form} onSubmit={sendEmail}> {/* Attach the form ref here */}
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ display: 'block', margin: '20px auto' }}
          >
            Send
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
