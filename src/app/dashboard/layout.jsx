import React from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';
import styles from '../ui/dashboard/dashboard.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <Sidebar />
        </div>
        <div className={styles.navbar}>
            <Navbar />
            { children }
            <Footer />
        </div>
    </div>
  )
}

export default Layout