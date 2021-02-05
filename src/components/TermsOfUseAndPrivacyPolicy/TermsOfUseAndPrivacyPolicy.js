import React from 'react'
import Header from '../MainApp/Header/Header'
import Footer from '../MainApp/Footer/Footer'
import PageHeader from '../Shared/PageHeader/PageHeader'

import styles from './TermsOfUseAndPrivacyPolicy.module.css';

function TermsOfUseAndPrivacyPolicy(props) {
    return (
        <>
           <Header {...props} />
           <div className={styles.container}>

                <PageHeader
                    title="Terms of Use and Privacy Policy"
                />
                <div className={styles.termsOfService}>
                    <h3>
                        Terms of service
                    </h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro minima optio esse. Pariatur nulla excepturi veritatis accusamus maiores expedita sequi dolores qui quisquam, nemo deleniti corporis ipsum corrupti voluptate delectus. Distinctio ea obcaecati iusto in dicta accusamus rem quidem, pariatur quaerat iure, nostrum quam sunt ab voluptatem commodi consectetur ducimus eaque blanditiis. Dolore mollitia autem minus natus officiis consectetur aperiam ratione, sit quam, rerum, ex temporibus! Molestias laborum cupiditate atque est, sed neque? Maiores, natus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit, minus fugiat, autem mollitia iure ducimus provident in eius excepturi sapiente sint aliquid molestias velit sunt quod dolore inventore ratione illo quo ex praesentium dolorum? Doloremque deserunt, eaque eligendi ea a commodi. Quod nemo atque deserunt maiores dolor, in exercitationem!
                    </p>
                </div>

                <div id="privacy-policy" className={styles.privacyPolicy}>
                    <h3>
                        Privacy Policy
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam vel nemo sed. Amet, deleniti exercitationem necessitatibus nihil ab voluptatem omnis totam et quaerat, delectus animi repellat accusamus aliquid facilis alias? Voluptatem sed, commodi fuga nisi aut placeat, dignissimos recusandae sequi accusamus alias vitae maiores soluta iusto animi ducimus qui quod quisquam saepe unde natus numquam veniam quasi. Inventore minus beatae id, atque dolore quas aut velit veritatis dicta eligendi enim, similique optio. Numquam fugit, dignissimos dolor asperiores aut est pariatur vitae? Vero cupiditate, sint, repellat eius et in eaque quo molestias quis voluptate vitae sit commodi, fugit dolorem fugiat!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, adipisci? Delectus quibusdam nemo sint, iure aperiam ab officia! Amet officia, magni odio maxime eius sint sed est modi porro fuga.
                    </p>
                </div>
           </div>
            
           <Footer /> 
        </>
    )
}

export default TermsOfUseAndPrivacyPolicy
