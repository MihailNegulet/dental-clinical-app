import React from 'react';
import './Testimonials.css';
import testimonial1 from '../../assets/videos/testimonial1.mp4';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">Pacienții noștri vorbesc</h2>
      
      {/* Containerul pentru un singur testimonial */}
      <div className="single-testimonial">
        <div className="video-wrapper">
          <video 
            controls 
            className="testimonial-video"
          
          >
            <source src={testimonial1} type="video/mp4" />
            Browser-ul tău nu suportă tag-ul video.
          </video>
        </div>
        <div className="patient-info">
          <p>BRIGHT & SHINE (Detartraj ultrasunete, periaj profesional, air flow)</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;