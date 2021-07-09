import React from 'react';

import Form from './Form';

import styles from '../css/FormWrapper.module.css';

const FormWrapper = () => {
    return (
        <div className={styles.formWrapper}>
            <Form/>
        </div>
    )
}

export default FormWrapper;