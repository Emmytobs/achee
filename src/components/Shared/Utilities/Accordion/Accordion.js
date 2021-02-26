import React, { useState, useContext, useRef, useEffect, createContext } from 'react';
import styles from './Accordion.module.css';

const AccordionContext = createContext();

export function Accordion(props) {
    const [ activeIndex, setActiveIndex ] = useState(null);

    return (
        <div className={styles.accordionContainer} style={{ ...props }}>
            {
            props.children.map((child, index) => (
                <AccordionContext.Provider value={{ index, activeIndex, setActiveIndex }}>
                    {child}
                </AccordionContext.Provider>
            ))
            }
        </div>
    )
}

export function AccordionItem(props) {
    const { index, activeIndex, setActiveIndex } = useContext(AccordionContext);

    const isActiveIndex = index === activeIndex;
    React.useEffect(() => {
        props.isActiveIndex && props.isActiveIndex(isActiveIndex, activeIndex);
    }, [activeIndex]);

    const selectAsActiveIndex = (e) => {
        // const titleIsClicked = e.target.getAttribute('data-accordion-title');
        // console.log(e.target)

        // if (titleIsClicked) {
            setActiveIndex(index);
        // }
    }

    return (
        <div className={styles.accordionItem} onClick={selectAsActiveIndex}>
            {props.children}
        </div>
    )
}

export function Title(props) {
    return (
        <div className={styles.title} data-accordion-title>
            {props.children}
        </div>
    )
}
export function Content(props) {
    const { index, activeIndex} = useContext(AccordionContext);
    const contentRef = useRef();
    const [scrollHeight, setScrollHeight] = useState(null);

    const isIndex = index === activeIndex;

    useEffect(() => {
        const { scrollHeight }= contentRef.current;
        setScrollHeight(scrollHeight);
    }, []);

    const style = {
        maxHeight: isIndex ? `${scrollHeight}px` : '0px'
    }

    return (
        <div ref={contentRef} className={styles.content} style={{ ...style }} >
            {props.children}
        </div>
    )
}