import React from 'react';
import Popup from './Popup/Popup';
import { Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import styles from './Contact.module.scss';
// import Button from '../Button/Button';




const Contact = () => {

    const [ openPopup, setOpenPopup ] = React.useState(false);



    const validationsSchema = yup.object().shape({
        name: yup.string().matches(/^[A-zА-яЁё]+$/, 'must contain only letters').required('is required!'),
        email: yup.string().email('provide a valid email address').required('is required!'),
        message: yup.string()
    });

        

    return (
        
        <div>
            { openPopup && <Popup closePopup={setOpenPopup} /> }
            <Formik 

                

            const initialValues = {{
                name: '',
                email: '',
                message: '',
            }}
            validateOnBlur
            
            onSubmit={(values, onSubmitProps) => {   

                axios.post('https://hup7d519i8.execute-api.us-east-1.amazonaws.com/dev/messages'
                , JSON.stringify(values)).then(response => {
                     
                        if (response.status === 200) 
                        setOpenPopup(true)
                    
                })
            
                    

                onSubmitProps.resetForm()
            }}         


            validationSchema={validationsSchema}
            >
            
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                
                <div className={styles.form} >

                    <div className={styles.formLines}>

                        <div className={styles.formItems}>
                            
                            <label className={styles.formLabel} htmlFor={`name`}> Name {touched.name && errors.name && <p className={styles.formError}> { errors.name } </p> } </label> 
                            
                            <input
                                className={styles.formInput}
                                type={`text`}
                                name={`name`}
                                placeholder={`Name`}
                                maxLength={'20'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name} 
                            />
                        </div>
                        

                        <div className={styles.formItems}>
                            <label className={styles.formLabel} htmlFor={`email`}> Email {touched.email && errors.email && <p className={styles.formError}> { errors.email } </p>}</label> 
                            <input
                                className={styles.formInput}
                                type={`email`}
                                name={`email`}
                                placeholder={`Email`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email} 

                            />
                        </div>
                        

                    </div>

                        <div className={styles.formItems}>
                            <label className={styles.formLabel} htmlFor={`message`}> Message </label> 
                            <textarea 
                                className={styles.formInput}
                                type={`text`}
                                name={`message`}
                                placeholder={`Message`}
                                maxLength={'500'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message} 

                            />
                        </div>

                    <div className={styles.formSend} >
                    
                        <button 
                        className={styles.formSendBtn} 
                        disabled={!isValid && !dirty} 
                        onClick={handleSubmit} 
                        type={`submit`}> Send message </button>
                        
                    </div>

                </div>

            )}

            </Formik>

        </div>

    )
    
}

export default Contact;