import React from 'react'

import styles from './PageHeader.module.css';

function PageHeader({ title, description="" }) {
    return (
        <header className={styles.header}>
            <h2 className={styles.pageTitle}>{ title }</h2>
            <p className={styles.pageDescription}>{ description }</p>
        </header>
    )
}

export default PageHeader
