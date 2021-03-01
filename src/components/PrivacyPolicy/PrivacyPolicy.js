import React from 'react'
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
    return (
        <div className={styles.privacyContainer}>
            <div className={styles.pageHeader}>
                <h1>Privacy Policy</h1>
            </div>
            {/* <div className={styles.contentWrapper}> */}
                <div className={styles.content}>
                    <h2 className={styles.title}>Privacy Policy</h2>
                    <p>
                        Your privacy is important to us. It is Achee's policy to respect your privacy regarding any information we may collect from you across our website, https://achee.co, and other sites we own and operate.
                    </p>
                    <p>
                        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                    </p>
                    <p>
                        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
                    </p>
                    <p>
                        We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                    </p>

                    <p>
                        <strong>Additional Privacy Policy for applicable subjects as per the European General Data Protection Regulation</strong>
                    </p>
                    <p>
                        This section is applicable to subjects as per the requirements of the European General Data Protection Regulation (“GDPR”) which comes into effect on May 25, 2018. This section is to be read in addition to the Privacy Policy, Terms of Use and any other Agreement entered into with Achee by all visitors to the website and clients using the services of Achee. 
                    </p>
                    <p>
                        Achee handles two categories of data as mentioned above in this Privacy Policy, i.e. 
                        (1) Personal Information and (2) Non-Personal Information. As per this Policy, Achee shall have a right to use and disclose data obtained from all users/subjects in connection with visiting websites, support and/or use of the services of Achee. 
                    </p>
                    <p>
                        All users subjected to the GDPR guidelines agree to provide consent to this Policy. All users subjected to the GDPR, after giving written notice of stopping to use the services provided by Achee, shall have the right to erase or correct such (1) Personal Information OR (2) Non-Personal Information as processed by Achee. After giving a written notice, a user, who is subject to GDPR, shall have the right to receive Personal Information and Non-Personal Information, which is provided to Achee during the usage of Achee’s services, such that, this information may be used by another entity which is technically feasible by all parties to the maximum extent possible.
                    </p>
                    <p>
                        Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                    </p>
                    <p>
                        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                    </p>
                    <p>
                        Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                    </p>
                    <p>
                        This policy is effective as of 1st January 2021.
                    </p>
        
                </div>
            {/* </div> */}
        </div>
    )
}

export default PrivacyPolicy
