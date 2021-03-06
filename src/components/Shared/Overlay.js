import React, { useEffect } from 'react'
import styles from './Overlay.module.css'

function Overlay(props) {
    useEffect(() => {
        // When overlay is showing, user shouldn't be able to scroll
        const bodyElement = document.querySelector('body');
        bodyElement.style.overflowY = "hidden";
       
        // Clean-up function will set overflow to scroll on body element
        return () => {
            bodyElement.style.overflowY = "scroll";
       }
    })
    const closeModal = (e) => {
        // targetToCloseModal is used if you don't want to close the modal when any part of the overlay is clicked.
        // This is useful for when you have a modal close button and you want only that button to close the modal
        const targetId = props.targetToCloseModal ? props.targetToCloseModal : 'overlay';
        
        if (e.target.id === targetId) {
            props.closeModalHandler(false);
        }
    }
    return (
        <div id="overlay" className={`display-flex ${styles.overlay}`} onClick={closeModal} style={props.style}>
            {props.children}
        </div>
    )
}

export default Overlay
