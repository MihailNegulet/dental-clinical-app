import React from 'react';
import './ContactInfo.css';
import clinicImage from '../../assets/clinic-location.jpg';
import facebookIcon from '../../assets/facebook-icon.png';
import instagramIcon from '../../assets/instagram-icon.png';
import FormProgramare from '../formProgramare/FormProgramare';
import TargetSection from '../TargetSection';

  
const ContactInfo = () => {
return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Contact</h1>
        <p>Descoperă zâmbetul perfect la eDENTIFY</p>
      </div>

      <div className="contact-container">
        {/* Sectiune Informatii Contact */}
        <section className="contact-info">
          <div className="info-card">
            <h2>Informații de Contact</h2>
            
            <div className="info-item">
              <div className="icon">📞</div>
              <div>
                <h3>Telefon</h3>
                <p>+40 773 933 505</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>receptie.dentify@gmail.com</p>
               
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <h3>Adresă</h3>
                <p>Strada George Missail, Nr. 119</p>
                <p>București, Sector 1</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">🕒</div>
              <div>
                <h3>Program</h3>
                <p>Luni-Vineri: 9:00 - 20:00</p>
                <p>Sâmbătă: Închis</p>
                <p>Duminică: Închis</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Urmărește-ne</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/edentifyclinic" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/edentifydentalcenter/" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="clinic-image">
            <img src={clinicImage} alt="Clinica noastră" />
          </div>
        </section>

      {/* Sectiune Formular Programare */}
        <TargetSection sectionId="formProgramare" >
        <FormProgramare />;
        </TargetSection>
      </div>
    </div>
  );
};

export default ContactInfo;