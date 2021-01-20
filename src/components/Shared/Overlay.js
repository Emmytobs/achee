import React from 'react'
import styles from './Overlay.module.css'

function Overlay(props) {
    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            props.closeModalHandler(false);
        }
    }
    return (
        <div id="overlay" class={`display-flex ${styles.overlay}`} onClick={closeModal} style={props.style}>
            {props.children}
        </div>
    )
}

export default Overlay
