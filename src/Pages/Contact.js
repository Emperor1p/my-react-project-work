import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    successMessage: '',
    errorMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(prevState => ({ ...prevState, isSubmitting: true }));

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then(() => {
        setFormStatus({
          isSubmitting: false,
          successMessage: 'Message sent successfully!',
          errorMessage: ''
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          location: '',
          message: ''
        });
      })
      .catch(() => {
        setFormStatus({
          isSubmitting: false,
          successMessage: '',
          errorMessage: 'Failed to send message.'
        });
      });
  };

  return (
    <div className="container  contact  w-50 mb-5">
      <h2>Contact Us</h2>
      <div className='row col-md-12'>
      <form onSubmit={handleSubmit} className='conat'>
        <div className="mb-1 ">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="mb-1">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {formStatus.successMessage && (
          <div className="alert alert-success">{formStatus.successMessage}</div>
        )}
        {formStatus.errorMessage && (
          <div className="alert alert-danger">{formStatus.errorMessage}</div>
        )}

        <button
          type="submit"
          className="btn btn-warning submit mb-5 "
          disabled={formStatus.isSubmitting}
          
        >
          {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
