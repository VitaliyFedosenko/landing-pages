import React from 'react';
import styles from '../Popup/Popup.module.scss';
import checkbox from '../../assets/popup/send_form_check.png'


const Popup = (props) => {

 const { closePopup } = props;

    return (
        
        <div className={styles.popup} > 
            <div className={styles.popupBody}>
                <div className={styles.popupContent}>
                    <img className={styles.popupCheckbox} src={checkbox} alt="checkbox" />
                        <p className={styles.popupSlogan}> Good job! </p>
                            <p className={styles.popupText}>Your message has been sent successfully.</p>
                            
                                <button className={styles.popupBtn} onClick={ () => closePopup(false)}> OK </button>
                                 
                </div>
            </div>
        </div>
        
    )
}

export default Popup;