import React, { Children } from 'react'
import styles from './AssetsTable.module.css';

export function Table({ children }) {
    return (
        <table className={styles.table}>
            {children}
        </table>
    )
}

export function TableHead({ children }) {
    return (
        <thead className={styles.thead}>
            {children}
        </thead>
    )
}
export function TableBody({ children }) {
    return (
        <tbody className={styles.tbody}>
            {children}
        </tbody>
    )
}

export function TableRow({ children }) {
    return (
        <tr className={styles.tr}>{children}</tr>
    )
}

export function TD({ children }) {
    return (
        <td className={styles.td}>{children}</td>
    )
}
    
export function TH({ children }) {
    return (
        <th className={styles.th}>{children}</th>
    )
}
    