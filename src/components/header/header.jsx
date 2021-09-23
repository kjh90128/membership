import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => (
  <header className={styles.header}>
    {true && (<button onClick={onLogout} className={styles.logout}>
      Logout
    </button>
    )}
    <img src="/images/logo.png" alt="logo" className={styles.img}/>
    <h1 className={styles.title}>Membership</h1>
  </header>
);

export default Header;