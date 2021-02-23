import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PageHeader from '../../Shared/PageHeader/PageHeader';
import { Button, PrimaryButton } from '../../Shared/Utilities/Button/Button';
import { Form, Input } from '../../Account/Form/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './Profile.module.css';

import defaultAvatar from './images/default-avatar.png';
import premium from './images/premium.png';
import checkIcon from './images/check-icon.png';

function Profile() {
    return (
        <>
          <Header />
          <PageHeader title="Profile" description="The information below is your filled profile information" />
            <div className={styles.profileContainer}>
              <div className={styles.avatar}>
                <img src={defaultAvatar} alt="Default Avatar Img" width="130px" height="130px" />
                <Button>Upload image</Button>
              </div>

              <div className={styles.userInformation}>
                <h3>Basic Information</h3>
                <div className={styles.formContainer}>
                  <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', phone: '', country: '', reinvestingDividends: false }}
                    onSubmit={(values) => {

                    }}
                  >
                    {
                      ({ handleSubmit, handleChange, values, errors, touched }) => (
                        <Form onSubmit={handleSubmit} noValidate>
                          <div className={styles.gridUserInformation}>
                            <Input 
                                name="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                id="firstName"
                                labelText="First Name"
                                onChange={handleChange}
                                value={values.firstName}
                                errors={(touched.firstName && errors.firstName) && errors.firstName}
                                noImage
                            />
                            <Input 
                                name="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                id="lastName"
                                labelText="Last Name"
                                onChange={handleChange}
                                value={values.lastName}
                                errors={(touched.lastName && errors.lastName) && errors.lastName}
                                noImage
                            />
                            <Input 
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                id="email"
                                labelText="Email"
                                onChange={handleChange}
                                value={values.email}
                                errors={(touched.email && errors.email) && errors.email}
                                noImage
                            />
                            <Input 
                                name="phone"
                                type="phone"
                                placeholder="Enter your phone number"
                                id="phone"
                                labelText="Phone Number"
                                onChange={handleChange}
                                value={values.phone}
                                errors={(touched.phone && errors.phone) && errors.phone}
                                noImage
                            />
                            <div>
                              <span>Reinvesting Dividend</span>
                              <input type="checkbox" />
                            </div>
                            <Input 
                                name="country"
                                type="text"
                                placeholder="Type your country"
                                id="country"
                                labelText="Country"
                                onChange={handleChange}
                                value={values.country}
                                errors={(touched.country && errors.country) && errors.country}
                                noImage
                            />
                          </div>
                          <PrimaryButton>Save Information</PrimaryButton>
                        </Form>
                      )
                    }
                  </Formik>
                
                </div>
              </div>

              <div className={styles.premium}>
                <img src={premium} alt="Premium icon" width="92px" height="117px" />
                <h2>Join the Premium Club</h2>
                <p>Upgrade your account to premium to enjoy Achee unlimited features.</p>
              </div>
              <div className={styles.plansContainer}>
                <div className={styles.currentContainer}>
                  <div className={styles.current}>
                    <div><h3>Basic Plan</h3> <span>Free</span> / <span>Current Plan</span></div>
                    <Button>Upgrade Now</Button>
                  </div>
                  <div className={styles.features}>
                    <div>
                      <Feature>Breaking news and alerts</Feature>
                      <Feature>Real time stock quotes</Feature>
                      <Feature>Excel export</Feature>
                    </div>
                    <div>
                      <Feature>Account aggregation</Feature>
                    </div>
                  </div>
                </div>
                <div className={'display-flex justify-between align-center ' + styles.plans}>
                    <div className={styles.plan}>
                      <p className={styles.planTitle}>Basic Plan</p>
                      <div className={styles.planPricing}>
                        <h1>FREE</h1>
                      </div>
                      <p>The basic plan is free. It is basically for you to familiarize yourself with Achee.</p>

                      <div className={styles.featureContainer}>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                      </div>
                    </div>
                    <div className={styles.plan}>
                      <p className={styles.planTitle}>Premium Plan</p>
                      <div className={styles.planPricing}>
                        <h1>$35</h1> / 6 months
                      </div>
                      <p>Enjoy more features for <span className={styles.boldHighlight}>6 months</span> when you upgrade your account.</p>

                      <div className={styles.featureContainer}>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                        <Feature>lorem ipsum dolor sit amun</Feature>
                      </div>
                      <Button>Upgrade Now</Button>
                    </div>
                    <div className={`${styles.plan} ${styles.lastPlan}`}>
                      <p className={styles.planTitle}>Premium Plan</p>
                      <div className={styles.planPricing}>
                        <h1>$60</h1> <span>/ 1 year</span> <span className={styles.calculatedSavings}>Save $10</span>
                      </div>
                      <p>Enjoy more features for <span className={styles.boldHighlight}>a year</span> when you upgrade your account.</p>

                      <div className={styles.featureContainer}>
                        <PremiumFeature>lorem ipsum dolor sit amun</PremiumFeature>
                        <PremiumFeature>lorem ipsum dolor sit amun</PremiumFeature>
                        <PremiumFeature>lorem ipsum dolor sit amun</PremiumFeature>
                        <PremiumFeature>lorem ipsum dolor sit amun</PremiumFeature>
                        <PremiumFeature>lorem ipsum dolor sit amun</PremiumFeature>
                        <PremiumFeature>lorem ipsum dolor sit amun</PremiumFeature>
                        <PremiumFeature>lorem ipsum dolor sit amun</PremiumFeature>
                        <PremiumFeature>lorem ipsum dolor sit amun</PremiumFeature>
                      </div>
                      <Button>Upgrade Now</Button>
                    </div>
                </div>
              </div>
            </div>
          <Footer />
        </>
    )
}

export default Profile

function Feature(props) {
  return (
    <div className={'display-flex justify-start align-center ' + styles.feature}>
      <img src={checkIcon} alt="Check Icon" width="24px" height="24px" />
      <span>{props.children}</span>
    </div>
  )
}

function PremiumFeature(props) {
  return (
    <div className={`display-flex justify-start align-center ${styles.feature}  ${styles.premiumFeature}`}>
      <img src={checkIcon} alt="Check Icon" width="24px" height="24px" />
      <span>{props.children}</span>
    </div>
  )
}