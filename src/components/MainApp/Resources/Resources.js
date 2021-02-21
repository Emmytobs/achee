import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PageHeader from '../../Shared/PageHeader/PageHeader'

import styles from './Resources.module.css';

function Resources(props) {
    return (
        <>
            <Header />
            <div className={styles.resourcesContainer}>
                <PageHeader title="Resources" description="Get to read the latest resources and upgrade your knowledge on investment" />
                Resources page coming soon....
            </div>
            <Footer />
        </>
    )
}

export default Resources
