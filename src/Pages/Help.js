import React from 'react';
import { Container, Row, Col, Accordion, Form, Button } from 'react-bootstrap';

const Help = () => {
  return (
    <Container className="my-5 makered">
      <h1 className="text-center mb-4">Help Center</h1>
      
      {/* Contact Support */}
      <Row className="mb-5">
        <Col md={6}>
          <h2>Contact Support</h2>
          <Form>
            <Form.Group controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="contactEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6} className='email '>
          <h3>Email Support</h3>
          <p>Email us at <a href="mailto:adewalep097@gmail.com" >support@example.com</a></p>
          <h3>Phone Support</h3>
          <p>Call us at +123 456 7890 (Mon-Fri, 9 AM - 6 PM)</p>
          <h3>Live Chat</h3>
          <p>Click here to start a <a href="/live-chat">live chat</a>.</p>
        </Col>
      </Row>

      {/* FAQs */}
      <Row className="mb-5">
        <Col>
          <h2>Frequently Asked Questions (FAQs)</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I create an account?</Accordion.Header>
              <Accordion.Body>
                To create an account, click on the "Sign Up" button at the top right of the homepage and fill out the registration form.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
  <Accordion.Header>What payment methods do you accept?</Accordion.Header>
  <Accordion.Body>
    We accept all major credit cards, PayPal, and bank transfers.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="2">
  <Accordion.Header>How do I track my order?</Accordion.Header>
  <Accordion.Body>
    You can track your order by logging into your account and visiting the "Order History" page.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="3">
  <Accordion.Header>What is your return policy?</Accordion.Header>
  <Accordion.Body>
    We offer a 30-day return policy for unused and unopened items. Please contact our support team to initiate a return.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="4">
  <Accordion.Header>How do I reset my password?</Accordion.Header>
  <Accordion.Body>
    To reset your password, click on "Forgot Password" on the login page and follow the instructions to reset it via email.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="5">
  <Accordion.Header>Do you offer international shipping?</Accordion.Header>
  <Accordion.Body>
    Yes, we offer international shipping to most countries. Shipping fees and delivery times vary based on your location.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="6">
  <Accordion.Header>Can I change or cancel my order?</Accordion.Header>
  <Accordion.Body>
    You can change or cancel your order within 24 hours of placing it. Please contact our support team as soon as possible.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="7">
  <Accordion.Header>How can I contact customer support?</Accordion.Header>
  <Accordion.Body>
    You can contact our customer support via email, phone, or live chat. Visit the "Contact Us" page for more details.
  </Accordion.Body>
</Accordion.Item>

            
          
          </Accordion>
        </Col>
      </Row>

      
      <Row className="mb-5">
        <Col>
          <h2>User Guides</h2>
          <ul>
            <li><a href="/guides/how-to-order">How to Place an Order</a></li>
            <li><a href="/guides/how-to-track">How to Track Your Order</a></li>
            <li><a href="/guides/returns">Returns & Refunds</a></li>
            
          </ul>
        </Col>
      </Row>

      
      <Row className="mb-5">
        <Col>
          <h2>Troubleshooting</h2>
          <ul>
            <li><a href="/troubleshooting/login-issues">Can't log in?</a></li>
            <li><a href="/troubleshooting/payment-failures">Payment failed?</a></li>
            <li><a href="/troubleshooting/order-not-received">Order not received?</a></li>
            
          </ul>
        </Col>
      </Row>

    </Container>
  );
};

export default Help;
