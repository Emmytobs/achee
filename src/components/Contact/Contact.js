import React from 'react'
import Header from '../MainApp/Header/Header'
import Footer from '../MainApp/Footer/Footer'
import PageHeader from '../Shared/PageHeader/PageHeader'

import { PrimaryButton } from '../Shared/Utilities'

import styles from './Contact.module.css'

function Contact() {
    return (
        <>
        <Header />
        <div className={styles.contactContainer}>
            <PageHeader 
                title="Contact Us"
                description="Fill the form below and we will get back to you within 24 hours"
            />
            <div className={styles.formContainer}>
                <div className={styles.firstName}>
                    <Input 
                        type="text"
                        labelText="First Name"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className={styles.lastName}>
                    <Input 
                        type="text"
                        labelText="Last Name"
                        placeholder="Enter your last name"
                    />
                </div>
                <div className={styles.email}>
                    <Input 
                        type="email"
                        labelText="Email Address"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className={styles.phone}>
                    <Input 
                        type="phone"
                        labelText="First Name"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className={styles.textarea}>
                    <textarea placeholder="Enter your message" />
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Contact

function Input(props) {
    return (
        <>
            <label for={props.labelText} className={styles.label} >{props.labelText}</label>
            <input id={props.labelText} className={styles.input} type={props.type && 'text'} placeholder={props.placeholder} />
        </>
    )
}