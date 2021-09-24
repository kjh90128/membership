import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout}) => (
    <header className={styles.header}>
      {onLogout && (<button onClick={onLogout} className={styles.logout}>
        Logout
      </button>
      )}
      <img src="/images/logo.png" alt="logo" className={styles.img}/>
      <h1 className={styles.title}>Membership</h1>
    </header>
));

export default Header;