import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout}) => (
    <header className={styles.header}>
      {onLogout && (<button onClick={onLogout} className={styles.logout}>
        Logout
      </button>
      )}
      <img src="/images/hotel.png" alt="logo" className={styles.logo}/>
      <h1 className={styles.title}>Staff Management</h1>
    </header>
));

export default Header;