import React from 'react';
import styles from './Footer.module.scss';



const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <div className={styles.footerInfo}>
                <p className={styles.footerRights}> &#169; 2021 Koflimin Limited. All Rights Reserved </p>
                <p className={styles.footerLocation}> 26 Stavrou Street, Strovolos 2034, Nicosia </p>
              </div>

              <div className={styles.footerLinks}>
                <div>
                  <a className={styles.footerItem} href="/wisey/tos.html" target="_blank">Terms of Use</a>
                </div>
                <div>
                  <a className={styles.footerItem} href="/wisey/privacy.html" target="_blank">Privacy Policy</a>
                </div>
              </div>
        
            </div>
            
        </footer>
    )
}


export default Footer;