import React from 'react';
import FaqContent from '../FaqContent';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from './SubFaqSection.module.css';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const SubFaqSection = () => {

  return (
    <div className={styles['sub-faq-section-container']}>
      <div className={styles['sub-faq-section-heading-wrapper']}>
        <h1 className={styles['sub-faq-section-heading']}>Faq</h1>
      </div>
      <Accordion preExpanded={['a']}>
        <FaqContent
          uuid="a"
          title={"How much does it cost to list my space?"}
        />
        <FaqContent
          uuid="b"
          title={"What is required of guests before booking?"}
        />
        <FaqContent
          uuid="c"
          title={"How should I choose my listing price?"}
        />
        <FaqContent
          uuid="d"
          title={"How Canhelp me with setting price?"}
        />
        <FaqContent
          uuid="e"
          title={"What should I do if I'm uncomfortable hosting someone?"}
        />
        <FaqContent
          uuid="f"
          title={"What Protection do I have against property damage?"}
        />
      </Accordion>
    </div>
  );
};

export default SubFaqSection;