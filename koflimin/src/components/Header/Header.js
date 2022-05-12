import React from 'react';
import styles from '../Header/Header.module.scss';

import logo from '../assets/header/logo.svg';
import { items } from './MenuItems';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';


const Header = () => {

    const [ active, setActive ] = React.useState(false);

    const showMenu = () => {    
        setActive(!active)
    }


    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                    <img src={logo} alt="Logo" />
                </div>

                <div className={styles.headerBurger}>
                    <HiMenu className={styles.headerBurgerIcon} onClick={showMenu}/>
                </div>

                <nav className={active ? styles.headerMenuActive : styles.headerMenu}>


                    <ul className={styles.headerNavList}>

                        <div className={styles.headerClosed}>
                            <GrClose className={styles.headerClosedCross} onClick={showMenu}/>
                        </div>

                            {items.map((item, index) => 

                                <li >
                                    <a onClick={showMenu} href={item.itemLink} key={index}>
                                        {item.itemText} 
                                    </a>
                                </li>

                            )}
                        
                    </ul>
                        
                </nav>
            </div>


        </header>
    )
}

export default Header;