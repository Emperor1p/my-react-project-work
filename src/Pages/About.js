import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import myImage from '../Images/Peter.jpg'
import myPhoto  from '../Images/doctors-3.jpg'
import myPhotos from '../Images/testimonials-4.jpg'

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="page-title">About Us</h1>
          <p className="lead-text">
            Discover who we are, what we do, and why we do it.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <h2>Our Mission</h2>
          <p>
            At Emperor E-commerce, our mission is to serve you the best service and provide you with a topnotch products. We are committed to quality products and strive to to make your daily experience a fantastic one.
          </p>
        </Col>
        <Col md={6} className="mb-4">
          <h2>Our History</h2>
          <p>
            Founded in 2020, Emperor E-commerce began with in August 7th 2020 with a collaboration with Jumia and AliExpress but now a standalone company that provide quality services. Over the years, we have achieved over 5000 product delivery across the globe, continually evolving to meet the needs of our customers.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12}>
          <h2>Meet the Team</h2>
          <Row>
            <Col md={4}>
              <Card className="team-card">
              
                <Card.Img variant="top" img src={myImage} alt='Hero'  />
                
                <Card.Body>
                  <Card.Title>Emperor Peter</Card.Title>
                  <Card.Text>
                    Co-Founder & CEO
                  </Card.Text>
                  <Button variant="outline-primary">View Profile</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="team-card">
              <Card.Img variant="top" img src={myPhoto} alt='Hero'  />
                <Card.Body>
                  <Card.Title>John Smith</Card.Title>
                  <Card.Text>
                    Managing Officer
                  </Card.Text>
                  <Button variant="outline-primary">View Profile</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="team-card">
              <Card.Img variant="top" img src={myPhotos} alt='Hero'  />
                <Card.Body>
                  <Card.Title>Mike Charles</Card.Title>
                  <Card.Text>
                    Chief Technology Officer
                  </Card.Text>
                  <Button variant="outline-primary">View Profile</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more team members here */}
          </Row>
        </Col>
      </Row>

      <Row className="text-center mb-4">
        <Col>
          <h2>Contact Us</h2>
          <p>
            Have questions or want to learn more about us? Feel free to <a href="/contact" className="contact-link">get in touch</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
