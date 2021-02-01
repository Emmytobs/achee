import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Referrals.module.css';

import {Input} from '../../Account/Form/Form'

import referralIcon from './referral 1.png';
import { PrimaryButton } from '../../Shared/Utilities';

function Referrals() {
    return (
        <>
            <Header />
            <div className={'display-flex '+ styles.flexContainer}>
                <div className={styles.referralsContainer}>
                    <img src={referralIcon} alt="Referral Icon" width="150px" height="150px" />
                    <h3>Referrals</h3>
                    <p>Invite your friends to Achee. You are just a step ahead.</p>

                    <div className={styles.inviteContainer}>
                        <div className={styles.invite}>
                            <h3>Invite your friends</h3>
                            <p>Insert your friends' email addresses and send them invitations to join achee</p>
                            <div className={'display-flex '+ styles.inputContainer}>
                                <input type="text" placeholder="Enter email addresses" />
                                <PrimaryButton>Send Invite</PrimaryButton>
                            </div>
                        </div>
                        <div className={styles.referralLink}>
                            <h3>Share the referral link</h3>
                            <p>You can also share your referral link by copying and sending it or sharing it via social media</p>
                            
                        <div className={'display-flex '+ styles.link}>
                                <div className={'display-flex '+ styles.linkContainer}>
                                    <span>achee.com?referral=1234567</span>
                                    <button>Copy link</button>
                                </div>
                                <div className={styles.socials}>
                                    <span className={styles.facebook}>FB</span>
                                    <span className={styles.twitter}>TW</span>
                                    <span className={styles.instagram}>IG</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Referrals
