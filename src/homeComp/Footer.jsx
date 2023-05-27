import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        PBL Project: Department Dashboard
      </p>
      <p style={styles.text}>
        © {new Date().getFullYear()} Rohan Fargade(TL),Ayush Gunjal, Harsh Sanchaniya, Harshvardhan Grandhi 
      </p>
      <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-item" >
      <p style={{color:'black'}}>
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
        &nbsp;harshvardhangrandhi2021.it@mmcoe.edu.in</p>
      </div>
      <div className="contact-item">
      <p style={{color:'black'}}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
        &nbsp;Marthwada Mitra Mandal's College Of Engineering, Pune</p>
      </div>
    </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
  },
  text: {
    fontSize: '14px',
    color: '#666666',
    margin: '5px 0',
  },
};

export default Footer;
