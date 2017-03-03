import React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router';

const Header = () => (
  <div className={styles.container}>
      <div className={styles.logo}><a href='#'>Oblik</a></div>
      <div className={styles.menuBtn}></div>
    <ul className={styles.mainNav}>
      <li>Menu</li>
      <hr/>
      <li><Link to="/how-it-works">How it Works</Link></li>
      <hr/>
      <li><Link to="/about-us">About Us</Link></li>
      <hr/>
      <li><a href="#">Install Oblik</a></li>
      <hr/>
    </ul>
  </div>
);

export default Header;