import React from 'react';
import styles from './Footer.scss';
import { Link } from 'react-router';

const Footer = () => (
  <div className={styles.container}>
      <div className={styles.madeBy}><span>Made with &#10084; by Team Oblik</span></div>
  </div>
);

export default Footer;

// <ul className={styles.mainNav}>
//       <Link to="/how-it-works"><li>How it Works</li></Link>
//       <Link to="/about-us"><li>About Us</li></Link>
//       <li><a href="#">Install Oblik</a></li>
//     </ul>

