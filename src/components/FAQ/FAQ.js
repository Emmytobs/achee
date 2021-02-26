import React from 'react'
import PageHeader from '../Shared/PageHeader/PageHeader';
import Header from '../MainApp/Header/Header' 
import Footer from '../MainApp/Footer/Footer' 

import { Accordion, AccordionItem, Title, Content } from '../Shared/Utilities/Accordion';

import styles from './FAQ.module.css';

function FAQ() {

    // let indexIsActive = false;

    // const isActiveIndex = (isActiveIndex) => {
    //     return isActiveIndex;
    //     // console.log(isActiveIndex, activeIndex);
    // }

    return (
        <div className={styles.faqContainer}>
        <Header />
        <PageHeader 
            title="Frequently Asked Questions"
            description="Here are some frequently asked questions. We hope you’ll find your answer here." 
        />
        <div className={styles.accordionWrapper}>
            <Accordion>
                <AccordionItem>
                {/* <AccordionItem isActiveIndex={isActiveIndex}> */}
                    <div className={styles.item}>
                        <Title>
                            <div className={styles.title}>
                                <p>What is Achee?</p>
                            </div>
                        </Title>
                        <Content>
                            <p className={styles.content}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi eum ab, temporibus dolor voluptatem unde quod modi quo consectetur ducimus accusantium optio repellendus natus ad accusamus. Sed fugiat aut perspiciatis labore odit voluptatum, dolorum excepturi exercitationem impedit repellat magni.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi eum ab, temporibus dolor voluptatem unde quod modi quo consectetur ducimus accusantium optio repellendus natus ad accusamus. Sed fugiat aut perspiciatis labore odit voluptatum, dolorum excepturi exercitationem impedit repellat magni.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi eum ab, temporibus dolor voluptatem unde quod modi quo consectetur ducimus accusantium optio repellendus natus ad accusamus. Sed fugiat aut perspiciatis labore odit voluptatum, dolorum excepturi exercitationem impedit repellat magni.
                            </p>
                        </Content>
                    </div>
                </AccordionItem>
                <AccordionItem>
                {/* <AccordionItem isActiveIndex={isActiveIndex}> */}
                    <div className={styles.item}>
                        <Title>
                            <div className={styles.title}>
                                <p>Which markets and securities are covered by Achee?</p>
                            </div>
                        </Title>
                        <Content>
                            <p className={styles.content}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi eum ab, temporibus dolor voluptatem unde quod modi quo consectetur ducimus accusantium optio repellendus natus ad accusamus. Sed fugiat aut perspiciatis labore odit voluptatum, dolorum excepturi exercitationem impedit repellat magni.
                            </p>
                        </Content>
                    </div>
                </AccordionItem>
                <AccordionItem>
                {/* <AccordionItem isActiveIndex={isActiveIndex}> */}
                    <div className={styles.item}>
                        <Title>
                            <div className={styles.title}>
                                <p>Does Achee offer trading services?</p>
                            </div>
                        </Title>
                        <Content>
                            <p className={styles.content}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi eum ab, temporibus dolor voluptatem unde quod modi quo consectetur ducimus accusantium optio repellendus natus ad accusamus. Sed fugiat aut perspiciatis labore odit voluptatum, dolorum excepturi exercitationem impedit repellat magni.
                            </p>
                        </Content>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>

        <Footer />
        </div>
    )
}

export default FAQ;