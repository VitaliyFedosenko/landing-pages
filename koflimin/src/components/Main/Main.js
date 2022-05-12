import React from 'react';
import styles from './Main.module.scss';
// import Button from '../Button/Button';
import Contact from '../Contact/Contact';
import heart from '../assets/about/emoji_heart.png';
import star from '../assets/about/emoji_star.png';
import rocket from '../assets/about/emoji_rocket.png';
import papierWisey from '../assets/wisey/papier_pic.png';
import heartWisey from '../assets/wisey/heart_pic.png';
import hatWisey from '../assets/wisey/hat_pic.png';
import wiseyPreview from '../assets/wisey/wisey_img.png';


const Main = () => {
    return (
    <main className={styles.main}>

        <section className={styles.slogan} id='about_us'>

            <h1 className={styles.sloganBig}> Developing the best future for you </h1>
            <p className={styles.sloganLittle}> Making things simple, intuitive and expertly crafted! </p>
             <a href='#product'> <button className={styles.sloganBtn}> Our Products </button> </a> 

        </section>



        <section className={styles.about}>

            <h2 className={styles.aboutTitle}> We create digital products that make people’s lives easier </h2>

            <div className={styles.aboutInfo}>

                <div className={styles.aboutItem}>
                    <div className={styles.aboutItemHeader}>
                        <img src={heart} alt="emoji_heart" />
                        <h4 className={styles.aboutTheme}> Who we are </h4>
                    </div>
                    <p className={styles.aboutText}> We are a proactive team of designers, developers, and QA who love creating applications and digital experiences that matter. </p>

                </div>

                <div className={styles.aboutItem}>
                        <div className={styles.aboutItemHeader}>
                            <img src={star} alt="emoji_star" />
                            <h4 className={styles.aboutTheme}> What we do </h4>
                        </div>
                        <p className={styles.aboutText}> We are a strategically driven, digital-first company that lives at the intersection of creativity and technology. We solve consumer and business problems with our diversified applications keeping a balanced ecosystem across the user experience. </p>

                </div>

                    <div className={styles.aboutItem}>
                        <div className={styles.aboutItemHeader}>
                            <img src={rocket} alt="emoji_rocket" />
                            <h4 className={styles.aboutTheme}> Our goals </h4>
                        </div>
                        <p className={styles.aboutText}> We are developing a sustainable business and strengthening the international business environment. Our path is to implement big ideas and cover the most innovative and potential industries. </p>

                </div>

            </div>

        </section>

        

        <section className={styles.wisey} id='product'>

            <div className={styles.wiseyWrapper}>
                <div className={styles.wiseyHeader}>

                    <span className={styles.wiseyDesignation}> product </span>
                    <h3 className={styles.wiseyTitle}> Wisey </h3>
                    <p className={styles.wiseySlogan}> Find your next big passion. Pick a course you like. Start learning today! </p>
                    <a href='https://wisey.app/' target='_blank'> <button className={styles.wiseyBtn}> Go to Website </button> </a> 
                </div>

                <div className={styles.wiseyInfo}>
                    <div className={styles.wiseyPic}>
                        <img src={wiseyPreview} alt="wisey_preview" />
                    </div>

                    <div className={styles.wiseyItems}>

                        <div className={styles.wiseyItem}>
                            <div className={styles.wiseyItemHeader}>
                            <img src={papierWisey} alt="wisey_emoji_papier" />
                            <h6 className={styles.wiseyDescription}> Remeber more of what you learn </h6>
                            </div>
                            <p className={styles.wiseyText}> Get more knowledge in your head with effective tips </p>

                        </div>

                        <div className={styles.wiseyItem}>
                            <div className={styles.wiseyItemHeader}>
                            <img src={heartWisey} alt="wisey_emoji_heart" />
                            <h6 className={styles.wiseyDescription}> Start enjoying your studying </h6>
                            </div>
                            <p className={styles.wiseyText}> Find your own education style that fits you perfectly </p>

                        </div>

                        <div className={styles.wiseyItem}>
                            <div className={styles.wiseyItemHeader}>
                            <img src={hatWisey} alt="wisey_emoji_hat" />
                            <h6 className={styles.wiseyDescription}> Fight your procrastination </h6>
                            </div>
                            <p className={styles.wiseyText}> Strike a balance between perfectionism and procrastination </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        

        <section className={styles.contact} id='contact'>

            <h2 className={styles.contactTitle}> Feel free to contact for any questions or help </h2>

                <Contact />

                


        </section>

    </main>


    )

}

export default Main;







