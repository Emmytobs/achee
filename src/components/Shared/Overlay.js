import React from 'react'
import styles from './Overlay.module.css'

function Overlay(props) {
    const closeModal = (e) => {
        // targetToCloseModal is used if you don't want to close the modal when any part of the overlay is clicked.
        // This is useful for when you have a modal close button and you want only that button to close the modal
        const targetId = props.targetToCloseModal ? props.targetToCloseModal : 'overlay';
        // console.log(e.target.id)
        if (e.target.id === targetId) {
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
